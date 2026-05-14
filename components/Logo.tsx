import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "default", size = "md" }: LogoProps) {
  const isWhite = variant === "white";

  const sizes = {
    sm: { w: 96, h: 80 },
    md: { w: 120, h: 100 },
    lg: { w: 160, h: 132 },
  };

  const { w, h } = sizes[size];

  return (
    <div
      className="select-none"
      style={{
        position: "relative",
        width: w,
        height: h,
        lineHeight: 0,
      }}
    >
      <Image
        src="/logo.png"
        alt="Sahla Madinah"
        fill
        priority
        sizes={`${w}px`}
        style={{
          objectFit: "contain",
          objectPosition: "left center",
          filter: isWhite ? "brightness(0) invert(1)" : "none",
          transition: "filter 0.6s var(--ease-refined)",
        }}
      />
    </div>
  );
}
