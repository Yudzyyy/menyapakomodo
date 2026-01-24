"use client";

import { useState, useEffect, useRef } from "react";

// --- DEFINISI TIPE DATA (PENTING: Agar Build Tidak Error) ---
type StatData = {
  label: string;
  value: string;
  icon: string;
};

type BenefitData = {
  title: string;
  desc: string;
  icon: string;
};
// -----------------------------------------------------------

export default function Proposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔹 TAMBAHAN KHUSUS PDF (TIDAK MENGUBAH LOGIKA LAIN)
  const [loadPdf, setLoadPdf] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Data Kontak
  const contactInfo = {
    wa: "https://wa.me/6287859318683",
    email: "mailto:menyapakomodo26@gmail.com",
    name: "Dyah Puspita",
  };

  // Efek Scroll Navbar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 LAZY LOAD PDF (SOLUSI 1)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadPdf(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (pdfRef.current) observer.observe(pdfRef.current);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Dokumentasi", href: "/#dokumentasi" },
    { label: "Kontak", href: contactInfo.wa },
  ];

  // DATA STATISTIK
  const impactStats: StatData[] = [
    { label: "Total Views", value: "607k+", icon: "/icons/views.gif" },
    { label: "Total Likes", value: "450k+", icon: "/icons/likes.gif" },
    { label: "Impressions", value: "315k+", icon: "/icons/impres.gif" },
    { label: "Profile Visits", value: "163k+", icon: "/icons/profiles.gif" },
  ];

  // MANFAAT SPONSORSHIP
  const benefits: BenefitData[] = [
    {
      title: "Massive Branding",
      desc: "Penempatan logo eksklusif pada Rompi Tim, Banner, ID Card, dan Merchandise KKN.",
      icon: "/icons/speaker.gif",
    },
    {
      title: "Digital & Creative Exposure",
      desc: "Fitur khusus dalam Video Dokumenter, After Movie, dan Instagram Ads.",
      icon: "/icons/exposure.gif",
    },
    {
      title: "CSR & ESG Compliance",
      desc: "Implementasi nyata prinsip ESG & SDGs untuk laporan keberlanjutan perusahaan.",
      icon: "/icons/global.gif",
    },
    
  ];
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);


  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* ================= NAVBAR ================= */}
      <nav
          className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm py-2 sm:py-3"
              : "bg-transparent py-3 sm:py-5"
          }`}
        >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex items-center justify-between">
          <div className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden relative">

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 bg-white/90 rounded-xl border shadow-sm text-slate-700"
          >
            ☰
          </button>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl p-4 flex flex-col gap-2 absolute w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 rounded-lg text-center font-medium hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HEADER ================= */}
      <section className="relative pt-36 pb-20 px-6 text-center max-w-5xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-200/40 rounded-full blur-[80px] -z-10" />

        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-200 bg-white/50 backdrop-blur-md mb-6 shadow-sm">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">
            ✨ Open for Partnership
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Mari Berkolaborasi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
            Membangun Negeri
          </span>
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Proposal penawaran kerjasama KKN-PPM UGM Periode II Tahun 2026. Bersama
          Tim "Menyapa Komodo 2026", wujudkan dampak nyata.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-lg shadow-emerald-100/50 border border-slate-100 hover:-translate-y-1 transition-transform"
            >
              <div className="mb-3 flex justify-center">
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-2xl font-bold text-slate-800">
                {s.value}
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-6 py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Keuntungan Mitra
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Bergabunglah sebagai mitra strategis dan dapatkan eksposur eksklusif
              serta dampak sosial yang terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-100/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PDF VIEWER ================= */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto" ref={pdfRef}>
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-slate-300 bg-slate-800 border border-slate-700 relative">
            <div className="h-10 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="ml-4 text-xs text-slate-400 font-mono">
                proposal-sponsorship-final.pdf
              </div>
            </div>

            {isLoading && (
              <div className="absolute inset-0 top-10 flex flex-col items-center justify-center bg-slate-900/90 z-10 backdrop-blur-sm">
                <div className="animate-spin h-10 w-10 border-2 border-emerald-400 border-t-transparent rounded-full mb-4"></div>
                <p className="text-emerald-400 text-sm font-mono animate-pulse">
                  Memuat dokumen (24 MB)...
                </p>
              </div>
            )}

           {loadPdf && (
              <iframe
                src="/pdfjs/web/viewer.html?file=/proposal.pdf"
                className="w-full h-[65vh] sm:h-[80vh] lg:h-[85vh] bg-white"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>

          <div className="mt-10 w-full px-4 sm:px-0 flex flex-col items-center justify-center gap-3">
            <a
              href="/proposal.pdf"
              download="Proposal_KKN-PPM_UGM_MenyapaKomodo2026.pdf"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg shadow-cyan-200/50 hover:shadow-cyan-300/50 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Download Proposal Lengkap</span>
              <span className="relative z-10">⬇️</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 bg-white border-t border-slate-100 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">
            Tertarik Bekerjasama?
          </h3>
          <p className="mb-8 text-slate-600">
            Hubungi kami untuk mendiskusikan paket sponsorship yang sesuai.
            <br />
            CP:{" "}
            <span className="font-semibold text-emerald-600">
              {contactInfo.name}
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={contactInfo.wa}
              target="_blank"
              className="px-8 py-3 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200 transition-all"
            >
              💬 Chat WhatsApp
            </a>
            <a
              href={contactInfo.email}
              className="px-8 py-3 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
            >
              📧 Kirim Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
