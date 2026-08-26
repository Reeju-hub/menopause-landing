"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CommunitySection() {
  // Footer se kitna upar push karna hai usko track karne ke liye state
  const [pushUp, setPushUp] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Page mein <footer /> element ko dhundho (Jo aapne Footer.jsx mein banaya hai)
      const footer = document.querySelector("footer");
      if (!footer) return;

      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      const distanceFromBottom = documentHeight - currentScroll;
      const footerHeight = footer.offsetHeight;

      // Agar footer screen par dikhne laga hai
      if (distanceFromBottom < footerHeight) {
        // Jitna footer dikh raha hai, button ko utna upar push kar do
        setPushUp(footerHeight - distanceFromBottom);
      } else {
        // Agar footer nahi dikh raha, toh button ko wapas normal bottom par le aao
        setPushUp(0);
      }
    };

    // Scroll aur window resize hone par position update karo
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Initial check (Page load hone ke thodi der baad)
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Community Section with Background Image */}
      <section className="relative w-full h-[520px] md:h-[500px] flex px-6 md:px-12 overflow-hidden bg-[#0A0A0A]">
        
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-[#050505]"></div>
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex justify-start md:justify-end items-start md:items-center pt-4 md:pt-0">
          <div className="w-full max-w-[420px] flex flex-col items-start md:items-end text-left md:text-right">
            
            <p className="text-[12px] md:text-[20px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2 md:mb-3">
              — STAY CONNECTED —
            </p>
            
            <h2 className="text-4xl md:text-[46px] font-serif font-bold text-white mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', sans-serif" }}>
              Join our community
            </h2>
            
            <ul className="text-white/90 text-[14px] md:text-[15px] mb-6 md:mb-8 flex flex-col gap-2 font-medium items-start md:items-end w-full">
              <li>• Subscriber-only invites to events</li>
              <li>• The newest science on midlife health</li>
              <li>• Real stories from real women</li>
            </ul>
            
            {/* WhatsApp Input Form Container */}
            <div className="flex items-stretch bg-white rounded-lg overflow-hidden w-full max-w-[380px] self-center md:self-end shadow-2xl">
              <div className="flex items-center justify-center pl-4 pr-3 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[22px] h-[22px] fill-[#25D366]">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Your Whatsapp Number" 
                className="bg-white flex-grow outline-none text-slate-800 placeholder-slate-500 py-3.5 px-1 text-[14px] font-medium"
              />
              <button 
                className="bg-[#045D56] text-white px-6 flex items-center justify-center hover:bg-[#034A44] active:bg-[#022D2A] transition-colors duration-200 cursor-pointer"
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
      {/* YAHAN CHANGES HUE HAIN (White Background & Compact Height) */}
      {/* ========================================= */}
      <div 
        className="fixed bottom-0 left-0 w-full px-6 pt-3 flex justify-center md:hidden z-[100] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]"
        style={{ 
          // Padding bottom 40px se 20px kar di hai taaki height compact rahe
          paddingBottom: "calc(20px + env(safe-area-inset-bottom))",
          transform: `translateY(-${pushUp}px)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <a 
          href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#004D40] text-white w-full max-w-[380px] py-3.5 rounded-full font-bold text-[15px] hover:bg-[#00332A] transition shadow-md text-center inline-block"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Book a discovery call
        </a>
      </div>
    </>
  );
}