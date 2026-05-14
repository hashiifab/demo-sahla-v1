"use client";

import { useEffect, useRef } from "react";

const misiItems = [
  {
    title: "Pelayanan terbaik, aman, dan nyaman",
    desc: "Pengalaman ibadah yang menenangkan dari hari pertama hingga kembali ke tanah air.",
  },
  {
    title: "Manajemen profesional & transparan",
    desc: "Setiap rupiah jemaah dipertanggungjawabkan. Setiap proses dapat ditelusuri.",
  },
  {
    title: "Kemitraan kuat dengan maskapai & hotel",
    desc: "Hanya bekerja sama dengan partner yang track record-nya terbukti.",
  },
  {
    title: "Pembimbing ibadah berpengalaman",
    desc: "Tim pembimbing dengan sanad keilmuan yang jelas dan jam terbang di tanah suci.",
  },
  {
    title: "Inovasi layanan modern & nilai keislaman",
    desc: "Memadukan teknologi terkini dengan adab dan nilai-nilai Islam yang otentik.",
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 110);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visi-misi"
      ref={sectionRef}
      style={{
        background: "#FAF8F2",
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
        {/* Section header */}
        <div
          className="reveal flex items-baseline mb-20"
          style={{ gap: "24px" }}
        >
          <span
            className="eyebrow"
            style={{ color: "#B5933A" }}
          >
            03 — Arah Tujuan
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

        {/* Two-column editorial spread */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "clamp(48px, 6vw, 80px)" }}
        >
          {/* Vision — left, 5 cols */}
          <div className="lg:col-span-5">
            <div
              className="reveal-left"
              style={{
                background: "#062319",
                color: "#FAF8F2",
                padding: "clamp(40px, 5vw, 64px) clamp(32px, 4vw, 56px)",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
                minHeight: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Decorative quote glyph */}
              <div
                className="font-display"
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "40px",
                  fontSize: "200px",
                  color: "rgba(232, 217, 166, 0.12)",
                  fontStyle: "italic",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  className="eyebrow"
                  style={{ color: "#E8D9A6", marginBottom: "32px", display: "inline-block" }}
                >
                  Visi
                </span>

                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(26px, 3.4vw, 38px)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: "#FAF8F2",
                    fontStyle: "italic",
                  }}
                >
                  Menjadi penyelenggara perjalanan umroh dan haji yang{" "}
                  <span style={{ color: "#E8D9A6" }}>amanah</span>,
                  <span style={{ color: "#E8D9A6" }}> profesional</span>, dan
                  <span style={{ color: "#E8D9A6" }}> terpercaya</span>.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(250, 248, 242, 0.18)",
                  marginTop: "40px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "#E8D9A6",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    color: "rgba(250, 248, 242, 0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Sahla Madinah, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Mission — right, 7 cols */}
          <div className="lg:col-span-7 flex flex-col">
            <h2
              className="reveal font-display"
              style={{
                fontSize: "clamp(34px, 4.4vw, 56px)",
                fontWeight: 400,
                color: "#141414",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Lima misi
              <br />
              yang memandu langkah.
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#8A8780",
                marginBottom: "56px",
                maxWidth: "52ch",
              }}
            >
              Misi-misi ini diturunkan menjadi standar operasional konkret —
              dari pemilihan hotel hingga ritme briefing pembimbing.
            </p>

            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {misiItems.map((item, i) => (
                <li
                  key={item.title}
                  className="reveal misi-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "32px",
                    paddingBlock: "28px",
                    borderTop: "1px solid #E0DAC9",
                    borderBottom: i === misiItems.length - 1 ? "1px solid #E0DAC9" : "none",
                    cursor: "default",
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#B5933A",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      minWidth: "32px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#141414",
                        marginBottom: "6px",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: "#8A8780",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
