"use client";

import { useState } from "react";

export default function Navbar() {
  // Mobile menu open/close track karne ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // YAHAN FIX KIYA: bg-[#FDF4E7] ki jagah bg-white kar diya
    <nav className="w-full bg-white py-4 md:py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md relative">
      
      {/* Left Side: Logo */}
      <div className="flex-shrink-0">
        
        {/* Desktop Logo (Hidden on Mobile) */}
        <div className="hidden md:block">
          {/* NATIVE IMG TAG FOR 100% ORIGINAL QUALITY */}
          <img
            src="/logo.svg" 
            alt="MenoEssence Logo Desktop" 
            className="h-10 w-auto object-contain"
          />
        </div>
        
        {/* Mobile Logo (Hidden on Desktop) */}
        <div className="block md:hidden">
          {/* NATIVE IMG TAG FOR 100% ORIGINAL QUALITY */}
          <img
            src="/logo-mobile.svg" 
            alt="MenoEssence Logo Mobile" 
            className="w-[220px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Middle: Desktop Links (Hidden on Mobile) */}
      <div 
        className="hidden md:flex items-center gap-8 text-slate-800 font-semibold text-[15px]"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        <a href="#" className="hover:text-[#D9185F] transition">Why MenoEssence</a>
        <a href="#" className="hover:text-[#D9185F] transition">How we help</a>
        <a href="#" className="hover:text-[#D9185F] transition">Team</a>
        <a href="#" className="hover:text-[#D9185F] transition">Journey</a>
        <a href="#" className="hover:text-[#D9185F] transition">FAQs</a>
      </div>

      {/* Right Side: Button (Desktop) & Hamburger (Mobile) */}
      <div className="flex items-center">
        
        {/* Desktop Button (WhatsApp Link) */}
        <a 
          href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#004D40] text-white px-6 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#00332A] transition shadow-sm text-center"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Book a discovery call
        </a>

        {/* Mobile Hamburger Menu Icon (Hidden on Desktop) */}
        <button 
          className="block md:hidden p-2 text-[#045D56]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            /* Close (X) Icon when menu is open */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Three Bars (Hamburger) Icon when menu is closed */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* ========================================= */}
      {/* MOBILE DROPDOWN MENU */}
      {/* ========================================= */}
      {isMobileMenuOpen && (
        // YAHAN FIX KIYA: Mobile menu ko bhi bg-white diya aur border halka gray kiya (border-gray-100)
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden border-t border-gray-100">
          <a href="#" className="text-slate-800 font-semibold text-[16px] hover:text-[#D9185F] transition" style={{ fontFamily: "'Quicksand', sans-serif" }}>Why MenoEssence</a>
          <a href="#" className="text-slate-800 font-semibold text-[16px] hover:text-[#D9185F] transition" style={{ fontFamily: "'Quicksand', sans-serif" }}>How we help</a>
          <a href="#" className="text-slate-800 font-semibold text-[16px] hover:text-[#D9185F] transition" style={{ fontFamily: "'Quicksand', sans-serif" }}>Team</a>
          <a href="#" className="text-slate-800 font-semibold text-[16px] hover:text-[#D9185F] transition" style={{ fontFamily: "'Quicksand', sans-serif" }}>Journey</a>
          <a href="#" className="text-slate-800 font-semibold text-[16px] hover:text-[#D9185F] transition" style={{ fontFamily: "'Quicksand', sans-serif" }}>FAQs</a>
          
          {/* CTA Button in Mobile Menu (WhatsApp Link) */}
          <a 
            href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004D40] text-white px-8 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#00332A] transition shadow-sm mt-2 text-center"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Book a discovery call
          </a>
        </div>
      )}
    </nav>
  );
}