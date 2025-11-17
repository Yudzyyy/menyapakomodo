import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Award, ChevronDown } from 'lucide-react';
import { FloatingNav } from './components/FloatingNav';
import { HeroParallax } from './components/HeroParallax';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", link: "beranda" },
    { name: "Tentang Komodo", link: "tentang-komodo" },
    { name: "Galeri", link: "galeri" },
  ];

  const galleryProducts = [
    {
      title: "Pembukaan KKN Menyapa Komodo",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
      category: "Acara Resmi"
    },
    {
      title: "Penanaman Pohon Bersama",
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600",
      category: "Lingkungan"
    },
    {
      title: "Bimbingan Belajar Anak",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      category: "Pendidikan"
    },
    {
      title: "Penyuluhan Kesehatan",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      category: "Kesehatan"
    },
    {
      title: "Pelatihan UMKM Lokal",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
      category: "Pemberdayaan"
    },
    {
      title: "Festival Budaya Lokal",
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600",
      category: "Budaya"
    },
    {
      title: "Gotong Royong Kecamatan",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600",
      category: "Sosial"
    },
    {
      title: "Pelatihan Ekowisata",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600",
      category: "Pariwisata"
    },
    {
      title: "Kelas Bahasa Inggris",
      thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
      category: "Pendidikan"
    },
    {
      title: "Workshop Kerajinan Tangan",
      thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
      category: "Pemberdayaan"
    },
    {
      title: "Posyandu Balita",
      thumbnail: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      category: "Kesehatan"
    },
    {
      title: "Pelatihan Diving",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
      category: "Pariwisata"
    },
    {
      title: "Lomba 17 Agustus",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      category: "Sosial"
    },
    {
      title: "Bersih-Bersih Pantai",
      thumbnail: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600",
      category: "Lingkungan"
    },
    {
      title: "Penutupan KKN",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      category: "Acara Resmi"
    },
  ];

  const sponsors = [
    { name: "Universitas Gadjah Mada", logo: "images/ugm.png" },
    { name: "Logo KKN UGM", logo: "images/kkn.jpg" },
    { name: "Sinarmas", logo: "images/sinarmas.png" },
    { name: "Bank NTT", logo: "images/bankntt.png" },
    { name: "Pepsodent", logo: "images/pepsodent.png" },
    { name: "Parimas", logo: "images/parimas.png" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingNav navItems={navItems} onNavClick={scrollToSection} />

      <section id="beranda" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/logo.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/komodo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4 md:mb-1 animate-float">
            <img 
              src="/images/logo.png" 
              alt="Menyapa Komodo Logo" 
              className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl mx-auto"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl tracking-tight">
            Menyapa Komodo
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-12 drop-shadow-lg font-medium px-4">
            KKN-PPM UGM Periode II - 2026
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md px-4">
            <button 
              onClick={() => scrollToSection('tentang-komodo')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-green-700 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Tentang Komodo
            </button>
            <button 
              onClick={() => scrollToSection('galeri')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-sm md:text-lg hover:bg-white hover:text-green-700 transition-all shadow-xl"
            >
              Tentang Kami
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>
      </section>

      <section 
        id="tentang-komodo" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/frame.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#138b7d'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tentang Kecamatan Komodo</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-12 max-w-6xl mx-auto">
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-white rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src="/images/peta.jpg" 
                alt="Kecamatan Komodo"
                className="relative rounded-2xl shadow-2xl w-[90%] sm:w-[70%] md:w-[40%] h-auto object-contain"
              />
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-white leading-relaxed">
                Kecamatan Komodo terletak di Kabupaten Manggarai Barat, Nusa Tenggara Timur, yang terkenal sebagai 
                habitat asli hewan purba Komodo. Wilayah ini memiliki keindahan alam yang luar biasa dengan 
                pantai-pantai eksotis dan keanekaragaman hayati yang kaya.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Melalui program KKN-PPM UGM Periode II tahun 2026 dengan tema "Optimalisasi Potensi Daerah melalui Pembangunan 
                dan Pemberdayaan Masyarakat Pesisir dengan Berkonsentrasi pada Sumber Daya Lokal sebagai Strategi Penguatan Sumber 
                Daya Manusia dan Daya Saing Pariwisata Berkelanjutan", kami berkomitmen 
                untuk memberikan kontribusi nyata dalam pengembangan pariwisata berkelanjutan, pendidikan, kesehatan, 
                dan pemberdayaan masyarakat lokal.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mx-auto mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">Lokasi</h3>
                  <p className="text-sm md:text-base text-gray-600">Kec. Komodo, NTT</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <Calendar className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mx-auto mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">Durasi</h3>
                  <p className="text-sm md:text-base text-gray-600">Juni - Agustus 2026</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mx-auto mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">Tim</h3>
                  <p className="text-sm md:text-base text-gray-600">18/30 Mahasiswa</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mx-auto mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">Program</h3>
                  <p className="text-sm md:text-base text-gray-600">17 Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="bg-white">
        <HeroParallax products={galleryProducts} />
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Potensi Sponsor & Partner</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              Potensi Sponsor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-full h-12 md:h-16 object-contain transition-all hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-[#138b7d] to-[#0f6f65] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Menyapa Komodo Logo" 
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-xl md:text-2xl font-bold">Menyapa Komodo</h3>
              </div>
              <p className="text-sm md:text-base text-green-200 leading-relaxed">
                KKN-PPM UGM Periode II 2026 di Kecamatan Komodo.
              </p>
              <p className="text-sm md:text-base text-green-200 leading-relaxed">
                Sudah lama tak bersua, komodo kembali menyapa.
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="text-sm md:text-base text-green-200 hover:text-white transition">Beranda</a></li>
                <li><a href="#tentang-komodo" className="text-sm md:text-base text-green-200 hover:text-white transition">Tentang Komodo</a></li>
                <li><a href="#galeri" className="text-sm md:text-base text-green-200 hover:text-white transition">Galeri</a></li>
                <li><a href="#" className="text-sm md:text-base text-green-200 hover:text-white transition">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4">Kontak Kami</h4>
              <div className="space-y-3 text-green-200">
                <p className="text-sm md:text-base">Instagram: menyapakomodo</p>
                <p className="text-sm md:text-base">Telp: 082322616464 (Hifdzan)</p>
                <p className="text-sm md:text-base">Lokasi: Kecamatan Komodo, NTT</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 text-center text-green-200">
            <p className="text-sm md:text-base">© 2026 Menyapa Komodo - KKN PPM UGM Periode II 2026</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;