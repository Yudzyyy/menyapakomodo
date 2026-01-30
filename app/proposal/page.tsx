"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
      className={`group relative overflow-hidden rounded-full px-8 py-3.5 font-medium transition-all duration-300 active:scale-95 ${
        isPrimary 
          ? "bg-emerald-900 text-white hover:bg-emerald-800 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]" 
          : "bg-white text-emerald-900 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50"
      } ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {isPrimary && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer" />
      )}
    </button>
  );
};

// --- MAIN COMPONENT ---

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const navItems = [
      { label: "Beranda", href: "/" },
      { label: "Tentang", href: "/#tentang" },
      { label: "Dokumentasi", href: "/#dokumentasi" },
    ];
  
    return (
      <>
        {/* ================= DESKTOP NAVBAR ================= */}
        <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
          <div
            className={`flex items-center gap-2 px-5 py-2 rounded-full border shadow-lg transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl border-emerald-100 shadow-emerald-900/5"
                : "bg-white/80 backdrop-blur-md border-emerald-50 shadow-emerald-900/5"
            }`}
          >
            {/* Logo Image */}
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
  
        {/* ================= MOBILE HAMBURGER ================= */}
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
      </>
    );
  };

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProposalProfessional() {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
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
      // Stats Cards Reveal
      gsap.fromTo(".stat-card", 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
          },
        }
      );

      // Benefits Reveal
      gsap.fromTo(".benefit-row",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".benefits-section",
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statsData = [
    { label: "Total Views", value: "607k+", icon: "/icons/views.gif" },
    { label: "Total Likes", value: "450k+", icon: "/icons/likes.gif" },
    { label: "Impressions", value: "315k+", icon: "/icons/impres.gif" },
    { label: "Profile Visits", value: "163k+", icon: "/icons/profiles.gif" },
  ];

  const benefitsData = [
    {
      title: "Massive Branding",
      desc: "Penempatan logo eksklusif pada rompi tim, banner, ID Card, dan merchandise KKN.",
      icon: "/icons/speaker.gif",
    },
    {
      title: "Digital Exposure",
      desc: "Eksposur brand melalui video dokumenter, after movie, dan Instagram Ads.",
      icon: "/icons/exposure.gif",
    },
    {
      title: "ESG Compliance",
      desc: "Implementasi nyata prinsip ESG & SDGs dalam program pemberdayaan.",
      icon: "/icons/global.gif",
    },
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#FDFDFD] text-neutral-900 selection:bg-emerald-200 selection:text-emerald-900">
      <NoiseOverlay />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        
        {/* Background Grid - Enhanced with better visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Glow - Green Gold Gradient */}
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[100px]" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
              Open Partnership 2026
            </span>
          </motion.div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl leading-tight pb-4">
            {"Mari Berkolaborasi".split(" ").map((word, i) => (
               <span key={i} className="inline-block">{word}&nbsp;</span>
            ))}
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent py-2">
              Membangun Negeri
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-neutral-500 md:text-xl leading-relaxed">
            Proposal penawaran kerjasama eksklusif <strong className="font-semibold text-emerald-800">KKN-PPM UGM Periode II 2026</strong>. 
            Bersama tim "Menyapa Komodo 2026", wujudkan dampak nyata di Nusa Tenggara Timur.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <ShimmerButton onClick={() => setShowPdfViewer(true)}>
              Lihat Proposal
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </ShimmerButton>
            <ShimmerButton variant="outline" onClick={() => window.open("/proposal.pdf", "_blank")}>
              Download PDF
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </ShimmerButton>
          </motion.div>

          {/* Interactive PDF Preview */}
          <motion.div 
            className="group relative mt-16 md:mt-24 w-full max-w-4xl"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-2xl shadow-emerald-900/10 transition-shadow duration-500 group-hover:shadow-emerald-900/20">
               <div className="absolute inset-0 z-0 bg-neutral-100">
                  <iframe
                    src="/proposal.pdf#view=Fit"
                    className="h-full w-full opacity-90 grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                    title="Preview"
                  />
                  {/* Overlay for interaction hint */}
                  <div 
                    onClick={() => setShowPdfViewer(true)}
                    className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/5"
                  >
                    <div className="scale-90 rounded-full bg-white/90 px-6 py-3 font-medium text-emerald-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                       Klik untuk Membaca
                    </div>
                  </div>
               </div>
            </div>
            {/* Decorative Elements behind PDF */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION (Clean Bento Grid) --- */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Social Impact</h2>
             <p className="mt-4 text-neutral-500">Metrik jangkauan digital tim Menyapa Komodo</p>
          </div>

          <div className="stats-grid grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className="stat-card group relative flex flex-col items-center justify-center rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-50 transition-colors group-hover:bg-emerald-50/50">
                  <img src={stat.icon} alt={stat.label} className="h-12 w-12 object-contain" />
                </div>
                <div className="text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-emerald-700">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="benefits-section bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Text Side */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                Mengapa Bermitra?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500">
                Kolaborasi ini bukan sekadar sponsorship, melainkan investasi sosial yang terukur. 
                Kami menawarkan "value proposition" yang selaras dengan tujuan bisnis Anda.
              </p>
              
              <div className="mt-12 space-y-8">
                {benefitsData.map((benefit, i) => (
                  <div key={i} className="benefit-row flex items-start gap-5">
                    <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-white shadow-sm">
                      <img src={benefit.icon} alt="" className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{benefit.title}</h3>
                      <p className="mt-2 text-neutral-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side (Abstract composition) */}
            <div className="relative hidden h-full min-h-[500px] w-full items-center justify-center rounded-3xl bg-emerald-900 lg:flex overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center p-10 flex flex-col items-center">
                   <img 
                     src="/logo.png" 
                     alt="Menyapa Komodo" 
                     className="h-40 w-auto object-contain mb-8 drop-shadow-2xl"
                   />
                   <div className="inline-block px-4 py-2 border border-emerald-500/50 rounded-full text-emerald-200 text-sm backdrop-blur-sm bg-emerald-900/30">Est. 2016</div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500 blur-[80px]" />
                <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-teal-400 blur-[60px]" />
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative overflow-hidden bg-white py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Siap Menciptakan Dampak?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
            Jadilah bagian dari perjalanan kami. Diskusikan opsi paket sponsorship 
            yang paling sesuai dengan strategi CSR perusahaan Anda.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShimmerButton onClick={() => window.open("https://wa.me/6287859318683")}>
               Hubungi via WhatsApp
            </ShimmerButton>
            <ShimmerButton variant="outline" onClick={() => window.location.href = "mailto:menyapakomodo26@gmail.com"}>
               Kirim Email
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-200 bg-white pb-12 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-emerald-900" />
                <span className="text-xl font-bold tracking-tight text-neutral-900">Menyapa Komodo</span>
              </div>
              <p className="mt-6 max-w-sm text-neutral-500">
                Program Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat (KKN-PPM) Universitas Gadjah Mada Periode II Tahun 2026.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-neutral-900">Navigasi</h4>
              <ul className="mt-6 space-y-4 text-sm text-neutral-500">
                {['Beranda', 'Tentang', 'Program Kerja', 'Dokumentasi'].map(link => (
                  <li key={link}><a href="#" className="hover:text-emerald-700 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900">Kontak</h4>
              <ul className="mt-6 space-y-4 text-sm text-neutral-500">
                <li className="flex items-center gap-3">
                  <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  +62 878-5931-8683 (Dyah)
                </li>
                <li className="flex items-center gap-3">
                  <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  menyapakomodo26@gmail.com
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Kec. Komodo, Manggarai Barat, NTT.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 text-xs text-neutral-400 md:flex-row">
            <p>&copy; 2026 Menyapa Komodo. All rights reserved.</p>
            <p>Designed with passion by KKN-PPM UGM Team.</p>
          </div>
        </div>
      </footer>

      {/* --- PDF VIEWER MODAL --- */}
      <AnimatePresence>
        {showPdfViewer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/80 p-4 backdrop-blur-sm"
            onClick={() => setShowPdfViewer(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[90dvh] w-full max-w-6xl overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-white/10"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900 px-6 py-4 text-white">
                <h3 className="font-medium">Proposal Partnership.pdf</h3>
                <button 
                  onClick={() => setShowPdfViewer(false)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <iframe
                src="/proposal.pdf"
                className="h-[calc(100%-64px)] w-full bg-neutral-800"
                title="Proposal PDF Full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}