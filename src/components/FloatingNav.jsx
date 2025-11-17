import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export const FloatingNav = ({ navItems, className, onNavClick }) => {
  const location = useLocation();
  const isRecruitmentPage = location.pathname === '/recruitment';

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex max-w-fit fixed top-4 md:top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-white/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 md:pr-2 md:pl-8 py-2 items-center justify-center space-x-2 md:space-x-4",
        className
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        {navItems.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={() => onNavClick(navItem.link)}
            className="relative items-center flex space-x-1 text-gray-700 hover:text-green-600 transition-colors"
          >
            <span className="text-sm font-medium">{navItem.name}</span>
          </button>
        ))}
      </div>
      
      {/* Mobile Menu */}
      <div className="flex md:hidden items-center space-x-2">
        {navItems.slice(0, 3).map((navItem, idx) => (
          <button
            key={`mobile-link=${idx}`}
            onClick={() => onNavClick(navItem.link)}
            className="text-xs font-medium text-gray-700 hover:text-green-600 transition-colors px-2"
          >
            {navItem.name}
          </button>
        ))}
      </div>

      {/* Conditional Button */}
      {!isRecruitmentPage ? (
        <Link 
          to="/recruitment"
          className="border text-xs md:text-sm font-medium relative border-green-200 bg-green-600 text-white px-3 md:px-4 py-2 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap"
        >
          <span className="hidden md:inline">Open Recruitment 2026</span>
          <span className="md:hidden">Daftar</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#138b7d] to-transparent h-px" />
        </Link>
      ) : (
        <Link 
          to="/"
          className="border text-xs md:text-sm font-medium relative border-gray-200 bg-gray-600 text-white px-3 md:px-4 py-2 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap"
        >
          <span className="hidden md:inline">Kembali ke Beranda</span>
          <span className="md:hidden">Home</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-gray-400 to-transparent h-px" />
        </Link>
      )}
    </motion.div>
  );
};