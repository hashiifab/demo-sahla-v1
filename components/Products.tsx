"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProductCard {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
}

const cards: ProductCard[] = [
  {
    number: "I",
    eyebrow: "Mitra Terpercaya",
    title: "Maskapai pilihan untuk kenyamanan perjalanan.",
    body: "Sahla bekerja sama dengan enam maskapai kelas dunia untuk memastikan perjalanan Anda nyaman, tepat waktu, dan sesuai standar internasional.",
    features: [
      "Garuda Indonesia",
      "Saudia",
      "Oman Air",
      "Etihad Airways",
      "Emirates",
      "Qatar Airways",
    ],
    buttonLabel: "Lihat detail kemitraan",
    buttonHref: "#produk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=72&auto=format&fit=crop",
    imageAlt: "Kabin pesawat dengan suasana tenang",
  },
  {
    number: "II",
    eyebrow: "Cara Kami Bekerja",
    title: "Lima standar layanan yang tak ditawar.",
    body: "Sebagai prinsip operasional, kami menerjemahkan filosofi Sahla menjadi standar konkret yang dirasakan jemaah dari hari pertama hingga kepulangan.",
    features: [
      "Respon WhatsApp < 15 menit",
      "Manajemen perjalanan end-to-end",
      "Akomodasi hotel bintang 4 & 5",
      "Pembimbing bersanad",
      "Dokumentasi profesional",
    ],
    buttonLabel: "Pelajari standar kami",
    buttonHref: "#custome",
    image:
      "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?w=900&q=72&auto=format&fit=crop",
    imageAlt: "Detail arsitektur Masjidil Haram",
  },
  {
    number: "III",
    eyebrow: "Pilihan Platinum",
    title: "Ratusan destinasi untuk Umroh Plus.",
    body: "Lebih dari sekadar Mekkah-Madinah. Tambahkan Aqsa, Turki, Mesir, atau Dubai — kami susun perjalanan yang Anda akan ingat seumur hidup.",
    features: [
      "Aqsa, Istanbul, Cairo, Dubai",
      "Paket VIP eksklusif",
      "Layanan concierge 24/7",
      "Prioritas jadwal keberangkatan",
    ],
    buttonLabel: "Jelajahi destinasi",
    buttonHref: "#produk",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=900&q=72&auto=format&fit=crop",
    imageAlt: "Skyline Istanbul di senja hari",
  },
];

