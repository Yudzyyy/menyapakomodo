import React, { useState, useEffect } from 'react';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';
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

  const optimizeParams = "w_800,h_600,c_fill,q_auto:low,f_auto,dpr_auto/";
  
  const galleryProducts = [
    {
      title: "Porsenimodo",
      thumbnail: "https://res.cloudinary.com/dyumuffqi/image/upload/w_800,q_80,f_auto/v1763534919/foto1_h6si8q.webp",
      category: "Olahraga"
    },
    {
      title: "Lomba Balap Ketinting",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534918/foto2_aujy9n.webp",
      category: "Lingkungan"
    },
    {
      title: "Penyambutan TIM KKN",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534918/foto3_o0fwa4.webp",
      category: "Acara Resmi"
    },
    {
      title: "Pelatihan UMKM",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534919/foto4_z72uno.webp",
      category: "Edukasi"
    },  
    {
      title: "Penyuluhan",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534918/foto5_svzyyk.webp",
      category: "Edukasi"
    },
    {
      title: "Edukasi Energi",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534918/foto6_atntwi.webp",
      category: "Pendidikan"
    },
    {
      title: "Cek Kesehatan",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534919/foto7_gr2s2c.webp",
      category: "Sosial"
    },
    {
      title: "Porsenimodo",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534919/foto8_nhoj35.webp",
      category: "Olahraga"
    },
    {
      title: "Pelatihan Teknik Sipil Sederhana",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534919/foto9_rzvmej.webp",
      category: "Pendidikan"
    },
    {
      title: "Eksplor",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534920/foto10_vuz6l6.webp",
      category: "Pendidikan"
    },
    {
      title: "Gerakan Sikat Gigi",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534919/foto11_l08bkt.webp",
      category: "Kesehatan"
    },
    {
      title: "Gerakan Sikat Gigi SD",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534920/foto12_vy27uu.webp",
      category: "Edukasi"
    },
    {
      title: "Nutrisiku",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534920/foto13_rnxwmv.webp",
      category: "Kesehatan"
    },
    {
      title: "Penyuluhan Nutrisiku",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534920/foto14_ztew8z.webp",
      category: "Kesehatan"
    },
    {
      title: "Penutupan KKN",
      thumbnail: "https://res.cloudinary.com/dyumuffql/image/upload/v1763534920/foto15_pz1twi.webp",
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

          <img 
            src="/images/title.png" 
            alt="Menyapa Komodo" 
            className="w-full max-w-2xl md:max-w-4xl mx-auto mb-3 md:mb-4 drop-shadow-2xl"
          />
          
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
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600"
              >
                Peta Kecamatan Komodo
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2"
              >
                Kabupaten Manggarai Barat, Nusa Tenggara Timur
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/peta.jpg"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Peta Kecamatan Komodo"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.google.com/maps/place/Komodo,+West+Manggarai+Regency,+East+Nusa+Tenggara/@-8.5995398,118.9913931,250940m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2db458f63bbcbb1d:0x38d588e19e673c08!8m2!3d-8.4924682!4d119.8773103!16s%2Fg%2F120n34s3?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white bg-green-600 hover:bg-green-700 flex items-center gap-1 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Buka di Maps
                </CardItem>
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold"
                >
                  📍 Manggarai Barat
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-white leading-relaxed text-center">
                Kecamatan Komodo terletak di Kabupaten Manggarai Barat, Nusa Tenggara Timur, yang terkenal sebagai 
                habitat asli hewan purba Komodo. Wilayah ini memiliki keindahan alam yang luar biasa dengan 
                pantai-pantai eksotis dan keanekaragaman hayati yang kaya.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed text-center">
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
                  <p className="text-sm md:text-base text-gray-600">TBA</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mx-auto mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">Program</h3>
                  <p className="text-sm md:text-base text-gray-600">TBA</p>
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
                <p className="text-sm md:text-base">Email: menyapakomodo26@gmail.com</p>
                <p className="text-sm md:text-base">Telp: 082322616464 (Hifdzan) & 0811-1840-533 (Marcha)
                </p>
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