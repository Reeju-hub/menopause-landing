"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  // Sirf external links (WhatsApp) ke liye menu band karne ka function
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
  };

  // 🚀 CUSTOM PREMIUM SMOOTH SCROLL FUNCTION 🚀
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Browser ka default jhatke wala jump rokne ke liye
    setIsMobileMenuOpen(false); 
    setIsDesktopMenuOpen(false);

    let targetPosition = 0;

    // Agar top pe jana hai (Logo click)
    if (targetId !== "top") {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      // 110px offset taaki navbar aapki heading ko hide na kare
      targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 110; 
    }

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    // 👇 YAHAN SE AAP SPEED SET KAR SAKTE HAIN (1200 = 1.2 seconds)
    const duration = 3000; 
    let start = null;

    // Premium Easing Function (Slow start -> Fast mid -> Slow end)
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="w-full bg-white py-4 md:py-3 px-6 md:px-[100px] sticky top-0 z-[999] shadow-sm relative">
      
      <div className="max-w-[1560px] mx-auto w-full flex justify-between items-center">
        
        {/* Left Side: Logo (Click karne par page ke top par glide karega) */}
        <a href="#" onClick={(e) => handleSmoothScroll(e, "top")} className="flex-shrink-0 cursor-pointer">
          <div className="hidden md:block">
            <img src="/logo.svg" alt="MenoEssence Logo Desktop" className="h-[85px] w-auto object-contain -my-5" />
          </div>
          <div className="block md:hidden">
            <img src="/logo-mobile.svg" alt="MenoEssence Logo Mobile" className="w-[220px] h-auto object-contain" />
          </div>
        </a>

        {/* Middle: Desktop Links & Desktop Hamburger */}
        <div 
          className="hidden md:flex items-center gap-10 text-slate-800 font-bold text-[20px]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {/* YAHAN FIX KIYA: Custom scroll handle add kiya */}
          <a href="#why-menoessence" onClick={(e) => handleSmoothScroll(e, "why-menoessence")} className="hover:text-[#D9185F] transition lowercase cursor-pointer">why menoessence</a>
          <a href="#how-we-help" onClick={(e) => handleSmoothScroll(e, "how-we-help")} className="hover:text-[#D9185F] transition lowercase cursor-pointer">how we help</a>
          <a href="#integrated-care" onClick={(e) => handleSmoothScroll(e, "integrated-care")} className="hover:text-[#D9185F] transition lowercase cursor-pointer">integrated care</a>
          <a href="#faqs" onClick={(e) => handleSmoothScroll(e, "faqs")} className="hover:text-[#D9185F] transition lowercase cursor-pointer">faqs</a>

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
                <a href="#when-we-help" onClick={(e) => handleSmoothScroll(e, "when-we-help")} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">when we can help</a>
                <a href="#team" onClick={(e) => handleSmoothScroll(e, "team")} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">team</a>
                <a href="#journey" onClick={(e) => handleSmoothScroll(e, "journey")} className="px-6 py-2.5 hover:text-[#D9185F] hover:bg-gray-50 transition lowercase cursor-pointer">journey</a>
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
          <a href="#why-menoessence" onClick={(e) => handleSmoothScroll(e, "why-menoessence")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>why menoessence</a>
          <a href="#when-we-help" onClick={(e) => handleSmoothScroll(e, "when-we-help")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>when we can help</a>
          <a href="#how-we-help" onClick={(e) => handleSmoothScroll(e, "how-we-help")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>how we help</a>
          <a href="#integrated-care" onClick={(e) => handleSmoothScroll(e, "integrated-care")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>integrated care</a>
          <a href="#team" onClick={(e) => handleSmoothScroll(e, "team")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>team</a>
          <a href="#journey" onClick={(e) => handleSmoothScroll(e, "journey")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>journey</a>
          <a href="#faqs" onClick={(e) => handleSmoothScroll(e, "faqs")} className="text-slate-800 font-bold text-[16px] hover:text-[#D9185F] transition lowercase cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>faqs</a>
          
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