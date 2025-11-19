import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { PinContainer } from '../components/ui/3d-pin';
import { useNavigate } from 'react-router-dom';
import { FloatingNav } from '../components/FloatingNav';
import { ContainerScroll } from '../components/ui/container-scroll-animation';

export default function Recruitment() {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);

  const navItems = [
    { name: "Beranda", link: "/" },
    { name: "Tentang Komodo", link: "/#tentang-komodo" },
    { name: "Galeri", link: "/#galeri" },
  ];

  const handleNavClick = (link) => {
    if (link.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const sectionId = link.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
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
        backgroundColor: '#138b7d',
      }}
    >
      <FloatingNav navItems={navItems} onNavClick={handleNavClick} />

      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">

          {/* TITLE */}
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

          {/* GUIDEBOOK */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">

              {/* Icon */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center md:text-left">
                  Guidebook Pendaftaran
                </h2>

                <p className="text-sm md:text-base text-gray-600 mb-6 text-center md:text-left">
                  Panduan lengkap untuk calon peserta KKN-PPM UGM Periode II 2026 di Kecamatan Komodo.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 mb-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-white p-2 md:p-3 rounded-lg shadow">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base break-words">
                        Guidebook_Menyapa Komodo 2026
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">PDF Document • 2.5 MB</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={() => setShowPdf(!showPdf)}
                    className="inline-flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>{showPdf ? 'Tutup Preview' : 'Lihat Guidebook'}</span>
                  </button>

                  <a
                    href="/files/GuidebookOprec.pdf"
                    download
                    className="inline-flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                {/* PDF Preview */}
                {showPdf && (
                  <div className="w-full border-4 border-blue-500 rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src={`https://docs.google.com/gview?embedded=true&url=https://menyapakomodo.vercel.app/files/GuidebookOprec.pdf`}
                      className="w-full h-[500px] md:h-[700px]"
                      title="Guidebook PDF"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
                    {/* QR CODE */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                Form Pendaftaran
              </h3>

              <p className="text-sm md  :text-base text-gray-600 mb-6">
                Scan atau Klik untuk mendaftar
              </p>

              <div
                className="flex justify-center pt-8 pb-12 md:pt-12 md:pb-16"
                style={{ minHeight: '450px' }}
              >
                <PinContainer
                  title="Daftar Sekarang"
                  href="https://forms.gle/6hFtJtBp1C5ZzTvr8"
                >
                  <div className="flex flex-col p-4 md:p-6 tracking-tight w-[16rem] h-[19rem] sm:w-[18rem] sm:h-[20rem] md:w-[20rem] md:h-[22rem]">
                    <h3 className="pb-2 font-bold text-lg text-gray-800 text-center">
                      Scan QR Code
                    </h3>

                    <div className="text-sm mb-4 text-center text-gray-600">
                      Klik untuk ke form
                    </div>

                    <div className="flex flex-1 w-full rounded-xl bg-white p-2 md:p-4 items-center justify-center">
                      <img
                        src="/images/qrcode.png"
                        alt="QR Code Pendaftaran"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src =
                            "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://forms.gle/6hFtJtBp1C5ZzTvr8";
                        }}
                      />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          </div>

          {/* SURAT KKN */}
          {/* SURAT KKN dengan Container Scroll - TAMBAH INI */}
          <div className="mb-8">
            <ContainerScroll
              titleComponent={
                <div className="mb-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    Surat Izin Orang Tua KKN 2026
                  </h2>
                  <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Surat resmi izin orang tua untuk calon peserta KKN-PPM UGM Menyapa Komodo Periode II 2026 di Kecamatan Komodo
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    
                    <a  href="https://docs.google.com/document/d/1wNKUyqt26rcWrNKpK9LcPlJxjLIbBN1I/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white text-green-700 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Buka di Google Docs</span>
                    </a>
                    
                    
                    <a  href="https://docs.google.com/document/d/1wNKUyqt26rcWrNKpK9LcPlJxjLIbBN1I/export?format=pdf"
                      download
                      className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white rounded-full font-semibold text-sm md:text-lg hover:bg-green-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <Download className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              }
            >
              {/* Screenshot Surat - Clickable */}
              <a 
                href="https://docs.google.com/document/d/1wNKUyqt26rcWrNKpK9LcPlJxjLIbBN1I/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer group"
              >
                <img
                  src="/images/suratortu.png"
                  alt="Surat Pengantar KKN"
                  className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-6 py-3 rounded-full shadow-xl">
                    <p className="text-green-700 font-semibold flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Klik untuk Membuka</span>
                    </p>
                  </div>
                </div>
              </a>
            </ContainerScroll>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">

            {/* Durasi */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full mb-3 md:mb-4">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Durasi</h3>
              <p className="text-gray-600 text-sm md:text-base">Juni - Agustus 2026</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">(2 Bulan)</p>
            </div>

            {/* Kuota */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full mb-3 md:mb-4">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Kuota</h3>
              <p className="text-gray-600 text-sm md:text-base">TBA</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Dari berbagai fakultas</p>
            </div>

            {/* Persyaratan */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full mb-3 md:mb-4">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Persyaratan</h3>
              <p className="text-gray-600 text-sm md:text-base">Mahasiswa UGM</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Minimal 96 SKS di 2026</p>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
              Timeline Pendaftaran
            </h2>

            <div className="space-y-4">
              {[
                ["Pendaftaran Online", "20 Nov - 24 Nov 2025"],
                ["Seleksi Berkas", "26 Nov - 27 Nov 2025"],
                ["Wawancara", "30 Nov - 2 Des 2025"],
                ["Pengumuman", "6 Desember 2025"],
              ].map(([title, date], i) => (
                <div key={i} className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">{title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
