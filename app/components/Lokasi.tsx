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
        <div className="text-center mb-20">
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
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden
            hover:shadow-emerald-300/50 hover:-translate-y-3
            transition-all duration-500 border border-emerald-100">
            <div className="h-72 sm:h-80 md:h-96 w-full overflow-hidden
              bg-gradient-to-br from-emerald-50 to-teal-50">
              <img
                src="/golo.png"
                alt="Peta Desa Golo Mori"
                className="w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
                🏝️ Desa Golo Mori
              </h3>

              <p className="text-sm text-gray-500 mb-5">
                Kecamatan Komodo, Kabupaten Manggarai Barat
              </p>

              <p className="text-sm leading-relaxed mb-6 text-gray-700">
                Wilayah pesisir dengan potensi pariwisata alam yang besar,
                didukung oleh keindahan pantai, perbukitan hijau,
                serta budaya masyarakat lokal yang kuat.
              </p>

              <a
                href="https://maps.google.com/?q=Golo+Mori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2
                bg-gradient-to-r from-emerald-500 to-teal-500
                text-white text-sm font-medium rounded-full
                hover:gap-3 hover:shadow-lg transition-all duration-300"
              >
                📍 Buka di Maps
              </a>
            </div>
          </div>

          {/* WARLOKA */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden
            hover:shadow-teal-300/50 hover:-translate-y-3
            transition-all duration-500 border border-teal-100">
            <div className="h-72 sm:h-80 md:h-96 w-full overflow-hidden
              bg-gradient-to-br from-teal-50 to-cyan-50">
              <img
                src="/warloka.png"
                alt="Peta Desa Warloka Pesisir"
                className="w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                🌊 Desa Warloka Pesisir
              </h3>

              <p className="text-sm text-gray-500 mb-5">
                Kecamatan Komodo, Kabupaten Manggarai Barat
              </p>

              <p className="text-sm leading-relaxed mb-6 text-gray-700">
                Kawasan pesisir dengan kekayaan sumber daya laut,
                panorama teluk yang indah, serta peran strategis
                dalam pengembangan pariwisata berkelanjutan.
              </p>

              <a
                href="https://maps.google.com/?q=Warloka+Komodo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2
                bg-gradient-to-r from-teal-500 to-cyan-500
                text-white text-sm font-medium rounded-full
                hover:gap-3 hover:shadow-lg transition-all duration-300"
              >
                📍 Buka di Maps
              </a>
            </div>
          </div>
        </div>

        {/* BADGES – KONTRAS AMAN */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
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
