import Dokumentasi from "./components/Dokumentasi";
import Hero from "./components/Hero";
import Lokasi from "./components/Lokasi";
import Mitra from "./components/Mitra";
import Tentang from "./components/Tentang";

export default function Home(){
  return (
    <main className="bg-black text-white">
      <Hero />
      <Tentang />
      <Lokasi />
      <Dokumentasi />
      <Mitra />
    </main>
  );
}
