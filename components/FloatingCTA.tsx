"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Show tooltip once after 8s on first load
  useEffect(() => {
    if (tooltipDismissed) return;
    const t = setTimeout(() => setShowTooltip(true), 8000);
    return () => clearTimeout(t);
  }, [tooltipDismissed]);

  // Auto-dismiss tooltip after 6s
  useEffect(() => {
    if (!showTooltip) return;
    const t = setTimeout(() => {
      setShowTooltip(false);
      setTooltipDismissed(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [showTooltip]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? "translateY(0)" : "translateY(8px)",
          pointerEvents: showTooltip ? "auto" : "none",
          transition:
            "opacity 0.6s var(--ease-refined), transform 0.6s var(--ease-refined)",
          background: "#FAF8F2",
          color: "#141414",
          padding: "14px 20px",
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(6, 35, 25, 0.18)",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          maxWidth: "260px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "relative",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#25D366",
            flexShrink: 0,
            boxShadow: "0 0 0 4px rgba(37, 211, 102, 0.18)",
          }}
        />
        <span>
          Tanya kami via WhatsApp
          <br />
          <span style={{ color: "#8A8780", fontSize: "12px" }}>
            Respon &lt; 15 menit
          </span>
        </span>
        <button
          aria-label="Tutup notifikasi"
          onClick={() => {
            setShowTooltip(false);
            setTooltipDismissed(true);
          }}
          style={{
            position: "absolute",
            top: "6px",
            right: "8px",
            width: "16px",
            height: "16px",
            background: "transparent",
            border: "none",
            color: "#8A8780",
            cursor: "pointer",
            fontSize: "14px",
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>

        {/* Pointer */}
        <span
          style={{
            position: "absolute",
            bottom: "-6px",
            right: "24px",
            width: "12px",
            height: "12px",
            background: "#FAF8F2",
            transform: "rotate(45deg)",
            boxShadow: "4px 4px 8px rgba(6, 35, 25, 0.08)",
          }}
        />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/628131181820?text=Assalamualaikum%20Sahla%20Madinah%2C%20saya%20ingin%20bertanya%20mengenai%20paket%20umroh."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fab-wa"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#0B3D2C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 40px rgba(6, 35, 25, 0.35), 0 0 0 1px rgba(232, 217, 166, 0.22)",
          textDecoration: "none",
          position: "relative",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M13 2.5A10.5 10.5 0 0 0 3.85 18.05L2.5 23.5l5.6-1.45A10.5 10.5 0 1 0 13 2.5z"
            fill="#E8D9A6"
          />
          <path
            d="M17.6 15c-.27-.13-1.6-.79-1.84-.88-.25-.09-.43-.13-.6.14-.18.27-.7.87-.85 1.05-.16.18-.31.2-.59.07-.27-.14-1.15-.43-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.47-.83-2.01-.22-.53-.45-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.14.18 1.87 2.87 4.54 4.02.63.27 1.13.44 1.51.56.64.2 1.21.17 1.66-.1.51-.31.93-.87 1.06-1.36l.13-.68c0-.16-.07-.25-.25-.34z"
            fill="#0B3D2C"
          />
        </svg>

        {/* Soft pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(232, 217, 166, 0.4)",
            animation: "soft-pulse 3.5s var(--ease-refined) infinite",
          }}
        />

        <style>{`
          @keyframes soft-pulse {
            0% { transform: scale(1); opacity: 0.7; }
            70% { transform: scale(1.4); opacity: 0; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `}</style>
      </a>
    </div>
  );
}