export default function Products() {
  const stickySectionRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Effect for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".product-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 160);
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    const section = document.getElementById("produk");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Effect for pinned horizontal scrolling (HANYA UNTUK MOBILE)
  useEffect(() => {
    const stickyEl = stickySectionRef.current;
    const horizontalEl = horizontalScrollRef.current;
    const stickyContentEl = stickyContentRef.current;

    if (!isMobile) {
      if (stickyEl) stickyEl.style.height = "auto";
      if (horizontalEl) {
        horizontalEl.style.overflowX = "visible";
        horizontalEl.scrollLeft = 0;
      }
      return;
    }

    if (!stickyEl || !horizontalEl || !stickyContentEl) return;

    if (horizontalEl) horizontalEl.style.overflowX = "hidden";

    let rafId = 0;
    let cachedEffectiveTop = 0;
    let cachedPinDuration = 0;
    const stickyOffset = 120;

    const recalc = () => {
      cachedPinDuration = horizontalEl.scrollWidth - horizontalEl.clientWidth;
      stickyEl.style.height = `${
        cachedPinDuration + stickyContentEl.offsetHeight
      }px`;
      cachedEffectiveTop = stickyEl.offsetTop - stickyOffset;
    };

    const calculateDimensions = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(recalc);
    };

    calculateDimensions();

    const resizeObserver = new ResizeObserver(calculateDimensions);
    resizeObserver.observe(horizontalEl);
    resizeObserver.observe(stickyContentEl);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const effectiveStickyTop = cachedEffectiveTop;
        const pinDuration = cachedPinDuration;
        const buffer = 2;

        if (
          scrollTop > effectiveStickyTop + buffer &&
          scrollTop < effectiveStickyTop + pinDuration - buffer
        ) {
          if (pinDuration > 0) {
            const scrollProgress =
              (scrollTop - effectiveStickyTop) / pinDuration;
            horizontalEl.scrollLeft = scrollProgress * pinDuration;
          }
        } else if (scrollTop <= effectiveStickyTop + buffer) {
          horizontalEl.scrollLeft = 0;
        } else if (scrollTop >= effectiveStickyTop + pinDuration - buffer) {
          horizontalEl.scrollLeft = pinDuration;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (stickyEl) {
        stickyEl.style.height = "auto";
      }
    };
  }, [isMobile]);

  return (
    <section id="produk" style={{ background: "#FFFCF7" }}>
      <div
        style={{
          paddingBlock: isMobile ? "64px" : "clamp(96px, 14vw, 180px)",
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "1360px",
            paddingInline: "clamp(20px, 4vw, 40px)",
          }}
        >
          {/* Header - Dipisahkan dari efek sticky agar scroll normal */}
          <div
            ref={headerRef}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20"
            style={{ gap: "32px lg:48px" }}
          >
            <div style={{ maxWidth: "640px" }}>
              <div
                className="flex items-center mb-4 lg:mb-6"
                style={{ gap: "16px" }}
              >
                <span
                  style={{
                    width: "48px",
                    height: "1px",
                    background: "#B5933A",
                    display: "inline-block",
                  }}
                />
                <span className="eyebrow" style={{ color: "#B5933A" }}>
                  04 — Layanan Kami
                </span>
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(36px, 5.6vw, 72px)",
                  fontWeight: 400,
                  color: "#141414",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Tiga pilar
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "#0B3D2C",
                    fontWeight: 400,
                  }}
                >
                  layanan
                </em>{" "}
                kami.
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.75,
                color: "#44423C",
                maxWidth: "360px",
              }}
            >
              Penyediaan tiket pesawat khusus penerbangan umroh dan haji,
              layanan penuh dari ujung ke ujung, dan destinasi tambahan kelas
              premium — disusun dalam tiga tingkatan yang jelas.
            </p>
          </div>

          {/* Wrapper untuk area yang akan menjadi sticky (HANYA KARTU) */}
          <div ref={stickySectionRef} style={{ position: "relative" }}>
            <div
              ref={stickyContentRef}
              style={{
                position: isMobile ? "sticky" : "static",
                // DIUBAH: Jarak dari atas layar saat menempel diperbesar menjadi 120px
                top: isMobile ? "120px" : "auto", 
                overflow: "hidden",
                paddingBottom: isMobile ? "24px" : "0",
              }}
            >
              {/* Container Scroll */}
              <div ref={horizontalScrollRef} className="no-scrollbar">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    minWidth: isMobile ? "850px" : "100%",
                    gap: isMobile ? "16px" : "32px",
                  }}
                >
                  {cards.map((card) => (
                    <article
                      key={card.title}
                      className="product-card"
                      style={{
                        opacity: 0,
                        transform: "translateY(40px)",
                        transition:
                          "opacity 0.9s var(--ease-refined), transform 0.9s var(--ease-refined)",
                        background: "#FAF8F2",
                        border: "1px solid #E0DAC9",
                        borderRadius: "4px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          minHeight: isMobile ? "220px" : "320px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          sizes="(max-width: 1023px) 80vw, 30vw"
                          style={{
                            objectFit: "cover",
                            transition: "transform 1.2s var(--ease-refined)",
                          }}
                        />
                        <div
                          className="font-display"
                          style={{
                            position: "absolute",
                            top: isMobile ? "16px" : "24px",
                            left: isMobile ? "20px" : "32px",
                            fontSize: isMobile ? "16px" : "20px",
                            fontStyle: "italic",
                            color: "#FAF8F2",
                            letterSpacing: "0.2em",
                            mixBlendMode: "difference",
                          }}
                        >
                          {card.number}
                        </div>
                      </div>

                      <div
                        className="flex flex-col flex-1"
                        style={{
                          padding: isMobile ? "24px" : "clamp(40px, 5vw, 64px)",
                        }}
                      >
                        <div className="flex-1">
                          <span
                            className="eyebrow"
                            style={{
                              color: "#B5933A",
                              marginBottom: isMobile ? "12px" : "20px",
                              display: "inline-block",
                              fontSize: isMobile ? "11px" : "12px",
                            }}
                          >
                            {card.eyebrow}
                          </span>

                          <h3
                            className="font-display"
                            style={{
                              fontSize: isMobile
                                ? "22px"
                                : "clamp(26px, 3vw, 38px)",
                              fontWeight: 400,
                              color: "#141414",
                              lineHeight: 1.1,
                              marginBottom: isMobile ? "16px" : "20px",
                              maxWidth: "20ch",
                            }}
                          >
                            {card.title}
                          </h3>

                          <p
                            style={{
                              fontFamily:
                                "var(--font-inter), Inter, sans-serif",
                              fontSize: isMobile ? "14px" : "16px",
                              lineHeight: 1.75,
                              color: "#44423C",
                              marginBottom: isMobile ? "24px" : "32px",
                              maxWidth: "52ch",
                            }}
                          >
                            {card.body}
                          </p>

                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                              display: "grid",
                              gridTemplateColumns: isMobile
                                ? "1fr"
                                : "repeat(auto-fit, minmax(200px, 1fr))",
                              gap: isMobile ? "10px" : "12px 24px",
                              marginBottom: isMobile ? "28px" : "40px",
                            }}
                          >
                            {card.features.map((feat) => (
                              <li
                                key={feat}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  fontFamily:
                                    "var(--font-inter), Inter, sans-serif",
                                  fontSize: isMobile ? "13px" : "14px",
                                  color: "#44423C",
                                }}
                              >
                                <span
                                  style={{
                                    width: "16px",
                                    height: "1px",
                                    background: "#B5933A",
                                    flexShrink: 0,
                                  }}
                                />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={card.buttonHref}
                          className="link-underline"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#0B3D2C",
                            textDecoration: "none",
                            alignSelf: "flex-start",
                          }}
                        >
                          {card.buttonLabel}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 7h12M8 2l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}