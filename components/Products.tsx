"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
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
      "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
    imageAlt: "Skyline Istanbul di senja hari",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="produk"
      ref={sectionRef}
      style={{
        background: "#FFFCF7",
        paddingBlock: "clamp(96px, 14vw, 180px)",
        overflow: "hidden",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1360px",
          paddingInline: "clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Header — editorial pull */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20"
          style={{ gap: "48px" }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div
              className="flex items-center mb-6"
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
              <span
                className="eyebrow"
                style={{ color: "#B5933A" }}
              >
                04 — Layanan Kami
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5.6vw, 72px)",
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
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#44423C",
              maxWidth: "360px",
            }}
          >
            Penyediaan tiket pesawat khusus penerbangan umroh dan haji, layanan
            penuh dari ujung ke ujung, dan destinasi tambahan kelas premium —
            disusun dalam tiga tingkatan yang jelas.
          </p>
        </div>

        {/* Cards stack — editorial alternating layout */}
        <div className="flex flex-col" style={{ gap: "32px" }}>
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className="product-card"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "opacity 0.9s var(--ease-refined), transform 0.9s var(--ease-refined)",
                background: "#FAF8F2",
                border: "1px solid #E0DAC9",
                borderRadius: "4px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-12"
                style={{
                  minHeight: "440px",
                }}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                  style={{
                    position: "relative",
                    minHeight: "320px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 1.2s var(--ease-refined)",
                    }}
                  />
                  {/* Number watermark */}
                  <div
                    className="font-display"
                    style={{
                      position: "absolute",
                      top: "24px",
                      left: "32px",
                      fontSize: "20px",
                      fontStyle: "italic",
                      color: "#FAF8F2",
                      letterSpacing: "0.2em",
                      mixBlendMode: "difference",
                    }}
                  >
                    {card.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="lg:col-span-7 flex flex-col justify-between"
                  style={{
                    padding: "clamp(40px, 5vw, 64px)",
                  }}
                >
                  <div>
                    <span
                      className="eyebrow"
                      style={{
                        color: "#B5933A",
                        marginBottom: "20px",
                        display: "inline-block",
                      }}
                    >
                      {card.eyebrow}
                    </span>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(26px, 3vw, 38px)",
                        fontWeight: 400,
                        color: "#141414",
                        lineHeight: 1.1,
                        marginBottom: "20px",
                        maxWidth: "20ch",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: 1.75,
                        color: "#44423C",
                        marginBottom: "32px",
                        maxWidth: "52ch",
                      }}
                    >
                      {card.body}
                    </p>

                    {/* Features — refined two-col list */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "12px 24px",
                        marginBottom: "40px",
                      }}
                    >
                      {card.features.map((feat) => (
                        <li
                          key={feat}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "14px",
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
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
