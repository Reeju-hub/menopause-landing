"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  // Menu band karne ka function
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
  };

  return (
    // YAHAN FIX KIYA: md:py-5 ko md:py-3 kar diya taaki upar-neeche ka extra gap kam ho
    <nav className="w-full bg-white py-4 md:py-3 px-6 md:px-[100px] sticky top-0 z-[999] shadow-sm relative">
      
      <div className="max-w-[1560px] mx-auto w-full flex justify-between items-center">
        
        {/* Left Side: Logo (Click karne par page ke top par jayega) */}
        <a href="#" className="flex-shrink-0 cursor-pointer">
          <div className="hidden md:block">
            {/* YAHAN FIX KIYA: -my-5 (negative margin) lagaya hai. 
                Isse logo bahar ki taraf fail jayega par Navbar ki total height nahi badhayega! */}
            <img src="/logo.svg" alt="MenoEssence Logo Desktop" className="h-[85px] w-auto object-contain -my-5" />
          </div>
          <div className="block md:hidden">
            <img src="/logo-mobile.svg" alt="MenoEssence Logo Mobile" className="w-[220px] h-auto object-contain" />
          </div>
        </a>

        {/* Middle: Desktop Links & Desktop Hamburger */}
        <div 
          className="hidden md:flex items-center gap-10 text-slate-800 font-bold text-[16px]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <a href="#why-menoessence" onClick={handleLinkClick} className="hover:text-[#D9185F] transition lowercase cursor-pointer">why menoessence</a>
          <a href="#how-we-help" onClick={handleLinkClick} className="hover:text-[#D9185F] transition lowercase cursor-pointer">how we help</a>
          <a href="#integrated-care" onClick={handleLinkClick} className="hover:text-[#D9185F] transition lowercase cursor-pointer">integrated care</a>
          <a href="#faqs" onClick={handleLinkClick} className="hover:text-[#D9185F] transition lowercase cursor-pointer">faqs</a>

          <div className="relative flex items-center">
            <button 
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              className="hover:text-[#D9185F] transition p-1 cursor-pointer z-50 relative"
              aria-label="More links"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {isDesktopMenuOpen && (
              <div className="absolute top-[160%] right-0 w-[200px] bg-white shadow-xl rounded-xl py-4 flex flex-col border border-gray-100 transition-all z-[999]">
                <a href="#when-we-help" onClick={handleLinkClick} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">when we can help</a>
                <a href="#team" onClick={handleLinkClick} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">team</a>
                <a href="#journey" onClick={handleLinkClick} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">journey</a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center">
          <a 
            href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="hidden md:inline-block bg-[#ffb627] text-[#323232] px-7 py-3 rounded-[16px] font-bold text-[18px] hover:bg-[#ffaa00] transition shadow-sm text-center cursor-pointer"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book a Discovery Call
          </a>

          <button 
            className="block md:hidden p-2 text-[#045D56] cursor-pointer relative z-50" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden border-t border-gray-100 z-[999]">
          <a href="#why-menoessence" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>why menoessence</a>
          <a href="#when-we-help" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>when we can help</a>
          <a href="#how-we-help" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>how we help</a>
          <a href="#integrated-care" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>integrated care</a>
          <a href="#team" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>team</a>
          <a href="#journey" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>journey</a>
          <a href="#faqs" onClick={handleLinkClick} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>faqs</a>
          
          <a 
            href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="bg-[#FFB627] text-[#323232] px-8 py-2.5 rounded-[16px] font-bold text-[18px] hover:bg-[#ffaa00] transition shadow-sm mt-2 text-center cursor-pointer"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book a Discovery Call
          </a>
        </div>
      )}
    </nav>
  );
}