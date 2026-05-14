"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface OrgMember {
  image: string;
  name: string;
  role: string;
  bio: string;
  accentColor: string;
}

const members: OrgMember[] = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=72&auto=format&fit=crop",
    name: "Setiyo Wibowo",
    role: "Direktur",
    bio: "Memimpin visi & strategi Sahla Madinah dengan latar belakang puluhan tahun di industri travel ibadah.",
    accentColor: "#0B3D2C",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=72&auto=format&fit=crop",
    name: "Dyssa Gressinanthya R.",
    role: "Komisaris Utama",
    bio: "Mengawasi governance perusahaan dengan prinsip transparansi sebagai standar tertinggi.",
    accentColor: "#062319",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=72&auto=format&fit=crop",
    name: "Samsudin",
    role: "Komisaris",
    bio: "Memimpin audit dan compliance, memastikan setiap proses sesuai regulasi Kemenag.",
    accentColor: "#041710",
  },
];

export default function Organization() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickySectionRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .portrait-card")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("visible");
                  (el as HTMLElement).style.opacity = "1";
                  (el as HTMLElement).style.transform = "translateY(0)";
                }, i * 140);
              });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Efek Horizontal Scroll Pin (HANYA UNTUK MOBILE)
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
    <section
      id="organisasi"
      ref={sectionRef}
      style={{
        background: "#FAF8F2",
        // HAPUS: position: "relative" agar offsetTop sinkron dengan window.scrollY dari atas web!
      }}
    >
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
          {/* Header */}
          <div
            ref={headerRef}
            className="reveal flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20"
            style={{ gap: "32px lg:48px" }}
          >
            <div style={{ maxWidth: "560px" }}>
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
                  05 — Orang di Balik Sahla
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
                Mereka yang
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "#0B3D2C",
                    fontWeight: 400,
                  }}
                >
                  merancang
                </em>{" "}
                ketenangan Anda.
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.75,
                color: "#44423C",
                maxWidth: "340px",
              }}
            >
              Sahla Madinah dibangun oleh orang-orang yang mempercayai bahwa
              perjalanan ibadah adalah amanah, bukan transaksi.
            </p>
          </div>

          {/* Wrapper Sticky untuk Kartu Organisasi */}
          <div ref={stickySectionRef} style={{ position: "relative" }}>
            <div
              ref={stickyContentRef}
              style={{
                position: isMobile ? "sticky" : "static",
                top: isMobile ? "120px" : "auto",
                overflow: "hidden",
                paddingBottom: isMobile ? "24px" : "0",
              }}
            >
              {/* Container Horizontal Scroll */}
              <div ref={horizontalScrollRef} className="no-scrollbar">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    // Diubah jadi 850px agar scroll-nya lebih berasa dan tidak habis terlalu cepat
                    minWidth: isMobile ? "850px" : "100%",
                    gap: isMobile ? "16px" : "clamp(32px, 4vw, 56px)",
                  }}
                >
                  {members.map((m) => (
                    <article
                      key={m.name}
                      className="portrait-card"
                      style={{
                        opacity: 0,
                        transform: "translateY(40px)",
                        transition:
                          "opacity 0.9s var(--ease-refined), transform 0.9s var(--ease-refined)",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Frame Potret (Ukuran disesuaikan untuk layar kecil) */}
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "4/5",
                          background: m.accentColor,
                          borderRadius: "4px",
                          overflow: "hidden",
                          marginBottom: isMobile ? "16px" : "28px",
                        }}
                      >
                        <Image
                          src={m.image}
                          alt={`Potret ${m.name}`}
                          fill
                          sizes="(max-width: 1023px) 80vw, 33vw"
                          className="portrait-img"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>

                      {/* Blok Teks Caption */}
                      <div>
                        <h3
                          className="font-display"
                          style={{
                            fontSize: isMobile ? "20px" : "24px",
                            fontWeight: 400,
                            color: "#141414",
                            lineHeight: 1.2,
                            marginBottom: "6px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {m.name}
                        </h3>
                        <div
                          className="eyebrow"
                          style={{
                            color: "#B5933A",
                            marginBottom: isMobile ? "12px" : "16px",
                            fontSize: isMobile ? "11px" : "12px",
                          }}
                        >
                          {m.role}
                        </div>
                        <p
                          style={{
                            fontFamily:
                              "var(--font-inter), Inter, sans-serif",
                            fontSize: isMobile ? "13px" : "14px",
                            lineHeight: 1.7,
                            color: "#8A8780",
                            paddingRight: isMobile ? "12px" : "0", 
                          }}
                        >
                          {m.bio}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blok Catatan Editorial */}
          <div
            className="reveal"
            style={{
              marginTop: isMobile ? "64px" : "96px",
              paddingTop: isMobile ? "24px" : "32px",
              borderTop: "1px solid #E0DAC9",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "clamp(20px, 2.4vw, 28px)",
                fontStyle: "italic",
                color: "#0B3D2C",
                fontWeight: 400,
                maxWidth: "640px",
                lineHeight: 1.4,
              }}
            >
              &ldquo;Kami tidak menjual paket umrah. Kami merancang perjalanan
              yang akan Anda kenang seumur hidup.&rdquo;
            </span>
            <span className="eyebrow" style={{ color: "#8A8780" }}>
              — Setiyo Wibowo, Direktur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}