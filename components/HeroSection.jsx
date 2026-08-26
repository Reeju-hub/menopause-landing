"use client";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const slides = [
    {
      text: "MenoEssence is founded by women, for women."
    },
    {
      text: "We help you understand your changing body and plan for the next decade. So you can navigate midlife with clarity, confidence, and support."
    },
    {
      text: "Because this phase deserves more than reassurance. It deserves understanding and expert care tailored to you."
    },
    {
      text: "Empower yourself with knowledge and proactive health strategies so you can thrive during and beyond midlife."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // --- AUTO-SCROLL LOGIC ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // --- SCROLL ANIMATION LOGIC ---
  const [isBgVisible, setIsBgVisible] = useState(false);
  const [bounceKey, setBounceKey] = useState(0); 
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsBgVisible(true); 
          setBounceKey(prev => prev + 1); // Naya pop-up bounce chalayega
        } else {
          setIsBgVisible(false); // Jaise hi scroll away karenge, reset ho jayega
        }
      },
      { 
        // YAHAN FIX KIYA HAI: Threshold ko 0.4 kiya hai. 
        // Ab thoda sa bhi scroll karne par yeh hide ho jayega aur wapas aane par harr baar pop hoga.
        threshold: 0.4, 
        rootMargin: "0px 0px 0px 0px" 
      } 
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => {
      if (bgRef.current) observer.unobserve(bgRef.current);
    };
  }, []);

  return (
    <section className="bg-[#FAF8F5] flex flex-col items-center pt-4 md:pt-16 px-0 text-center relative overflow-hidden pb-10">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap');
        
        .force-caveat { font-family: 'Caveat', cursive !important; }
        .force-playfair { font-family: 'Playfair Display', serif !important; }
        .force-quicksand { font-family: 'Quicksand', sans-serif !important; }
        
        /* SLOW SPIN FOR FLOWERS */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        /* BOUNCY POP-UP EFFECT ON SCROLL */
        @keyframes popup-bg {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popup-bg {
          animation: popup-bg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* FADE IN FOR SMOOTH TEXT CHANGE */
        @keyframes fadeIn {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in forwards;
        }
      `}} />

      {/* --- DESKTOP Top Text & Button --- */}
      <div className="hidden md:flex relative z-30 flex-col items-center px-4 md:px-6">
         <p className="force-quicksand text-[12px] font-bold tracking-[0.2em] text-[#1D3557] uppercase mb-2">
            — WOMEN'S MIDLIFE HEALTH —
          </p>

         <h1 className="force-playfair text-[52px] font-bold text-slate-900 leading-[1.15]">
            <span className="font-bold">Your midlife health: </span>
            <span className="force-playfair text-[#E01D91] italic font-bold">
              Reimagined.
            </span>
          </h1>
          <br />
        <a 
          href="https://wa.me/919008934945?text=Hi%20MenoEssence,%20I%20would%20like%20to%20book%20a%20discovery%20call!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#004D40] text-white px-8 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#00332A] transition shadow-sm text-center"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Book a discovery call
        </a>
      </div>

      {/* --- DESKTOP VIEW IMAGE --- */}
      <div className="hidden md:flex flex-col items-center w-full relative mt-2">
        <div className="relative flex justify-center items-center w-full">
          <img
            src="/full-hero-section.png"
            alt="Hero Section"
            className="w-full max-w-none h-auto object-cover pointer-events-none"
          />
        </div>
      </div>

      {/* --- EXACT MOBILE VIEW --- */}
      <div className="flex flex-col md:hidden w-full max-w-[600px] mx-auto relative z-20 mt-1 px-0">
        
        {/* Mobile Header Text */}
        <div className="flex flex-col items-center text-center px-4 mb-1">
          <p className="force-quicksand text-[12px] font-bold tracking-[0.2em] text-[#1D3557] uppercase mb-2">
            — WOMEN'S MIDLIFE HEALTH —
          </p>
          
          <h1 className="force-playfair text-[36px] font-bold text-slate-900 leading-[1.15]">
            <span className="font-bold">Your midlife health:</span><br />
            <span className="force-playfair text-[#E01D91] italic font-bold">
              Reimagined.
            </span>
          </h1>
        </div>

        {/* Mobile Hero Image */}
        <div className="w-full flex justify-center relative z-10 translate-y-75 mb-6 -mt-75">
          <img
            src="/hero-mobile.png"
            alt="Menopause Care Mobile"
            className="w-full max-w-[600px] object-cover"
          />
        </div>
        
        {/* ============================================== */}
        {/* Background Image Container */}
        {/* ============================================== */}
        
        <div ref={bgRef} className="w-full relative z-35 -mt-[25%] aspect-[6/5]">
          
          <div 
            key={`bounce-${bounceKey}`} 
            className={`w-full h-full bg-no-repeat bg-center ${isBgVisible ? 'animate-popup-bg' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url('/gradient-bg.png')`, 
              backgroundSize: '100% 100%'
            }}
          ></div>

        </div>

        {/* Separate Solid Deep Pink Box */}
       <div className="bg-[#9E0059] text-white py-9 px-6 text-center translate-y-7.5 shadow-lg w-[calc(100%-2rem)] mx-auto rounded-b-[36px] -mt-8 relative z-40">
          
          <h3 className="mb-2.5 flex justify-center items-center gap-3 tracking-wide">
            <img src="/flower.png" alt="flower" className="w-6 h-6 object-contain animate-spin-slow" />
            
            <span className="force-caveat font-bold tracking-wide text-[40px]">
              You're not alone
            </span>
            
            <img src="/flower.png" alt="flower" className="w-6 h-6 object-contain animate-spin-slow" />
          </h3>

          <p 
            key={activeIndex}
            className="text-[16px] text-white/95 font-medium mb-8 px-4 leading-relaxed transition-all duration-300 animate-fadeIn"
          >
            {slides[activeIndex].text}
          </p>

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-10 h-2 bg-[#F5A623] shadow-sm"
                    : "w-2.5 h-2.5 bg-[#F5A623] opacity-60"
                }`}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}