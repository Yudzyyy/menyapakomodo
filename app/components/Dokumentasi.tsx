import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Dokumentasi() {
  const originalPhotos = [
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

  // Duplicate photos to ensure we have enough items for the parallax effect (15 items needed for 3 rows of 5)
  const products = [
    ...originalPhotos,
    ...originalPhotos,
    ...originalPhotos
  ].slice(0, 15).map((photo, index) => ({
    title: photo.title,
    link: "#", // No specific link for now
    thumbnail: photo.src,
  }));

  return (
    <section id="dokumentasi" className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <HeroParallax products={products} />
    </section>
  );
}
