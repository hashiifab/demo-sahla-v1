"use client";

import { useEffect, useRef } from "react";

interface OrgMember {
  image: string;
  name: string;
  role: string;
  bio: string;
  accentColor: string;
}

const members: OrgMember[] = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Setiyo Wibowo",
    role: "Direktur",
    bio: "Memimpin visi & strategi Sahla Madinah dengan latar belakang puluhan tahun di industri travel ibadah.",
    accentColor: "#0B3D2C",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dyssa Gressinanthya R.",
    role: "Komisaris Utama",
    bio: "Mengawasi governance perusahaan dengan prinsip transparansi sebagai standar tertinggi.",
    accentColor: "#062319",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samsudin",
    role: "Komisaris",
    bio: "Memimpin audit dan compliance, memastikan setiap proses sesuai regulasi Kemenag.",
    accentColor: "#041710",
  },
];

export default function Organization() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="organisasi"
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
        {/* Header */}
        <div
          className="reveal flex flex-col lg:flex-row lg:items-end justify-between mb-20"
          style={{ gap: "48px" }}
        >
          <div style={{ maxWidth: "560px" }}>
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
                05 — Orang di Balik Sahla
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
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#44423C",
              maxWidth: "340px",
            }}
          >
            Sahla Madinah dibangun oleh orang-orang yang mempercayai bahwa
            perjalanan ibadah adalah amanah, bukan transaksi.
          </p>
        </div>

        {/* Portrait grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "clamp(32px, 4vw, 56px)" }}
        >
          {members.map((m, i) => (
            <article
              key={m.name}
              className="portrait-card"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "opacity 0.9s var(--ease-refined), transform 0.9s var(--ease-refined)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Portrait frame — now with actual images */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  background: m.accentColor,
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "28px",
                }}
              >
                <img
                  src={m.image}
                  alt={`Potret ${m.name}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 1.2s var(--ease-refined)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Caption block */}
              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "24px",
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
                    marginBottom: "16px",
                  }}
                >
                  {m.role}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#8A8780",
                  }}
                >
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial note bar */}
        <div
          className="reveal"
          style={{
            marginTop: "96px",
            paddingTop: "32px",
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
              fontSize: "clamp(22px, 2.4vw, 28px)",
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
          <span
            className="eyebrow"
            style={{ color: "#8A8780" }}
          >
            — Setiyo Wibowo, Direktur
          </span>
        </div>
      </div>
    </section>
  );
}