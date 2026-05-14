"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#062319",
        overflow: "hidden",
        color: "#FAF8F2",
      }}
    >
      {/* — Preloader — */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "#FDFCF8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.8s ease-in-out",
          opacity: isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
      >
        <div style={{ animation: "pulse 1.5s infinite ease-in-out" }}>
          <Image
            src="/logo.png" // Pastikan path logo ini benar
            alt="Sahla Madinah Logo"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>

      {/* — Cinematic backdrop — */}
      <div
        className="ken-burns"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Cinematic overlay — readable yet luxurious */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(4, 23, 16, 0.55) 0%, rgba(4, 23, 16, 0.25) 35%, rgba(4, 23, 16, 0.75) 100%)",
        }}
      />

      {/* Subtle gold vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(181, 147, 58, 0.18) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-col justify-end"
        style={{
          maxWidth: "1360px",
          paddingInline: "clamp(20px, 4vw, 40px)",
          paddingTop: "180px",
          paddingBottom: "96px",
          minHeight: "100vh",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-fade hero-fade-delay-1 inline-flex items-center"
          style={{ gap: "16px", marginBottom: "32px" }}
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
            style={{
              color: "#E8D9A6",
            }}
          >
            Perjalanan Ibadah Pilihan
          </span>
        </div>

        {/* Display headline */}
        <h1
          className="hero-fade hero-fade-delay-2 font-display"
          style={{
            fontSize: "clamp(44px, 7.2vw, 104px)",
            fontWeight: 400,
            lineHeight: 0.98,
            color: "#FAF8F2",
            maxWidth: "16ch",
            marginBottom: "40px",
          }}
        >
          Berangkat dengan tenang.
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "#E8D9A6",
              fontWeight: 400,
            }}
          >
            Pulang
          </em>{" "}
          dengan cerita.
        </h1>

        {/* Two-col bottom: body + CTA cluster + metric strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between" style={{ gap: "48px" }}>
          <div
            className="hero-fade hero-fade-delay-3"
            style={{
              maxWidth: "520px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(250, 248, 242, 0.82)",
                marginBottom: "40px",
                fontWeight: 400,
              }}
            >
              Sahla Madinah merancang setiap perjalanan umroh dan haji seperti
              kurator merancang pameran — dengan ketelitian, ketenangan, dan
              hormat pada keagungan ibadah Anda.
            </p>

            <div className="flex items-center" style={{ gap: "24px", flexWrap: "wrap" }}>
              <a
                href="#produk"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "#FAF8F2",
                  color: "#062319",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "20px 32px",
                  textDecoration: "none",
                  transition:
                    "background 0.5s var(--ease-refined), transform 0.5s var(--ease-refined)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#E8D9A6";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#FAF8F2";
                  el.style.transform = "none";
                }}
              >
                Jelajahi Paket
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#tentang"
                className="link-underline"
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(250, 248, 242, 0.9)",
                  textDecoration: "none",
                }}
              >
                Kenali Filosofi Kami
              </a>
            </div>
          </div>

          {/* Editorial metric strip */}
          <div
            className="hero-fade hero-fade-delay-4 flex"
            style={{
              gap: "0",
              borderTop: "1px solid rgba(250, 248, 242, 0.18)",
              paddingTop: "32px",
              minWidth: "320px",
            }}
          >
            {[
              { num: "500+", label: "Jemaah dilayani" },
              { num: "12", label: "Mitra maskapai" },
              { num: "2025", label: "Sejak berdiri" },
            ].map((m, i) => (
              <div
                key={m.label}
                style={{
                  flex: 1,
                  paddingInline: i === 0 ? "0 24px" : "24px",
                  borderLeft:
                    i > 0 ? "1px solid rgba(250, 248, 242, 0.18)" : "none",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 38px)",
                    fontWeight: 400,
                    color: "#E8D9A6",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {m.num}
                </div>
                <div
                  className="eyebrow"
                  style={{
                    color: "rgba(250, 248, 242, 0.6)",
                    letterSpacing: "0.16em",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="hero-fade hero-fade-delay-5 hidden md:flex absolute items-center"
          style={{
            bottom: "32px",
            left: "clamp(20px, 4vw, 40px)",
            gap: "12px",
          }}
        >
          <span
            className="eyebrow"
            style={{ color: "rgba(250, 248, 242, 0.55)" }}
          >
            Mulai cerita
          </span>
          <span
            style={{
              width: "1px",
              height: "32px",
              background:
                "linear-gradient(to bottom, rgba(250,248,242,0.6), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}