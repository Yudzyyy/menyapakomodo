"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// --- UTILITY COMPONENTS ---

// 1. Noise Texture (Memberikan kesan "film grain" premium)
const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[99] opacity-[0.03] mix-blend-overlay">
    <svg width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// 2. Custom Button with Shimmer Effect
const ShimmerButton = ({ children, onClick, variant = "primary", className = "" }: any) => {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full ${isPrimary ? "px-8 py-4" : "px-6 py-3"} font-medium transition-all duration-300 active:scale-95 ${
        isPrimary 
          ? "bg-emerald-900 text-white hover:bg-emerald-800 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] text-lg" 
          : "bg-white text-emerald-900 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 text-base"
      } ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {isPrimary && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer" />
      )}
    </button>
  );
};

// --- ICON COMPONENTS ---
const PrioritasIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl shadow-sm border border-emerald-100/50 transition-transform group-hover:scale-110 group-hover:bg-emerald-100">
    {children}
  </div>
);

// --- MAIN COMPONENT ---

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Dokumentasi", href: "/#dokumentasi" },
    { label: "Proposal", href: "/proposal" },
  ];

  return (
    <>
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <div
          className={`flex items-center gap-2 px-5 py-2 rounded-full border shadow-lg transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-emerald-100 shadow-emerald-900/5"
              : "bg-white/80 backdrop-blur-md border-emerald-50 shadow-emerald-900/5"
          }`}
        >
          <div className="mr-2 flex items-center gap-2 pr-4 border-r border-emerald-100">
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

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full border shadow-lg transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-white backdrop-blur-xl border-emerald-100 shadow-emerald-900/10"
            : "bg-white/80 backdrop-blur-md border-emerald-50 shadow-emerald-900/5"
        }`}
        aria-label="Menu"
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <span className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-emerald-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      <div
        className={`md:hidden fixed top-20 right-4 z-40 w-64 rounded-2xl border border-emerald-100 bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
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
    </>
  );
};

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import React, { useState } from "react";

