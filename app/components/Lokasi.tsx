"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function Lokasi() {
  return (
    <section
      id="lokasi"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-28
      bg-gradient-to-b from-cyan-50 via-teal-50 to-emerald-50"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* TOP WAVE DIVIDER */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
               82.39-16.72,168.19-17.73,250.45-.39
               C823.78,31,906.67,72,985.66,92.83
               c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
               A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cyan-50"
          />
        </svg>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-emerald-700 mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-emerald-600" />
            Lokasi Pengabdian
            <span className="w-8 h-[2px] bg-emerald-600" />
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700
          bg-clip-text text-transparent">
            Dua Desa, Satu Misi
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-5 rounded-full" />

          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Kecamatan Komodo, Kabupaten Manggarai Barat
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* GOLO MORI */}
          <CardContainer className="inter-var">
            <CardBody className="bg-white/80 backdrop-blur-sm relative group/card border-emerald-100/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-emerald-900"
              >
                🏝️ Desa Golo Mori
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-600 text-sm max-w-sm mt-2 font-medium"
              >
                Wilayah pesisir dengan potensi pariwisata alam yang besar,
                didukung oleh keindahan pantai, perbukitan hijau,
                serta budaya masyarakat lokal yang kuat.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/golo.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://maps.google.com/?q=Golo+Mori"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-medium text-emerald-700"
                >
                  Kecamatan Komodo, Manggarai Barat
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buka di Maps
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* WARLOKA */}
           <CardContainer className="inter-var">
            <CardBody className="bg-white/80 backdrop-blur-sm relative group/card border-emerald-100/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-emerald-900"
              >
                 🌊 Desa Warloka Pesisir
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-600 text-sm max-w-sm mt-2 font-medium"
              >
                 Kawasan pesisir dengan kekayaan sumber daya laut,
                panorama teluk yang indah, serta peran strategis
                dalam pengembangan pariwisata berkelanjutan.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/warloka.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://maps.google.com/?q=Warloka+Komodo"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-medium text-emerald-700"
                >
                  Kecamatan Komodo, Manggarai Barat
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buka di Maps
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        {/* BADGES – KONTRAS AMAN */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-full
            bg-gradient-to-r from-emerald-600 to-teal-600
            text-white text-sm font-medium shadow-md">
            🗺️ 2 Desa Dampingan
          </div>
          <div className="px-6 py-3 rounded-full
            bg-gradient-to-r from-teal-600 to-cyan-600
            text-white text-sm font-medium shadow-md">
            🏖️ Pesisir Komodo
          </div>
          <div className="px-6 py-3 rounded-full
            bg-gradient-to-r from-emerald-700 to-teal-700
            text-white text-sm font-medium shadow-md">
            🌱 Pariwisata Berkelanjutan
          </div>
        </div>
      </div>
    </section>
  );
}
