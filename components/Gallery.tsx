"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?w=1200&q=72&auto=format&fit=crop",
    alt: "Pelataran Masjidil Haram",
    caption: "Tawaf sebelum subuh",
    location: "Masjidil Haram, Makkah",
  },
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?w=1200&q=72&auto=format&fit=crop",
    alt: "Jemaah berdoa di hadapan Ka'bah",
    caption: "Doa di hadapan Baitullah",
    location: "Mataf, Makkah",
  },
  {
    src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=900&q=72&auto=format&fit=crop",
    alt: "Interior Masjid Nabawi",
    caption: "Cahaya pagi Raudhah",
    location: "Masjid Nabawi, Madinah",
  },
  {
    src: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?w=1200&q=72&auto=format&fit=crop",
    alt: "Kaligrafi pada dinding masjid",
    caption: "Detail kaligrafi mihrab",
    location: "Madinah",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

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
        paddingBlock: isMobile ? "64px" : "clamp(96px, 14vw, 180px)",
        overflow: "hidden",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1360px",
          // Di mobile kita matikan padding kanan di parent agar foto bisa di-swipe sampai ujung layar
          paddingLeft: "clamp(20px, 4vw, 40px)",
          paddingRight: isMobile ? "0" : "clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20"
          style={{ 
            gap: "32px",
            paddingRight: isMobile ? "20px" : "0", // Kembalikan padding khusus untuk text di mobile
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div className="flex items-center mb-4 lg:mb-6" style={{ gap: "16px" }}>
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
                fontSize: "clamp(36px, 5.6vw, 72px)",
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
              fontSize: isMobile ? "15px" : "16px",
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

        {/* Gallery Container - Grid Asimetris (Desktop) vs Swipeable Row (Mobile) */}
        <div
          className="no-scrollbar"
          style={{
            display: isMobile ? "flex" : "grid",
            gridTemplateColumns: isMobile ? "none" : "repeat(12, minmax(0, 1fr))",
            gap: isMobile ? "16px" : "24px",
            overflowX: isMobile ? "auto" : "visible",
            scrollSnapType: isMobile ? "x mandatory" : "none", // Memastikan berhenti tepat di foto
            paddingRight: isMobile ? "20px" : "0", // Space ekstra di ujung swipe
          }}
        >
          {/* Gambar 1 - Besar di Desktop, Seragam di Mobile */}
          <figure
            className="gallery-item lg:col-span-7"
            style={{
              opacity: 0,
              transform: "translateY(32px) scale(0.98)",
              transition: "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
              margin: 0,
              minWidth: isMobile ? "85vw" : "auto", // Mengisi 85% layar HP
              scrollSnapAlign: isMobile ? "center" : "none",
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
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 1024px) 85vw, 60vw"
                style={{ objectFit: "cover", transition: "transform 1.6s var(--ease-refined)" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(6, 35, 25, 0.6) 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: isMobile ? "24px" : "32px",
                  left: isMobile ? "24px" : "32px",
                  right: isMobile ? "24px" : "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span className="eyebrow" style={{ color: "rgba(232, 217, 166, 0.95)" }}>Frame 01</span>
                <span className="font-display" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "#FAF8F2", fontStyle: "italic", fontWeight: 400, lineHeight: 1.2 }}>{images[0].caption}</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250, 248, 242, 0.7)" }}>{images[0].location}</span>
              </figcaption>
            </div>
          </figure>

          {/* Kolom Kanan di Desktop (Berisi Gambar 2 & 3), Tetap sejajar di Mobile */}
          <div
            className="lg:col-span-5"
            style={{
              display: isMobile ? "flex" : "grid", // Tetap flex di mobile, ganti ke grid di desktop
              flexDirection: isMobile ? "row" : "column", // Diabaikan di desktop (grid), berlaku di mobile (flex)
              gap: isMobile ? "16px" : "24px",
              gridTemplateRows: isMobile ? "none" : "repeat(2, 1fr)", // Buat 2 baris dengan tinggi sama
            }}
          >
            {[images[1], images[2]].map((img, i) => (
              <figure
                key={img.src}
                className="gallery-item"
                style={{
                  opacity: 0,
                  transform: "translateY(32px) scale(0.98)",
                  transition: "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
                  margin: 0,
                  minWidth: isMobile ? "85vw" : "auto", // Ukuran seragam di mobile
                  flex: 1,
                  scrollSnapAlign: isMobile ? "center" : "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    // On desktop, height is 100% to fill the grid cell. On mobile, use aspect ratio.
                    height: isMobile ? "auto" : "100%",
                    aspectRatio: isMobile ? "4/5" : "auto",
                    overflow: "hidden",
                    borderRadius: "4px",
                    boxShadow: "0 20px 50px rgba(6, 35, 25, 0.12)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 85vw, 40vw"
                    style={{ objectFit: "cover", transition: "transform 1.6s var(--ease-refined)" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(6, 35, 25, 0.55) 100%)",
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
                    <span className="eyebrow" style={{ color: "rgba(232, 217, 166, 0.9)", fontSize: "10px" }}>Frame 0{i + 2}</span>
                    <span className="font-display" style={{ fontSize: "18px", color: "#FAF8F2", fontStyle: "italic", fontWeight: 400, lineHeight: 1.2 }}>{img.caption}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* Gambar 4 - Panorama di Desktop, Diubah ukurannya agar tidak terlalu pipih di Mobile */}
          <figure
            className="gallery-item lg:col-span-12"
            style={{
              opacity: 0,
              transform: "translateY(32px) scale(0.98)",
              transition: "opacity 1.1s var(--ease-refined), transform 1.1s var(--ease-refined)",
              margin: 0,
              marginTop: isMobile ? "0" : "8px",
              minWidth: isMobile ? "85vw" : "auto", // Seragam di mobile
              scrollSnapAlign: isMobile ? "center" : "none",
            }}
          >
            <div
              style={{
                position: "relative",
                // Di Desktop 21/9 memanjang. Di Mobile diubah jadi 4/5 agar ukurannya seragam dengan foto sebelahnya saat di swipe
                aspectRatio: isMobile ? "4/5" : "21/9",
                overflow: "hidden",
                borderRadius: "4px",
                boxShadow: "0 30px 80px rgba(6, 35, 25, 0.18)",
              }}
            >
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="(max-width: 1024px) 85vw, 100vw"
                style={{ objectFit: "cover", transition: "transform 1.6s var(--ease-refined)" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isMobile 
                    ? "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(6, 35, 25, 0.7) 100%)"
                    : "linear-gradient(90deg, rgba(6, 35, 25, 0.5) 0%, transparent 50%, transparent 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: isMobile ? "24px" : "40px",
                  left: isMobile ? "24px" : "40px",
                  right: isMobile ? "24px" : "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  maxWidth: "440px",
                }}
              >
                <span className="eyebrow" style={{ color: "rgba(232, 217, 166, 0.95)" }}>Frame 04</span>
                <span className="font-display" style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "#FAF8F2", fontStyle: "italic", fontWeight: 400, lineHeight: 1.2 }}>{images[3].caption}</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250, 248, 242, 0.7)" }}>{images[3].location}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}