"use client";

import React from "react";

const Footer = ({ isProposal = false }) => {
  return (
    <footer className="relative bg-emerald-950 pt-16 pb-6 text-white overflow-hidden">
      {/* 1. BAGIAN ATAS BERGELOMBANG (WAVE SHAPE) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[1px]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 V60 C300,120 900,0 1200,60 V0 Z"
            className="fill-[#FDFDFD]"
          ></path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* KOLOM 1: BRANDING & DESKRIPSI */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pt-14 md:pt-20 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-sm md:text-base leading-relaxed text-white/80 max-w-sm">
              KKN-PPM UGM 2026 Desa Golo Mori & Desa Warloka, Kec. Komodo, Manggarai Barat.
            </p>
          </div>

          {/* KOLOM 2: NAVIGASI */}
          <div className="lg:col-span-2 pt-6 md:pt-8 lg:mt-6">
            <h4 className="text-base font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm md:text-base text-white/70">
              {[
                { label: "Beranda", href: "/" },
                { label: "Tentang", href: "/#tentang" },
                { label: "Lokasi", href: "/#lokasi" },
                { label: "Dokumentasi", href: "/#dokumentasi" },
                ...(isProposal ? [] : [{ label: "Proposal", href: "/proposal" }]),
                { label: "Kontak", href: "/#kontak" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-emerald-400 hover:underline decoration-emerald-400 underline-offset-4 transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: KONTAK */}
          <div className="lg:col-span-4 pt-6 md:pt-8 lg:mt-6">
            <h4 className="text-base font-bold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="mt-1">
                  <svg
                    className="size-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white/70">
                  Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur.
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div>
                  <svg
                    className="size-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:menyapakomodo26@gmail.com"
                  className="text-sm md:text-base text-white/70 hover:text-emerald-400"
                >
                  menyapakomodo26@gmail.com
                </a>
              </li>

              <li className="flex gap-3 items-start">
                <div className="mt-1">
                  <svg
                    className="size-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-white/70 space-y-1">
                  <p className="font-semibold text-white/90">Hubungan Masyarakat:</p>
                  <p>+62 878-5931-8683 (Dyah)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 pb-2 text-center">
          <p className="text-[10px] md:text-xs text-white/40 tracking-wider">
            © 2026 MENYAPA KOMODO – KKN–PPM UGM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
