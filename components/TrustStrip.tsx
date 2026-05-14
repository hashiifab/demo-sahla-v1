"use client";

import { useEffect, useRef } from "react";

interface Value {
  number: string;
  title: string;
  tagline: string;
}

const values: Value[] = [
  {
    number: "01",
    title: "Fleksibel",
    tagline: "Paket disesuaikan dengan jadwal dan anggaran Anda.",
  },
  {
    number: "02",
    title: "Eksklusif",
    tagline: "Pengalaman ibadah yang dirancang khusus, bukan massal.",
  },
  {
    number: "03",
    title: "Aman",
    tagline: "Legalitas Kemenag, dana terjamin, proses transparan.",
  },
  {
    number: "04",
    title: "Profesional",
    tagline: "Tim berpengalaman, pembimbing bersanad, standar tinggi.",
  },
  {
    number: "05",
    title: "Nyaman",
    tagline: "Dari berangkat hingga pulang, semua kami urus.",
  },
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".pillar").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nilai"
      ref={sectionRef}
      style={{
        background: "#F4EFE4",
        paddingBlock: "clamp(96px, 12vw, 140px)",
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
          style={{ gap: "32px" }}
        >
          <div style={{ maxWidth: "560px" }}>
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
                02 — Janji Kami
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(34px, 4.4vw, 56px)",
                fontWeight: 400,
                color: "#141414",
                lineHeight: 1.08,
              }}
            >
              Lima janji yang menjaga
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#0B3D2C",
                  fontWeight: 400,
                }}
              >
                ketenangan
              </em>{" "}
              Anda.
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#44423C",
              maxWidth: "320px",
            }}
          >
            Setiap janji ini bukan slogan pemasaran — ia adalah standar internal
            yang kami ukur pada setiap keberangkatan.
          </p>
        </div>

        {/* Pillars — 5-col editorial grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            borderTop: "1px solid #E0DAC9",
          }}
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className="pillar"
              style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: "opacity 0.9s var(--ease-refined), transform 0.9s var(--ease-refined), background 0.5s var(--ease-refined)",
                padding: "40px 28px 40px 0",
                borderRight: i < values.length - 1 ? "1px solid #E0DAC9" : "none",
                paddingInline: i === 0 ? "0 28px 0 0" : "28px",
                position: "relative",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                const goldLine = card.querySelector(".pillar-line") as HTMLElement;
                if (goldLine) goldLine.style.width = "48px";
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                const goldLine = card.querySelector(".pillar-line") as HTMLElement;
                if (goldLine) goldLine.style.width = "16px";
              }}
            >
              <div
                className="eyebrow"
                style={{
                  color: "#B5933A",
                  marginBottom: "20px",
                }}
              >
                {v.number}
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: "30px",
                  fontWeight: 400,
                  color: "#141414",
                  marginBottom: "12px",
                  lineHeight: 1,
                }}
              >
                {v.title}
              </div>

              <span
                className="pillar-line"
                style={{
                  display: "block",
                  width: "16px",
                  height: "1px",
                  background: "#B5933A",
                  marginBottom: "16px",
                  transition: "width 0.6s var(--ease-refined)",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#44423C",
                }}
              >
                {v.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
