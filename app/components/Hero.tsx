"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  const navItems = [
    { label: "Tentang", href: "#tentang" },
    { label: "Lokasi", href: "#lokasi" },
    { label: "Dokumentasi", href: "#dokumentasi" },
    { label: "Proposal", href: "/proposal" },
    { label: "Mitra", href: "#mitra" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/komodo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* ================= GRADIENT DECORATIONS ================= */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 z-[5] h-96 w-96 rounded-full bg-gradient-to-br from-lime-400/30 via-yellow-400/20 to-transparent blur-3xl" />

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 z-[5] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-yellow-400/25 via-lime-400/20 to-transparent blur-3xl" />

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <div
          className={`flex items-center gap-2 px-5 py-2 rounded-full border shadow-lg transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-emerald-100 shadow-emerald-900/5"
              : "bg-white/80 backdrop-blur-md border-emerald-50 shadow-emerald-900/5"
          }`}
        >
          {/* Logo Image */}
          <div className="mr-2 flex items-center gap-2 pr-4 border-r border-emerald-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Menyapa Komodo Logo" 
                className="h-8 w-auto object-contain invert"
              />
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 text-emerald-900/80 hover:text-emerald-700 hover:bg-emerald-50"
            >
              {item.label}
            </a>
          ))}

          <a
              href="https://wa.me/6287859318683"
              className="ml-2 rounded-full bg-emerald-950 px-5 py-1.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-emerald-900"
          >
              Kontak
          </a>
        </div>
      </nav>

      {/* ================= MOBILE HAMBURGER ================= */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full border shadow-lg transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white backdrop-blur-xl border-emerald-100 shadow-emerald-900/10"
            : "bg-white/80 backdrop-blur-md border-emerald-50 shadow-emerald-900/5"
        }`}
        aria-label="Menu"
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <span
            className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden fixed top-20 right-4 z-40 w-64 rounded-2xl border border-emerald-100 bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
              href="https://wa.me/6287859318683"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full rounded-xl bg-emerald-950 px-4 py-3 text-center text-sm font-medium text-white hover:bg-emerald-900 transition-colors"
          >
              Kontak
          </a>
        </div>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Logo KKN PPM UGM"
            className="mx-auto mb-6 h-28 sm:h-36 md:h-48 lg:h-52 drop-shadow-2xl"
          />

          <p className="mb-3 text-sm sm:text-base md:text-lg text-white/85 font-bold">
            KKN PPM UGM Menyapa Komodo
          </p>


          <p className="mb-8 text-sm sm:text-base md:text-lg text-white/85">
            Periode II (Juni-Agustus) 2026
          </p>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <span className="mb-1 text-xs tracking-widest">SCROLL</span>
        <div className="h-7 w-4 rounded-full border border-white/50">
          <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}