import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Dokumentasi() {
  const originalPhotos = [
    { src: "/docs/1.jpg",  title: "Sosialisasi Sikat Gigi",  desc: "Pentingnya Menjaga Kesehatan Gigi" },
    { src: "/docs/2.JPG",  title: "Penanaman Mangrove",      desc: "Menjaga Ekosistem Pesisir Komodo" },
    { src: "/docs/3.jpg",  title: "Penerimaan Tim KKN",      desc: "Sambutan Hangat Warga Desa" },
    { src: "/docs/4.jpg",  title: "Isi Piringku",            desc: "Edukasi Gizi dan Pola Makan Sehat" },
    { src: "/docs/5.jpg",  title: "Porsenimodo",             desc: "Olahraga dan Seni Tradisional" },
    { src: "/docs/6.jpg",  title: "Balap Ketinting",         desc: "Budaya Lokal Masyarakat Komodo" },
    { src: "/docs/7.png",  title: "Senyum Terang",           desc: "Keceriaan Anak-anak Desa Papagarang" },
    { src: "/docs/8.png",  title: "Bersama Warga",           desc: "Membangun Kebersamaan dengan Masyarakat" },
    { src: "/docs/9.png",  title: "Lautku Bersih",           desc: "Menjaga Kebersihan Laut Komodo" },
    { src: "/docs/10.png", title: "Peta Pulau Seraya",       desc: "Pemetaan Potensi Wilayah Desa" },
  ];

  const products = [...originalPhotos, ...originalPhotos.slice(0, 5)].map(
    (photo, index) => ({
      title: photo.title,
      link: "#",
      thumbnail: photo.src,
      key: `doc-${index}`,
    })
  );

  return (
    <section id="dokumentasi" className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <HeroParallax products={products} />
    </section>
  );
}