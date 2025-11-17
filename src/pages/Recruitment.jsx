import React from 'react';
import { Download, ExternalLink, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingNav } from '../components/FloatingNav';

export default function Recruitment() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Beranda", link: "/" },
    { name: "Tentang Komodo", link: "/#tentang-komodo" },
    { name: "Galeri", link: "/#galeri" },
  ];

  const handleNavClick = (link) => {
    if (link.startsWith('/#')) {
      // Navigate to home and scroll to section
      navigate('/');
      setTimeout(() => {
        const sectionId = link.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to page
      navigate(link);
    }
  };

  return (
    <div 
        className="min-h-screen relative overflow-hidden"
        style={{
            backgroundImage: 'url(/images/frame.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#138b7d'
        }}
        >

      {/* Floating Nav */}
      <FloatingNav navItems={navItems} onNavClick={handleNavClick} />

      {/* Main Content - Add top padding to avoid navbar overlap */}
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">

              Open Recruitment 2026
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-white/80">
              KKN-PPM UGM Periode II - Kecamatan Komodo
            </p>
            <p className="text-base md:text-lg text-white mt-2">
              Pendaftaran dibuka hingga <span className="font-bold text-red-600">24 November 2025</span>
            </p>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <QrCode className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Scan QR Code untuk Daftar
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8 px-4">
                Scan QR code di bawah ini atau klik tombol untuk mengisi formulir pendaftaran
              </p>
              
              {/* QR Code Image */}
              <div className="flex justify-center mb-8">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-4 border-green-600">
                  <img 
                    src="/images/qr-oprec.png" 
                    alt="QR Code Pendaftaran"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                    onError={(e) => {
                      e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://forms.gle/your-form-link";
                    }}
                  />
                </div>
              </div>

              {/* Button Daftar */}
              <a
                href="https://forms.gle/your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white rounded-full font-semibold text-base md:text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Daftar Sekarang</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Guidebook Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center md:text-left">
                  Download Guidebook
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 text-center md:text-left">
                  Panduan lengkap untuk calon peserta KKN-PPM UGM Periode II 2026 di Kecamatan Komodo. 
                  Pelajari persyaratan, jadwal, dan informasi penting lainnya.
                </p>
                
                {/* Guidebook Preview */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="bg-white p-2 md:p-3 rounded-lg shadow">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 text-sm md:text-base break-words">Guidebook_Menyapa Komodo 2026</h3>
                        <p className="text-xs md:text-sm text-gray-600">PDF Document • 2.5 MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/files/GuidebookOprec.pdf"
                  download
                  className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl w-full md:w-auto justify-center"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Download Guidebook (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Durasi</h3>
              <p className="text-gray-600 text-sm md:text-base">Juni - Agustus 2026</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">(2 Bulan)</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Kuota</h3>
              <p className="text-gray-600 text-sm md:text-base">18/30 Mahasiswa</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Dari berbagai fakultas</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Persyaratan</h3>
              <p className="text-gray-600 text-sm md:text-base">Mahasiswa UGM</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Sudah selesai 96 SKS di 2026</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Timeline Pendaftaran</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Pendaftaran Online</h3>
                  <p className="text-gray-600 text-xs md:text-sm">19 Nov - 24 Nov 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Seleksi Berkas</h3>
                  <p className="text-gray-600 text-xs md:text-sm">26 Nov - 27 Nov 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Wawancara</h3>
                  <p className="text-gray-600 text-xs md:text-sm">30 Nov - 2 Des 20256</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  4
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">Pengumuman</h3>
                  <p className="text-gray-600 text-xs md:text-sm">6 Desember 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <p className="text-gray-600 mb-4 text-center text-sm md:text-base">Butuh bantuan? Hubungi kami:</p>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:menyapakomodo@ugm.ac.id" 
                className="text-green-600 hover:text-green-700 font-medium text-center break-all text-sm md:text-base"
              >
                instagram: @menyapakomodo
              </a>
              <a 
                href="https://wa.me/6282322616464" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-700 font-medium text-center text-sm md:text-base"
              >
                +62 823-2261-6464 (Hifdzan)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}