import Image from "next/image";
import Logo from "./Logo";
import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "./SocialIcons";

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
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
  { label: "WhatsApp", href: "https://wa.me/628131181820", Icon: WhatsAppIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col font-sans">
      {/* 
        ========================================================
        UPPER SECTION: PRE-FOOTER (Bento Grid Photo Collage)
        ========================================================
      */}
      <section 
        className="w-full flex flex-col lg:flex-row border-b border-[rgba(12,38,24,0.1)]"
        style={{ background: "#F0F5F2" }}
      >
        {/* === KHUSUS MOBILE: MICRO BENTO STRIP === */}
        {/* Ditampilkan hanya di layar kecil, memberikan sentuhan visual tanpa membuat penuh */}
        <div className="flex lg:hidden w-full h-[140px] sm:h-[180px] border-b border-[rgba(12,38,24,0.1)]">
          <div className="relative w-1/3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="33vw"
              className="grayscale object-cover"
            />
          </div>
          <div className="w-8 bg-[#C9A85C] border-l border-r border-[rgba(12,38,24,0.1)]" />
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="67vw"
              className="grayscale object-cover"
            />
            <div className="absolute inset-0 border-l border-[rgba(253,252,248,0.4)]">
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>

        {/* === KIRI: GRID BENTO DESKTOP (3x4) === */}
        <div className="hidden lg:grid w-1/4 grid-cols-3 grid-rows-4 gap-[1px] bg-[rgba(12,38,24,0.1)] border-r border-[rgba(12,38,24,0.1)]">
          {/* Baris 1 */}
          <div
            className="col-span-1 bg-[#F0F5F2]"
            style={{ backgroundImage: 'radial-gradient(circle, #163323 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.15 }}
          />
          <div className="col-span-1 bg-[#C9A85C]" />
          <div className="relative col-span-1 overflow-hidden bento-grayscale">
            <Image
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 0px, 8vw"
              className="object-cover"
            />
          </div>
          {/* Baris 2 & 3: GAMBAR BESAR */}
          <div className="col-span-3 row-span-2 relative overflow-hidden bento-grayscale">
            <Image
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 0px, 25vw"
              className="object-cover"
            />
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
          <div className="relative col-span-1 overflow-hidden bento-grayscale">
            <Image
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 0px, 8vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* === TENGAH: PESAN BRAND === */}
        <div className="w-full lg:w-2/4 flex flex-col items-center justify-center p-12 lg:p-20 text-center bg-[#F0F5F2] min-h-[360px] lg:min-h-[400px]">
          <div className="mb-8 lg:mb-10">
            <Logo size="lg" variant="default" />
          </div>

          <h2 
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "#163323",
              marginBottom: "32px",
              fontWeight: 400,
              maxWidth: "480px"
            }}
          >
            Berangkat dengan <span style={{ color: "#C9A85C" }}>tenang</span>
            <br />
            Pulang dengan <span style={{ color: "#C9A85C" }}>cerita</span>.
          </h2>

          <a
            href="#produk"
            className="btn-gold-hov"
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
              boxShadow: "0 8px 24px rgba(201, 168, 92, 0.25)"
            }}
          >
            Mulai Perjalanan
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* === KANAN: GRID BENTO DESKTOP (3x4) === */}
        <div className="hidden lg:grid w-1/4 grid-cols-3 grid-rows-4 gap-[1px] bg-[rgba(12,38,24,0.1)] border-l border-[rgba(12,38,24,0.1)]">
          {/* Baris 1 */}
          <div
            className="col-span-1 bg-[#F0F5F2]"
            style={{ backgroundImage: 'radial-gradient(circle, #163323 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.15 }}
          />
          <div className="col-span-1 bg-[#0C2618]" />
          <div className="col-span-1 bg-[#C9A85C]" />
          {/* Baris 2 & 3: GAMBAR BESAR */}
          <div className="col-span-3 row-span-2 relative overflow-hidden bento-grayscale">
            <Image
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 0px, 25vw"
              className="object-cover"
            />
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
          <div className="col-span-3 row-span-1 relative overflow-hidden bento-grayscale">
            <Image
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=70&auto=format&fit=crop"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 0px, 25vw"
              className="object-cover"
            />
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
        ========================================================
      */}
      <section 
        className="w-full pt-16 lg:pt-20 pb-10 relative"
        style={{ background: "#0C2618", color: "#FDFCF8" }}
      >
        <div 
          className="mx-auto"
          style={{
            maxWidth: "1360px",
            paddingInline: "clamp(20px, 4vw, 40px)",
          }}
        >
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-[rgba(253,252,248,0.1)] pb-12 lg:pb-16"
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
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 lg:justify-items-end">
              {navColumns.map((col) => (
                <div key={col.heading} className="w-full lg:w-auto">
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
                          className="hov-gold"
                          style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "14px",
                            color: "rgba(253, 252, 248, 0.7)",
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Kolom Kontak */}
              <div className="w-full lg:w-auto">
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
                      className="font-display hov-cream"
                      style={{
                        fontSize: "22px",
                        color: "#C9A85C",
                        textDecoration: "none",
                        fontWeight: 400,
                        fontStyle: "italic",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      +62 813-118-1820
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:hello@sahlamadinah.com"
                      className="hov-gold"
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "14px",
                        color: "rgba(253, 252, 248, 0.7)",
                        textDecoration: "none",
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
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end pt-8 gap-6 md:gap-0">
            <div 
              className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-8 text-center md:text-left"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "13px",
                color: "rgba(253, 252, 248, 0.4)",
              }}
            >
              <span>© {year} PT. Sahla Madinah Berkah</span>
              <div className="flex items-center gap-4">
                <a href="#" style={{ color: "rgba(253, 252, 248, 0.6)", textDecoration: "none" }} className="hover:text-[#C9A85C] transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" style={{ color: "rgba(253, 252, 248, 0.6)", textDecoration: "none" }} className="hover:text-[#C9A85C] transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hov-gold inline-flex items-center justify-center"
                  style={{
                    color: "rgba(253, 252, 248, 0.6)",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}