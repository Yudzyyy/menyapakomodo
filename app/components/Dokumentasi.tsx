export default function Dokumentasi() {
  const photos = [
    {
      src: "/docs/Photo1.jpg",
      title: "Sosialisasi Sikat Gigi",
      desc: "Pentingnya Menjaga Kesehatan Gigi",
    },
    {
      src: "/docs/Photo2.jpg",
      title: "Pemberdayaan Masyarakat",
      desc: "Workshop keterampilan lokal",
    },
    {
      src: "/docs/Photo3.jpg",
      title: "Penerimaan KKN",
      desc: "Pertemuan Perangkat Desa dan Warga",
    },
    {
      src: "/docs/Photo4.jpg",
      title: "Komodo Mengajar",
      desc: "Mengajar Anak-anak Sekolah",
    },
    {
      src: "/docs/Photo5.jpg",
      title: "Porsenimodo",
      desc: "Olahraga dan Seni Tradisional",
    },
    {
      src: "/docs/Photo6.jpg",
      title: "Budaya Lokal",
      desc: "Balap Ketinting",
    },
  ];

  return (
    <section
      id="dokumentasi"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-28 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      </div>

      {/* TOP WAVE DIVIDER */}
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
            className="fill-emerald-50"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-emerald-700 mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-emerald-600" />
            Galeri Kegiatan
            <span className="w-8 h-[2px] bg-emerald-600" />
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
            Dokumentasi KKN PPM
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-5 rounded-full" />

          <p className="mt-4 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
            Momen berharga selama kegiatan pengabdian masyarakat di Kecamatan
            Komodo
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-300/50 transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-white/90">{photo.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
    </section>
  );
}
