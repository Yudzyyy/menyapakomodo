import Image from "next/image"; // PASTIKAN IMPORT INI ADA

export default function Tentang() {
  return (
    <section
      id="tentang"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-emerald-700 mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-emerald-600" />
            Tentang Kegiatan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
            Tema KKN PPM UGM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mt-5 rounded-full mx-auto" />
        </div>

        {/* --- BAGIAN GAMBAR PENERJUNAN (POSISI ATAS & EFEK GEN Z) --- */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-16 group z-20">
          {/* Efek Glow Neon di belakang gambar */}
          <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 -z-10 animate-pulse-slow"></div>
          
          {/* Container Gambar Utama dengan efek tilt saat hover */}
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-white/50 shadow-2xl transform transition-all duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
             {/* Overlay halus */}
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
            <Image
              src="/penerjunan.png" // Pastikan file ada di folder /public
              alt="Suasana Penerjunan KKN PPM UGM"
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              priority
            />
          </div>
        </div>
        {/* --- AKHIR BAGIAN GAMBAR --- */}


        {/* Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-2xl p-6 sm:p-8 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
            <p className="text-gray-800">
              Kegiatan{" "}
              <strong className="text-emerald-700">
                Kuliah Kerja Nyata – Pembelajaran Pemberdayaan Masyarakat (KKN-PPM)
              </strong>{" "}
              Universitas Gadjah Mada Periode II Tahun 2026 merupakan bentuk
              nyata pengabdian mahasiswa kepada masyarakat melalui pendekatan
              interdisipliner, kolaboratif, dan berbasis kebutuhan lokal.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-2xl p-6 sm:p-8 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
            <p className="text-gray-800">
              Tema yang diusung Tim Menyapa Komodo 2026 adalah{" "}
              <strong className="text-emerald-700">
                "Optimalisasi Potensi Daerah melalui Pembangunan dan
                Pemberdayaan Masyarakat Pesisir Berbasis Sumber Daya Lokal
                untuk Mendukung Pariwisata Berkelanjutan"
              </strong>
              . Tema ini menekankan pentingnya penguatan kapasitas masyarakat
              pesisir dalam mengelola potensi alam, sosial, dan budaya secara
              berkelanjutan.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-2xl p-6 sm:p-8 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
            <p className="text-gray-800">
              Melalui pelaksanaan KKN-PPM di wilayah Kecamatan Komodo, Kabupaten
              Manggarai Barat, mahasiswa diharapkan mampu berkontribusi dalam
              peningkatan kualitas sumber daya manusia, penguatan ekonomi lokal,
              pengembangan pariwisata berkelanjutan, serta dukungan terhadap
              pencapaian tujuan pembangunan berkelanjutan (SDGs).
            </p>
          </div>
        </div>

        {/* Bottom stats/badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
              2
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Desa Lokasi
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
              27
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Mahasiswa
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
              50
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Hari Program
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/60 border border-emerald-200/50 rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
              ∞
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Manfaat</div>
          </div>
        </div>
      </div>
    </section>
  );
}