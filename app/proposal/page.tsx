"use client";

import { useState, useEffect, useRef } from "react";

/* ================= TYPES ================= */
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
/* ========================================= */

export default function Proposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loadPdf, setLoadPdf] = useState(false);

  const pdfRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    wa: "https://wa.me/6287859318683",
    email: "mailto:menyapakomodo26@gmail.com",
    name: "Dyah Puspita",
  };

  /* ===== NAVBAR SCROLL EFFECT ===== */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== PDF LAZY LOAD ===== */
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

  const impactStats: StatData[] = [
    { label: "Total Views", value: "607k+", icon: "/icons/views.gif" },
    { label: "Total Likes", value: "450k+", icon: "/icons/likes.gif" },
    { label: "Impressions", value: "315k+", icon: "/icons/impres.gif" },
    { label: "Profile Visits", value: "163k+", icon: "/icons/profiles.gif" },
  ];

  const benefits: BenefitData[] = [
    {
      title: "Massive Branding",
      desc: "Penempatan logo eksklusif pada rompi tim, banner, ID Card, dan merchandise KKN.",
      icon: "/icons/speaker.gif",
    },
    {
      title: "Digital & Creative Exposure",
      desc: "Eksposur brand melalui video dokumenter, after movie, dan Instagram Ads.",
      icon: "/icons/exposure.gif",
    },
    {
      title: "CSR & ESG Compliance",
      desc: "Implementasi nyata prinsip ESG & SDGs dalam program KKN.",
      icon: "/icons/global.gif",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      {/* ================= NAVBAR ================= */}
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto mt-2 p-2.5 rounded-xl bg-white/90 border shadow-sm text-slate-700"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU (SATU SAJA) */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-4 right-4 bg-white rounded-2xl border shadow-2xl p-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-center font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* ================= HEADER ================= */}
      <section className="relative pt-24 sm:pt-28 pb-20 px-6 text-center max-w-5xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px] -z-10" />

        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-200 bg-white/60 backdrop-blur mb-6 shadow-sm">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            ✨ Open for Partnership
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Mari Berkolaborasi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
            Membangun Negeri
          </span>
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
          Proposal penawaran kerjasama KKN-PPM UGM Periode II Tahun 2026 bersama
          Tim “Menyapa Komodo 2026”.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow border hover:-translate-y-1 transition"
            >
              <div className="mb-3 flex justify-center">
                <img src={s.icon} alt={s.label} className="w-12 h-12" />
              </div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs uppercase text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-6 py-12 bg-white border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-8 text-center rounded-3xl bg-slate-50 border hover:bg-white hover:shadow-xl transition"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <img src={b.icon} alt={b.title} className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">{b.title}</h4>
              <p className="text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PDF ================= */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto" ref={pdfRef}>
          <div className="rounded-xl overflow-hidden shadow-2xl bg-slate-800 border">
            {isLoading && (
              <div className="p-10 text-center text-emerald-400">
                Memuat dokumen…
              </div>
            )}

            {loadPdf && (
              <iframe
                src="/pdfjs/web/viewer.html?file=/proposal.pdf"
                className="w-full h-[80vh] bg-white"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 bg-white border-t text-center px-6">
        <h3 className="text-2xl font-bold mb-4">Tertarik Bekerjasama?</h3>
        <p className="mb-8 text-slate-600">
          CP: <span className="font-semibold text-emerald-600">{contactInfo.name}</span>
        </p>

        <div className="flex justify-center gap-4">
          <a
            href={contactInfo.wa}
            className="px-8 py-3 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600"
          >
            💬 WhatsApp
          </a>
          <a
            href={contactInfo.email}
            className="px-8 py-3 rounded-full border font-medium"
          >
            📧 Email
          </a>
        </div>
      </section>
    </main>
  );
}
