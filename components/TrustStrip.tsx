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
  const stickySectionRef = useRef<HTMLElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);

  // Effect for pinned horizontal scrolling
  useEffect(() => {
    const stickyEl = stickySectionRef.current;
    const horizontalEl = horizontalScrollRef.current;
    const stickyContentEl = stickyContentRef.current;
    if (!stickyEl || !horizontalEl || !stickyContentEl) return;

    let rafId = 0;
    let cachedPinDuration = 0;

    const recalc = () => {
      cachedPinDuration = horizontalEl.scrollWidth - horizontalEl.clientWidth;
      stickyEl.style.height = `${cachedPinDuration + stickyContentEl.offsetHeight}px`;
    };

    // Let About image above settle before first measure
    const initTimer = setTimeout(recalc, 200);

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(recalc);
    });
    resizeObserver.observe(horizontalEl);
    resizeObserver.observe(stickyContentEl);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        // Read offsetTop live — always accurate even after images shift layout
        const stickyTop = stickyEl.offsetTop;
        const pinDuration = cachedPinDuration;
        const buffer = 2;

        if (scrollTop > stickyTop + buffer && scrollTop < stickyTop + pinDuration - buffer) {
          if (pinDuration > 0) {
            const scrollProgress = (scrollTop - stickyTop) / pinDuration;
            horizontalEl.scrollLeft = scrollProgress * pinDuration;
          }
        } else if (scrollTop <= stickyTop + buffer) {
          horizontalEl.scrollLeft = 0;
        } else if (scrollTop >= stickyTop + pinDuration - buffer) {
          horizontalEl.scrollLeft = pinDuration;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  // Effect for reveal animations
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
      { threshold: 0.5 }
    );

    if (horizontalScrollRef.current) {
      observer.observe(horizontalScrollRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={stickySectionRef} style={{ position: "relative" }}>
      <div
        ref={stickyContentRef}
        style={{
          position: "sticky",
          top: "0px", // Pin to the top of the viewport
          overflow: "hidden",
        }}
      >
        <div
          id="nilai"
          style={{
            background: "#F4EFE4",
            paddingBlock: "clamp(96px, 12vw, 140px)",
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

            {/* Pillars — Horizontally scrolling container */}
            <div
              ref={horizontalScrollRef}
              className="no-scrollbar"
              style={{
                overflowX: "hidden", // We control scroll via JS
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  minWidth: "1100px", // Force container to be wide
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
                      padding: "40px 28px",
                      borderRight: i < values.length - 1 ? "1px solid #E0DAC9" : "none",
                      position: "relative",
                      cursor: "default",
                    }}
                  >
                    {/* ... pillar content ... */}
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
          </div>
        </div>
      </div>
    </section>
  );
}