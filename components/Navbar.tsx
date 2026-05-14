"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Paket", href: "#produk" },
  { label: "Filosofi", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Locked variant: transparent over hero, solid cream after scroll
  const isSolid = scrolled || menuOpen;
  const inkColor = isSolid ? "#141414" : "#FAF8F2";
  const mutedInk = isSolid ? "rgba(20,20,20,0.7)" : "rgba(250,248,242,0.85)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isSolid ? "rgba(250, 248, 242, 0.92)" : "transparent",
        backdropFilter: isSolid ? "saturate(180%) blur(14px)" : "none",
        WebkitBackdropFilter: isSolid ? "saturate(180%) blur(14px)" : "none",
        borderBottom: isSolid ? "1px solid rgba(224, 218, 201, 0.5)" : "1px solid transparent",
        transition:
          "background 0.6s var(--ease-refined), border-color 0.6s var(--ease-refined), backdrop-filter 0.6s var(--ease-refined)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "1360px",
          paddingInline: "clamp(20px, 4vw, 40px)",
          height: "84px",
        }}
      >
        {/* Logo */}
        <a href="#home" aria-label="Sahla Madinah — Beranda">
          <Logo size="md" variant="default" priority />
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center"
          style={{ gap: "44px" }}
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: mutedInk,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.4s var(--ease-refined)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = inkColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = mutedInk;
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right cluster: WA CTA + Mobile menu trigger */}
        <div className="flex items-center" style={{ gap: "16px" }}>
          <a
            href="https://wa.me/628131181820?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20mengenai%20paket%20umroh%20Sahla%20Madinah."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center"
            style={{
              gap: "10px",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: inkColor,
              border: `1px solid ${isSolid ? "rgba(20,20,20,0.18)" : "rgba(250,248,242,0.45)"}`,
              padding: "12px 22px",
              textDecoration: "none",
              transition:
                "background 0.4s var(--ease-refined), color 0.4s var(--ease-refined), border-color 0.4s var(--ease-refined)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#0B3D2C";
              el.style.color = "#FAF8F2";
              el.style.borderColor = "#0B3D2C";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = inkColor;
              el.style.borderColor = isSolid
                ? "rgba(20,20,20,0.18)"
                : "rgba(250,248,242,0.45)";
            }}
          >
            Konsultasi
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#B5933A",
                display: "inline-block",
              }}
            />
          </a>

          {/* Mobile trigger */}
          <button
            className="lg:hidden inline-flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              width: "44px",
              height: "44px",
              gap: "5px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: inkColor,
                transition: "transform 0.4s var(--ease-refined)",
                transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: inkColor,
                transition: "transform 0.4s var(--ease-refined)",
                transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "520px" : "0",
          transition: "max-height 0.6s var(--ease-refined)",
          background: "#FAF8F2",
          borderTop: menuOpen ? "1px solid rgba(224, 218, 201, 0.7)" : "none",
        }}
      >
        <nav
          className="flex flex-col"
          aria-label="Mobile navigation"
          style={{
            padding: "12px 24px 32px",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "#141414",
                letterSpacing: "-0.01em",
                paddingBlock: "16px",
                borderBottom:
                  i < navLinks.length - 1 ? "1px solid #EDE7D6" : "none",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {link.label}
              <span style={{ color: "#B5933A", fontSize: "18px" }}>↗</span>
            </a>
          ))}
          <a
            href="https://wa.me/628131181820"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "24px",
              background: "#0B3D2C",
              color: "#FAF8F2",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              padding: "20px",
              textDecoration: "none",
            }}
          >
            Mulai Konsultasi Gratis
          </a>
        </nav>
      </div>
    </header>
  );
}