export default function OpenRecruitment() {
  const [activePdf, setActivePdf] = useState<{url: string, title: string} | null>(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Advanced GSAP Staggering
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Prioritas Cards Reveal
      gsap.fromTo(".prio-card", 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".prioritas-grid",
            start: "top 85%",
          },
        }
      );



      // Footer Reveal
      gsap.fromTo("footer .mx-auto",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const prioritasData = [
    {
      icon: <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: "Relasi Sponsorship",
      points: [
        "Memiliki koneksi dengan perusahaan / brand / instansi",
        "Berpengalaman dalam mencari sponsor atau kerja sama",
        "Mampu membantu pendanaan program"
      ]
    },
    {
      icon: <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
      title: "Kemampuan Desain (DDD)",
      points: [
        "Memiliki skill desain, dokumentasi dan editing (poster, konten, branding, dll)",
        "Mampu mengelola visual campaign tim",
        "Menguasai tools seperti Canva, Photoshop, Illustrator, dll"
      ]
    },
    {
      icon: <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>,
      title: "Akses Transportasi (Lokotrans)",
      points: [
        "Memiliki relasi atau akses ke transportasi/logistik",
        "Dapat membantu mobilisasi tim dan distribusi kebutuhan ke lokasi KKN",
        "Nilai plus jika memiliki pengalaman koordinasi perjalanan/logistik"
      ]
    },
    {
      icon: <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: "Mahasiswa Kluster Medika dan Agro",
      points: [
        "Mahasiswa kluster medika dan agro",
        "Sudah memenuhi syarat untuk KKN",
        "Bertanggungjawab dan komunikatif"
      ]
    }
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#FDFDFD] text-neutral-900 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <NoiseOverlay />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative flex min-h-[95vh] flex-col items-center justify-center pt-32 pb-16">
        
        {/* Background Grid - Enhanced with better visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        
        {/* Ambient Glow */}
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center">
          
          {/* Banner Singkat / Ticker style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 overflow-hidden rounded-full border border-emerald-200 bg-emerald-50/80 px-5 py-2 backdrop-blur-md shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-emerald-900">
                Open Recruitment Batch II Dibuka! Apply sekarang sebelum closed
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl leading-[1.1] mb-6">
            <span className="block">Open Recruitment Batch II</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent pb-3">
              Menyapa Komodo 2026
            </span>
          </h1>

          <p className="mt-2 text-xl md:text-2xl font-medium text-neutral-800">
            Terbuka untuk Segala Jurusan, <span className="text-emerald-700">Prioritas untuk Kandidat Strategis</span>
          </p>

          <p className="mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            Pendaftaran Menyapa Komodo 2026 terbuka untuk seluruh mahasiswa UGM. 
            Namun, dalam proses seleksi kami mengutamakan kandidat yang memiliki kontribusi strategis dalam mendukung keberhasilan program.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <ShimmerButton onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScuzWWntmn-Xw6rmSK1Z2yaYRwDG_LcRaKJblTCEMF-xDnviw/viewform?usp=publish-editor", "_blank")}>
              Daftar Sekarang
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </ShimmerButton>
            <ShimmerButton variant="outline" onClick={() => setActivePdf({ url: '/guidebook_oprec.pdf', title: 'Guidebook Oprec.pdf' })}>
              Lihat Guidebook
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </ShimmerButton>
            <ShimmerButton variant="outline" onClick={() => setActivePdf({ url: '/surat_izin_orang_tua.pdf', title: 'Surat Izin Orang Tua.pdf' })}>
              Surat Izin
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </ShimmerButton>
          </motion.div>

          {/* Interactive PDF Preview */}
          <motion.div 
            className="mt-16 md:mt-24 grid w-full max-w-5xl gap-8 md:grid-cols-2 px-4"
          >
             {/* Guidebook Focus */}
             <div className="group relative w-full">
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-xl shadow-emerald-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1">
                   <div className="absolute inset-0 z-0 bg-neutral-100">
                      <iframe
                        src="/pdfjs/web/viewer.html?file=/guidebook_oprec.pdf"
                        className="h-full w-full opacity-90 grayscale-[20%] transition-all duration-500 group-hover:grayscale-0 pointer-events-none"
                        title="Guidebook Preview"
                      />
                      <div 
                        onClick={() => setActivePdf({ url: '/guidebook_oprec.pdf', title: 'Guidebook Oprec.pdf' })}
                        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/5"
                      >
                        <div className="scale-90 rounded-full bg-white/95 px-6 py-3 font-semibold text-emerald-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                           Lihat Guidebook
                        </div>
                      </div>
                   </div>
                </div>
                <h3 className="mt-4 text-center font-semibold text-neutral-800">Guidebook Oprec 2026</h3>
             </div>

             {/* Surat Izin Focus */}
             <div className="group relative w-full">
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-xl shadow-emerald-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1">
                   <div className="absolute inset-0 z-0 bg-neutral-100">
                      <iframe
                        src="/pdfjs/web/viewer.html?file=/surat_izin_orang_tua.pdf"
                        className="h-full w-full opacity-90 grayscale-[20%] transition-all duration-500 group-hover:grayscale-0 pointer-events-none"
                        title="Surat Izin Preview"
                      />
                      <div 
                        onClick={() => setActivePdf({ url: '/surat_izin_orang_tua.pdf', title: 'Surat Izin Orang Tua.pdf' })}
                        className="absolute inset-0 flex flex-col cursor-pointer items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
                      >
                        <div className="flex flex-col gap-3 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 items-center justify-center">
                          <div className="rounded-full bg-white/95 px-6 py-3 font-semibold text-emerald-900 shadow-lg backdrop-blur-sm">
                             Lihat Surat Izin
                          </div>
                          <a 
                            href="/surat_izin_orang_tua.pdf" 
                            download="Surat_Izin_Orang_Tua.pdf"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-full bg-emerald-600/95 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-sm hover:bg-emerald-700 flex items-center gap-2 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Unduh Surat
                          </a>
                        </div>
                      </div>
                   </div>
                </div>
                <h3 className="mt-4 text-center font-semibold text-neutral-800">Surat Izin Orang Tua</h3>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRIORITAS KANDIDAT SECTION --- */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 md:text-center text-left max-w-3xl md:mx-auto">
             <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Prioritas Kandidat</h2>
             <p className="mt-4 text-lg text-neutral-500">
               Kami memprioritaskan pendaftar yang memiliki kemampuan di bawah ini:
             </p>
          </div>

          <div className="prioritas-grid grid gap-6 md:grid-cols-2 lg:gap-8">
            {prioritasData.map((item, i) => (
              <div
                key={i}
                className="prio-card group relative flex flex-col rounded-3xl border border-neutral-100 bg-[#FAFAFA] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] hover:bg-white"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/10" />
                
                <PrioritasIcon>{item.icon}</PrioritasIcon>
                
                <h3 className="mb-4 text-2xl font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                
                <ul className="space-y-3 text-neutral-600">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="h-6 w-6 shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* --- BANNER CTA SECTION --- */}
      <section className="relative bg-neutral-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-amber-50 border border-emerald-100 p-10 md:p-16 text-center shadow-xl shadow-emerald-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-900"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-6 relative z-10">
              Punya skill? Punya relasi? <br className="hidden md:block" /> Ini tempatnya.
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 relative z-10 max-w-2xl mx-auto">
              Daftar sekarang dan jadi bagian dari keluarga Menyapa Komodo 2026.
              Bersama-sama kembangkan potensi dan beri aksi nyata untuk masyarakat.
            </p>
            
            <div className="relative z-10 inline-block">
              <ShimmerButton onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScuzWWntmn-Xw6rmSK1Z2yaYRwDG_LcRaKJblTCEMF-xDnviw/viewform?usp=publish-editor", "_blank")}>
                 Daftar Sekarang
              </ShimmerButton>
            </div>
            
            <div className="mt-8 flex justify-center gap-6 text-sm font-semibold text-emerald-800/60 flex-wrap relative z-10">
              <span className="flex items-center gap-1">Sponsorship</span> • 
              <span className="flex items-center gap-1">Desain</span> • 
              <span className="flex items-center gap-1">Lokotrans</span> • 
              <span className="flex items-center gap-1">Kluster Medika/Agro</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* --- PDF VIEWER MODAL --- */}
      <AnimatePresence>
        {activePdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/80 p-4 backdrop-blur-sm"
            onClick={() => setActivePdf(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[90dvh] w-full max-w-6xl overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900 px-4 md:px-6 py-4 text-white">
                <h3 className="font-medium truncate pr-4">{activePdf.title}</h3>
                <div className="flex items-center gap-2">
                  <a 
                    href={activePdf.url} 
                    download={activePdf.title}
                    className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    <span className="hidden sm:inline">Unduh</span>
                  </a>
                  <button 
                    onClick={() => setActivePdf(null)}
                    className="rounded-lg p-2 hover:bg-red-500/20 hover:text-red-400 transition-colors ml-2"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              <iframe
                src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(activePdf.url)}`}
                className="h-full w-full flex-grow bg-neutral-800"
                title={activePdf.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
