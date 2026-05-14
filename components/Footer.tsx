"use client";

import Logo from "./Logo";

const navColumns = [
  {
    heading: "Navigasi",
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Filosofi", href: "#tentang" },
      { label: "Paket Umroh", href: "#produk" },
      { label: "Galeri Perjalanan", href: "#galeri" },
    ],
  },
  {
    heading: "Legalitas",
    links: [
      { label: "Izin PPIU Kemenag", href: "#" },
      { label: "Sertifikasi IATA", href: "#" },
      { label: "Keanggotaan ASITA", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", abbr: "IG", href: "#" },
  { label: "TikTok", abbr: "TT", href: "#" },
  { label: "YouTube", abbr: "YT", href: "#" },
  { label: "WhatsApp", abbr: "WA", href: "https://wa.me/628131181820" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col font-sans">
      {/* 
        ========================================================
        UPPER SECTION: PRE-FOOTER (Bento Grid Photo Collage)
        Grid Editorial dengan foto melintasi beberapa kotak
        ========================================================
      */}
      <section 
        className="w-full flex flex-col lg:flex-row border-b border-[rgba(12,38,24,0.1)]"
        style={{ background: "#F0F5F2" }}
      >
        {/* === KIRI: GRID BENTO (3 Kolom x 4 Baris) === */}
        <div className="hidden lg:grid w-1/4 grid-cols-3 grid-rows-4 gap-[1px] bg-[rgba(12,38,24,0.1)] border-r border-[rgba(12,38,24,0.1)]">
          
          {/* Baris 1 */}
          <div 
            className="col-span-1 bg-[#F0F5F2]"
            style={{ backgroundImage: 'radial-gradient(circle, #163323 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.15 }}
          />
          <div className="col-span-1 bg-[#C9A85C]" />
          <div 
            className="col-span-1 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400&auto=format&fit=crop")' }} 
          />

          {/* Baris 2 & 3: GAMBAR BESAR SPANNING (3 Kolom, 2 Baris) */}
          <div 
            className="col-span-3 row-span-2 relative bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop")' }}
          >
            {/* GRID LINES OVERLAY: Garis pemisah di atas foto besar */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 pointer-events-none">
              <div className="border-r border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div></div>
            </div>
          </div>

          {/* Baris 4 */}
          <div className="col-span-1 bg-[#3A5C4A]" />
          <div 
            className="col-span-1 bg-[#F0F5F2]"
            style={{ backgroundImage: 'radial-gradient(circle, #163323 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.15 }}
          />
          <div 
            className="col-span-1 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400&auto=format&fit=crop")' }} 
          />
        </div>

        {/* === TENGAH: PESAN BRAND === */}
        <div className="w-full lg:w-2/4 flex flex-col items-center justify-center p-12 lg:p-20 text-center bg-[#F0F5F2] min-h-[400px]">
          {/* Logo variant default aman di background pastel */}
          <div className="mb-10">
            <Logo size="lg" variant="default" />
          </div>

          <h2 
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "#163323",
              marginBottom: "40px",
              fontWeight: 400,
              maxWidth: "480px"
            }}
          >
            Berangkat dengan <span style={{ color: "#C9A85C" }}>tenang</span>
            <br />
            Pulang dengan <span style={{ color: "#C9A85C" }}>cerita</span>.
          </h2>

          {/* CTA Button */}
          <a
            href="#produk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#C9A85C",
              color: "#FDFCF8",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "16px 36px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "transform 0.3s ease, background 0.3s ease",
              boxShadow: "0 8px 24px rgba(201, 168, 92, 0.25)"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#E8D9A6";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C9A85C";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Mulai Perjalanan
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* === KANAN: GRID BENTO (3 Kolom x 4 Baris) === */}
        <div className="hidden lg:grid w-1/4 grid-cols-3 grid-rows-4 gap-[1px] bg-[rgba(12,38,24,0.1)] border-l border-[rgba(12,38,24,0.1)]">
          
          {/* Baris 1 */}
        
        <div 
            className="col-span-1 bg-[#F0F5F2]"
            style={{ backgroundImage: 'radial-gradient(circle, #163323 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.15 }}
          />
          <div className="col-span-1 bg-[#0C2618]" />
          <div className="col-span-1 bg-[#C9A85C]" />

          {/* Baris 2 & 3: GAMBAR BESAR SPANNING */}
          <div 
            className="col-span-3 row-span-2 relative bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop")' }}
          >
            {/* GRID LINES OVERLAY */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 pointer-events-none">
              <div className="border-r border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-b border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div></div>
            </div>
          </div>

          {/* Baris 4: GAMBAR MELEBAR (3 Kolom, 1 Baris) */}
          <div 
            className="col-span-3 row-span-1 relative bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400&auto=format&fit=crop")' }}
          >
            {/* GRID LINES OVERLAY */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-1 pointer-events-none">
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div className="border-r border-[rgba(253,252,248,0.4)]"></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        LOWER SECTION: DARK FOOTER MAIN GRID
        Warna & Font persis dengan pedoman
        ========================================================
      */}
      <section 
        className="w-full pt-20 pb-10 relative"
        style={{ background: "#0C2618", color: "#FDFCF8" }}
      >
        <div 
          className="mx-auto"
          style={{
            maxWidth: "1360px",
            paddingInline: "clamp(20px, 4vw, 40px)",
          }}
        >
          {/* Baris Utama Navigasi & Doa */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-[rgba(253,252,248,0.1)] pb-16"
            style={{ gap: "clamp(40px, 4vw, 64px)" }}
          >
            {/* Kiri: Kolom Doa Keberangkatan */}
            <div className="lg:col-span-5">
              <span
                className="eyebrow"
                style={{
                  color: "#C9A85C",
                  marginBottom: "24px",
                  display: "inline-block",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "var(--font-inter), Inter, sans-serif"
                }}
              >
                Doa Keberangkatan
              </span>
              <p
                dir="rtl"
                lang="ar"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  lineHeight: 1.8,
                  color: "#FDFCF8",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
              >
                اللّٰهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.6,
                  color: "rgba(253, 252, 248, 0.7)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  maxWidth: "520px",
                }}
              >
                &ldquo;Ya Allah, kami memohon kepada-Mu dalam perjalanan ini kebaikan dan ketakwaan.&rdquo;
              </p>
            </div>

            {/* Kanan: Navigasi dan Kontak */}
            <div className="lg:col-span-7 flex flex-wrap gap-12 md:gap-20 lg:justify-end">
              {navColumns.map((col) => (
                <div key={col.heading}>
                  <h4
                    className="eyebrow"
                    style={{
                      color: "#C9A85C",
                      marginBottom: "20px",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontFamily: "var(--font-inter), Inter, sans-serif"
                    }}
                  >
                    {col.heading}
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "14px",
                            color: "rgba(253, 252, 248, 0.7)",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#C9A85C";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253, 252, 248, 0.7)";
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Kolom Kontak Spesifik */}
              <div>
                <h4
                  className="eyebrow"
                  style={{
                    color: "#C9A85C",
                    marginBottom: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-inter), Inter, sans-serif"
                  }}
                >
                  Hubungi Kami
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <a
                      href="https://wa.me/628131181820"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display"
                      style={{
                        fontSize: "22px",
                        color: "#C9A85C",
                        textDecoration: "none",
                        fontWeight: 400,
                        fontStyle: "italic",
                        display: "block",
                        marginBottom: "4px",
                        transition: "color 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#FDFCF8";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#C9A85C";
                      }}
                    >
                      +62 813-118-1820
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:hello@sahlamadinah.com"
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "14px",
                        color: "rgba(253, 252, 248, 0.7)",
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#C9A85C";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253, 252, 248, 0.7)";
                      }}
                    >
                      hello@sahlamadinah.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Baris Paling Bawah (Copyright, Kebijakan, Socials) */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
            <div 
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "13px",
                color: "rgba(253, 252, 248, 0.4)",
              }}
            >
              <div className="flex items-center gap-4">
                <a href="#" style={{ color: "rgba(253, 252, 248, 0.6)", textDecoration: "none" }} className="hover:text-[#C9A85C] transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" style={{ color: "rgba(253, 252, 248, 0.6)", textDecoration: "none" }} className="hover:text-[#C9A85C] transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
              <span>© {year} PT. Sahla Madinah Berkah</span>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(253, 252, 248, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A85C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253, 252, 248, 0.6)";
                  }}
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </footer>
  );
}