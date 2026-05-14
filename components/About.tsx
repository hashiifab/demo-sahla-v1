"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 140);
              });
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      style={{
        background: "#FAF8F2",
        paddingBlock: "clamp(96px, 14vw, 180px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1360px",
          paddingInline: "clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Section header — full width, editorial */}
        <div
          className="reveal flex items-baseline"
          style={{ gap: "24px", marginBottom: "72px" }}
        >
          <span
            className="eyebrow font-display"
            style={{
              color: "#B5933A",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            01 — Filosofi
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#E0DAC9",
              transform: "translateY(-6px)",
            }}
          />
        </div>

        {/* Editorial grid: image 5/12 + content 6/12 + offset */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "clamp(48px, 7vw, 96px)" }}>
          {/* Image column */}
          <div
            className="reveal-left"
            style={{
              flex: "0 0 auto",
              width: "100%",
              maxWidth: "440px",
              alignSelf: "flex-start",
              position: "relative",
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
                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=85"
                alt="Detail interior Masjid Nabawi"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Caption beneath image */}
            <div
              className="reveal"
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "1px",
                  background: "#B5933A",
                  marginTop: "10px",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "12px",
                  lineHeight: 1.7,
                  color: "#8A8780",
                  letterSpacing: "0.02em",
                  fontStyle: "italic",
                }}
              >
                <em>&ldquo;Sahla&rdquo;</em> berarti kemudahan — janji yang kami penuhi
                dalam setiap detail perjalanan.
              </p>
            </div>
          </div>

          {/* Content column */}
          <div
            className="flex-1 flex flex-col"
            style={{ maxWidth: "640px", paddingTop: "clamp(0px, 4vw, 48px)" }}
          >
            <h2
              className="reveal font-display"
              style={{
                fontSize: "clamp(36px, 4.8vw, 64px)",
                fontWeight: 400,
                color: "#141414",
                lineHeight: 1.05,
                marginBottom: "32px",
              }}
            >
              Kami bukan agensi umrah.
              <br />
              Kami{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#0B3D2C",
                  fontWeight: 400,
                }}
              >
                kurator
              </em>{" "}
              perjalanan ibadah.
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#44423C",
                marginBottom: "24px",
                maxWidth: "56ch",
              }}
            >
              PT. Sahla Madinah Berkah berdiri pada tahun 2025 dengan keyakinan
              sederhana: jemaah Indonesia berhak diperlakukan seperti tamu
              terhormat — bukan nomor antrian. Kami mulai dari mendukung
              pengadaan tiket pesawat umroh dan haji, lalu berkembang menjadi
              penyelenggara perjalanan ibadah yang utuh.
            </p>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#44423C",
                marginBottom: "48px",
                maxWidth: "56ch",
              }}
            >
              Setiap pilihan hotel, jadwal penerbangan, dan jam bimbingan kami
              tentukan dengan pertanyaan yang sama: <em>apakah ini sudah cukup
              tenang, cukup mudah, dan cukup amanah untuk seseorang yang
              menyerahkan tabungan seumur hidupnya kepada kami?</em>
            </p>

            {/* Pillars — inline editorial list */}
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "24px",
                paddingTop: "32px",
                borderTop: "1px solid #E0DAC9",
                marginBottom: "48px",
              }}
            >
              {[
                { kw: "Khusyu'", desc: "Whitespace yang melimpah" },
                { kw: "Amanah", desc: "Transparansi radikal" },
                { kw: "Sahla", desc: "Mudah dalam ≤3 klik" },
              ].map((p) => (
                <div key={p.kw}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "#0B3D2C",
                      marginBottom: "6px",
                      fontStyle: "italic",
                    }}
                  >
                    {p.kw}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "13px",
                      color: "#8A8780",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>

            <a
              className="reveal link-underline"
              href="#custome"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
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
              Susun Umroh Impian Anda
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
