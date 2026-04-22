"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";

const Dokumentasi = dynamic(() => import("./components/Dokumentasi"), { ssr: false });
const Lokasi = dynamic(() => import("./components/Lokasi"), { ssr: false });
const Mitra = dynamic(() => import("./components/Mitra"), { ssr: false });
const Tentang = dynamic(() => import("./components/Tentang"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });


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
