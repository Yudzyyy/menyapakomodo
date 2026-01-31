export default function Mitra() {
  return (
    <section
      id="mitra"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-28 bg-gradient-to-br from-white via-gray-50 to-slate-100"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />
      </div>

      {/* TOP WAVE - matching Dokumentasi end color */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20 sm:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
               82.39-16.72,168.19-17.73,250.45-.39
               C823.78,31,906.67,72,985.66,92.83
               c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
               A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-teal-50"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-emerald-700 mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-emerald-600" />
            Dukungan & Kolaborasi
            <span className="w-8 h-[2px] bg-emerald-600" />
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
            Mitra Terdahulu
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-5 rounded-full" />

          <p className="mt-4 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
            Institusi dan perusahaan yang telah mendukung kegiatan
            KKN PPM UGM pada periode sebelumnya
          </p>
        </div>

        {/* SINGLE IMAGE CONTAINER */}
        <div className="flex justify-center">
          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-10 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 hover:-translate-y-1">
            <img
              src="/mitra.png"
              alt="Daftar Mitra Terdahulu KKN PPM UGM"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}