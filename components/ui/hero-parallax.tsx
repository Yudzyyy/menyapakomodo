"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-150, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] md:h-[350vh] py-20 md:py-40 pb-40 md:pb-80 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
      >
        {/* Baris 1 */}
        <motion.div className="flex flex-row-reverse flex-nowrap gap-10 md:gap-20 mb-10 md:mb-20">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={`first-${index}`} />
          ))}
        </motion.div>

        {/* Baris 2 */}
        <motion.div className="flex flex-row flex-nowrap gap-10 md:gap-20 mb-10 md:mb-20">
          {secondRow.map((product, index) => (
            <ProductCard product={product} translate={translateXReverse} key={`second-${index}`} />
          ))}
        </motion.div>

        {/* Baris 3 */}
        <motion.div className="flex flex-row-reverse flex-nowrap gap-10 md:gap-20 mb-10 md:mb-20">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={`third-${index}`} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-bold text-emerald-900">
        Dokumentasi <br /> TIM KKN Menyapa Komodo <br /> Tahun 2024 & 2025
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-emerald-800">
        Momen berharga selama kegiatan pengabdian masyarakat di Kecamatan
        Komodo. Kami membangun dengan hati untuk masyarakat.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: any;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      // ✅ tambah min-w agar foto tidak di-compress flex container
      className="group/product h-48 w-[15rem] min-w-[15rem] md:h-96 md:w-[30rem] md:min-w-[30rem] relative shrink-0 rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-md"
    >
      <Link href={product.link} className="block h-full w-full group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xs md:text-base font-medium transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};