"use client";

import { useState } from "react";

export default function StagesSection() {
  // Mobile cards default to closed (false)
  const [mobileState, setMobileState] = useState({
    perimenopause: false,
    menopause: false,
  });

  // Desktop cards default to open (true)
  const [desktopState, setDesktopState] = useState({
    perimenopause: true,
    menopause: true,
  });

  // Toggle functions
  const toggleMobile = (stage) => {
    setMobileState((prev) => ({ ...prev, [stage]: !prev[stage] }));
  };

  const toggleDesktop = (stage) => {
    setDesktopState((prev) => ({ ...prev, [stage]: !prev[stage] }));
  };

  return (
    // YAHAN FIX KIYA HAI: id="when-we-help" add kiya gaya hai
    <section id="when-we-help" className="bg-white md:bg-[#FAF8F5] pt-[140px] md:pt-20 pb-20 px-6 md:px-[100px] flex flex-col items-center relative z-10">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&display=swap');
      `}} />

      {/* YAHAN FIX KIYA HAI: max-w-5xl ko max-w-[1560px] mx-auto kiya taaki left/right alignment baaki sections se match kare */}
      <div className="w-full max-w-[1560px] mx-auto">
        
        {/* Section Subtitle */}
        <p
          className="text-[20px] md:text-[22px] font-bold tracking-[0.2em] text-[#0B306F] uppercase mb-3 text-center md:text-left"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          — WHEN WE CAN HELP —
        </p>

        {/* Section Heading */}
        <h2 className="text-[36px] md:text-[52px] font-bold text-slate-900 mb-12 text-center md:text-left" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Life Stages
        </h2>

        {/* ========================================= */}
        {/* MOBILE VIEW (Shows only on mobile screens) */}
        {/* ========================================= */}
        <div className="flex md:hidden flex-col gap-5 w-full">
          
          {/* Mobile Card 1: Perimenopause */}
          <div 
            // EXACT COLOR AND PILL SHAPE APPLIED HERE
            className="bg-[#FFF1DD] rounded-[40px] py-2.5 pl-3 pr-5 flex flex-col gap-2 cursor-pointer transition-all"
            onClick={() => toggleMobile('perimenopause')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/icon-perimenopause.svg" alt="Perimenopause Icon" className="w-12 h-12 object-contain" />
                <h3 className="text-slate-900 font-bold text-[20px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Perimenopause</h3>
              </div>
              
              {/* Thin plus/minus icon matching the image */}
              <div className="w-[34px] h-[34px] shrink-0 rounded-full border-[1.5px] border-[#004d40] text-[#004d40] flex items-center justify-center transition-colors">
                {mobileState.perimenopause ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12H6"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m6-6H6"></path>
                  </svg>
                )}
              </div>
            </div>
            
            {mobileState.perimenopause && (
              <div className="px-3 pb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-slate-950 text-[20px] leading-relaxed font-medium border-t border-[#E8D9C5] pt-3">
                  Perimenopause can begin years before periods stop, and its symptoms are often subtle, confusing, and overlooked. We help you identify your stage, whats coming up and how to navigate with confidence.
                </p>
              </div>
            )}
          </div>

          {/* Mobile Card 2: Menopause */}
          <div 
            // EXACT COLOR AND PILL SHAPE APPLIED HERE
            className="bg-[#FFF1DD] rounded-[40px] py-2.5 pl-3 pr-5 flex flex-col gap-2 cursor-pointer transition-all"
            onClick={() => toggleMobile('menopause')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/icon-menopause.svg" alt="Menopause Icon" className="w-12 h-12 object-contain" />
                <h3 className="text-slate-900 font-bold text-[20px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Menopause</h3>
              </div>
              
              {/* Thin plus/minus icon matching the image */}
              <div className="w-[34px] h-[34px] shrink-0 rounded-full border-[1.5px] border-[#004d40] text-[#004d40] flex items-center justify-center transition-colors">
                {mobileState.menopause ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12H6"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m6-6H6"></path>
                  </svg>
                )}
              </div>
            </div>
            
            {mobileState.menopause && (
              <div className="px-3 pb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-slate-950 text-[20px] leading-relaxed font-medium border-t border-[#E8D9C5] pt-3">
                  Menopause marks a significant life transition, not simply the end of periods. We help you with symptom management, long-term health considerations, and practical strategies to help you feel well and informed at every stage.
                </p>
              </div>
            )}
          </div>

        </div>


        {/* ========================================= */}
        {/* DESKTOP VIEW (Shows only on md and larger)  */}
        {/* ========================================= */}
        {/* YAHAN FIX KIYA HAI: md:gap-[60px] lagaya taaki boxes ke beech ka gap perfect rahe */}
        <div className="hidden md:grid grid-cols-2 gap-8 md:gap-[60px] items-start">
          
          {/* Desktop Card 1: Perimenopause */}
          <div 
            className="bg-[#FFF1DD] rounded-3xl p-8 flex flex-col cursor-pointer transition-all"
            onClick={() => toggleDesktop('perimenopause')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/icon-perimenopause.svg" alt="Perimenopause Icon" className="w-9 h-9 object-contain" />
                <h3 className="text-slate-900 font-bold text-[24px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Perimenopause</h3>
              </div>
              
              <div className="w-7 h-7 rounded-full border-[1.5px] border-[#004d40] text-[#004d40] flex items-center justify-center hover:bg-[#004d40] hover:text-white transition-colors shrink-0">
                {desktopState.perimenopause ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}
              </div>
            </div>
            
            {desktopState.perimenopause && (
              <p className="text-slate-950 text-[22px] leading-relaxed font-bold mt-6 transition-all border-t border-[#E8D9C5] pt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Perimenopause can begin years before periods stop, and its symptoms are often subtle, confusing, and overlooked. We help you identify your stage, whats coming up and how to navigate with confidence.
              </p>
            )}
          </div>

          {/* Desktop Card 2: Menopause */}
          <div 
            className="bg-[#FFF1DD] rounded-3xl p-8 flex flex-col cursor-pointer transition-all"
            onClick={() => toggleDesktop('menopause')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/icon-menopause.svg" alt="Menopause Icon" className="w-9 h-9 object-contain" />
                <h3 className="text-slate-900 font-bold text-[24px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Menopause</h3>
              </div>

              <div className="w-7 h-7 rounded-full border-[1.5px] border-[#004d40] text-[#004d40] flex items-center justify-center hover:bg-[#004d40] hover:text-white transition-colors shrink-0">
                {desktopState.menopause ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}
              </div>
            </div>

            {desktopState.menopause && (
              <p className="text-slate-950 text-[22px] leading-relaxed font-bold mt-6 transition-all border-t border-[#E8D9C5] pt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Menopause marks a significant life transition, not simply the end of periods. We help you with symptom management, long-term health considerations, and practical strategies to help you feel well and informed at every stage.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}