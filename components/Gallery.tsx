"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pelataran Masjidil Haram",
    caption: "Tawaf sebelum subuh",
    location: "Masjidil Haram, Makkah",
  },
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Jemaah berdoa di hadapan Ka'bah",
    caption: "Doa di hadapan Baitullah",
    location: "Mataf, Makkah",
  },
  {
    src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=85",
    alt: "Interior Masjid Nabawi",
    caption: "Cahaya pagi Raudhah",
    location: "Masjid Nabawi, Madinah",
  },
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kaligrafi pada dinding masjid",
    caption: "Detail kaligrafi mihrab",
    location: "Madinah",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".gallery-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, i * 150);
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
      id="galeri"
      ref={sectionRef}
      style={{
        background: "#F4EFE4",
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
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20"
          style={{ gap: "48px" }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div className="flex items-center mb-6" style={{ gap: "16px" }}>
              <span
                style={{
                  width: "48px",
                  height: "1px",
                  background: "#B5933A",
                  display: "inline-block",
                }}
              />
              <span className="eyebrow" style={{ color: "#B5933A" }}>
                06 — Cerita Jemaah
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
              Momen yang
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#0B3D2C",
                  fontWeight: 400,
                }}
              >
                tinggal
              </em>{" "}
              di hati.
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#44423C",
              maxWidth: "320px",
            }}
          >
            Bukan hanya foto — ini adalah jejak emosional dari setiap
            keberangkatan, hingga saat doa Anda pertama kali menyentuh
            Hijir Ismail.
          </p>
        </div>

        {/* Asymmetric editorial grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "24px" }}
        >
          {/* Large feature image — 7 cols, taller */}
          <figure
            className="gallery-item lg:col-span-7"
            style={{
              opacity: 0,
              transform: "translateY(32px) scale(0.98)",
              transition:
                "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
              margin: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: "4px",
                boxShadow: "0 30px 80px rgba(6, 35, 25, 0.18)",
              }}
              onMouseEnter={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector("img");
                if (img) img.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 1.6s var(--ease-refined)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(6, 35, 25, 0.6) 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  right: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
                  className="eyebrow"
                  style={{ color: "rgba(232, 217, 166, 0.95)" }}
                >
                  Frame 01
                </span>
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    color: "#FAF8F2",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {images[0].caption}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(250, 248, 242, 0.7)",
                  }}
                >
                  {images[0].location}
                </span>
              </figcaption>
            </div>
          </figure>

          {/* Right column — 5 cols, two stacked images */}
          <div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "24px" }}
          >
            {[images[1], images[2]].map((img, i) => (
              <figure
                key={img.src}
                className="gallery-item"
                style={{
                  opacity: 0,
                  transform: "translateY(32px) scale(0.98)",
                  transition:
                    "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
                  margin: 0,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: "4px",
                    boxShadow: "0 20px 50px rgba(6, 35, 25, 0.12)",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const imgEl = (e.currentTarget as HTMLDivElement).querySelector("img");
                    if (imgEl) imgEl.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    const imgEl = (e.currentTarget as HTMLDivElement).querySelector("img");
                    if (imgEl) imgEl.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 1.6s var(--ease-refined)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(6, 35, 25, 0.55) 100%)",
                    }}
                  />
                  <figcaption
                    style={{
                      position: "absolute",
                      bottom: "24px",
                      left: "24px",
                      right: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      className="eyebrow"
                      style={{
                        color: "rgba(232, 217, 166, 0.9)",
                        fontSize: "10px",
                      }}
                    >
                      Frame 0{i + 2}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontSize: "18px",
                        color: "#FAF8F2",
                        fontStyle: "italic",
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {img.caption}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* Bottom wide image — full span, panoramic */}
          <figure
            className="gallery-item lg:col-span-12"
            style={{
              opacity: 0,
              transform: "translateY(32px) scale(0.98)",
              transition:
                "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
              margin: 0,
              marginTop: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "21/9",
                overflow: "hidden",
                borderRadius: "4px",
                boxShadow: "0 30px 80px rgba(6, 35, 25, 0.18)",
              }}
              onMouseEnter={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector("img");
                if (img) img.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 1.6s var(--ease-refined)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(6, 35, 25, 0.5) 0%, transparent 50%, transparent 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "40px",
                  right: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  maxWidth: "440px",
                }}
              >
                <span
                  className="eyebrow"
                  style={{ color: "rgba(232, 217, 166, 0.95)" }}
                >
                  Frame 04
                </span>
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(20px, 2vw, 28px)",
                    color: "#FAF8F2",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {images[3].caption}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(250, 248, 242, 0.7)",
                  }}
                >
                  {images[3].location}
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
