"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CommunitySection() {
  const sectionRef = useRef(null);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !buttonContainerRef.current) return;

      // Section ka bottom screen par kahan hai, yeh nikalenge
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Agar is section ka bottom screen ke bottom ko touch kar le (yaani footer aane wala hai)
      if (rect.bottom <= viewportHeight) {
        // Button ko screen se chhod kar section ke bottom par permanently lock kar do
        buttonContainerRef.current.style.position = 'absolute';
      } else {
        // Warna button ko screen ke bottom par chipka kar rakho (Fixed)
        buttonContainerRef.current.style.position = 'fixed';
      }
    };

    // { passive: true } se scrolling frame-rate maximum rehti hai
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Page load hone par position set karna
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    // NAYA FIX: Poore component ko ek <div className="relative w-full"> mein wrap kiya hai
    <div className="relative w-full" ref={sectionRef}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&display=swap');
      `}} />

      {/* Community Section with Background Image */}
      <section className="relative w-full h-[700px] md:h-[500px] flex px-6 md:px-12 overflow-hidden bg-[#0A0A0A]">
        
        {/* Background Image Area */}
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image 
              src="/community-woman.png" 
              alt="Community Background Desktop" 
              fill 
              quality={100}
              unoptimized
              className="object-cover object-[left_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-[#2a2727]"></div>
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image 
              src="/community-woman-mweb.png" 
              alt="Community Background Mobile" 
              fill 
              quality={100}
              unoptimized
              className="object-cover object-bottom"
            />
           <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/30 to-transparent"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex justify-start md:justify-end items-start md:items-center pt-[60px] md:pt-0">
          <div className="w-full max-w-[420px] flex flex-col items-start md:items-end text-left md:text-right">
            
            <p className="text-[12px] md:text-[20px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2 md:mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              — STAY CONNECTED —
            </p>
            
            <h2 className="text-4xl md:text-[46px] font-serif font-bold text-white mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Join our community
            </h2>
            
            <ul className="text-white/90 text-[14px] md:text-[15px] mb-6 md:mb-8 flex flex-col gap-2 font-medium items-start md:items-end w-full" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <li>• Subscriber-only invites to events</li>
              <li>• The newest science on midlife health</li>
              <li>• Real stories from real women</li>
            </ul>
            
            {/* WhatsApp Input Form Container */}
            <div className="flex items-stretch bg-white rounded-lg overflow-hidden w-full max-w-[380px] self-center md:self-end shadow-2xl">
              <div className="flex items-center justify-center pl-4 pr-3 bg-white">
              <svg 
  xmlns="http://w3.org" 
  viewBox="0 0 620 620" 
  className="w-[26px] h-[26px]"
>
  {/* Green background ko bada kar diya aur corners perfectly round hain */}
  <rect width="620" height="620" rx="140" fill="#25D366" />
  
  {/* White logo ka size vahi hai, ise bas naye bade box ke center me shift kiya hai */}
  <path 
    fill="#FFFFFF" 
    transform="translate(86, 68)"
    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  />
</svg>


              </div>
              <input 
                type="text" 
                placeholder="Your Whatsapp Number" 
                className="bg-white flex-grow outline-none text-[#323232] placeholder-slate-500 py-3.5 px-1 text-[14px] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              />
              <button 
                className="bg-[#FFB627] text-[#323232] px-6 flex items-center justify-center hover:bg-[#ffa200] active:bg-[#022D2A] transition-colors duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="block md:hidden h-[100px] w-full bg-[#0A0A0A]"></div>

      {/* ========================================= */}
      {/* FLOATING MOBILE BOTTOM BUTTON (100% NATIVE SMOOTH) */}
      {/* ========================================= */}
      <div 
        ref={buttonContainerRef} 
        className="fixed bottom-0 left-0 w-full px-6 pt-3 flex justify-center md:hidden z-[100] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]"
        style={{ 
          paddingBottom: "calc(20px + env(safe-area-inset-bottom))",
          // JS se translateY wala sara jhanjhat hata diya hai
        }}
      >
        <a 
          href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFB627] text-[#323232] w-full max-w-[380px] py-3.5 rounded-full font-bold text-[15px] hover:bg-[#ffa200] transition shadow-md text-center inline-block"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Book a discovery call
        </a>
      </div>
    </div>
  );
}