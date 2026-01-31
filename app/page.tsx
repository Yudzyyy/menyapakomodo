"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Dokumentasi from "./components/Dokumentasi";
import Hero from "./components/Hero";
import Lokasi from "./components/Lokasi";
import Mitra from "./components/Mitra";
import Tentang from "./components/Tentang";

import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <Hero />
      <Tentang />
      <Lokasi />
      <Dokumentasi />
      <Mitra />
      <Footer />
    </main>
  );
}
