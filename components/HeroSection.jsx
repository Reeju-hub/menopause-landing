"use client";
import Image from "next/image"; 
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

  // --- SWIPE LOGIC STATES ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 40; 

  // --- AUTO-SCROLL LOGIC ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(slideInterval);
  }, [activeIndex, slides.length]); 

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
          setBounceKey(prev => prev + 1);
        } else {
          setIsBgVisible(false); 
        }
      },
      { 
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

  // --- TOUCH HANDLERS ---
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    if (distance < -minSwipeDistance) {
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <section className="bg-[#FFFFFF] flex flex-col items-center pt-4 md:pt-16 px-0 text-center relative overflow-hidden pb-4">
      
      {/* 🧪 SVG Filter for the Liquid/Gooey Effect 🧪 */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap');
        
        .force-caveat { font-family: 'Caveat', cursive !important; }
        .force-playfair { font-family: 'Playfair Display', serif !important; }
        .force-quicksand { font-family: 'Quicksand', sans-serif !important; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        @keyframes popup-bg {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popup-bg {
          animation: popup-bg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in forwards;
        }

        @keyframes desktop-blob-dynamic {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.025) translateY(-12px); }
        }
        .animate-desktop-dynamic {
          animation: desktop-blob-dynamic 6s ease-in-out infinite;
        }
        
        @keyframes mobile-blob-dynamic {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.02) translateY(-6px); }
        }
        .animate-mobile-dynamic {
            animation: mobile-blob-dynamic 5s ease-in-out infinite;
        }

        /* 💦 YAHAN FIX KIYA HAI: Ab movement ka radius bahut bada (faila hua) kar diya hai 💦 */
        @keyframes blob-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(120px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 80px) scale(0.9); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-100px, 50px) scale(0.85); }
          66% { transform: translate(80px, -60px) scale(1.15); }
        }
        @keyframes blob-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 100px) scale(1.2); }
          66% { transform: translate(-80px, -40px) scale(0.8); }
        }
        @keyframes blob-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-80px, -90px) scale(0.9); }
          66% { transform: translate(100px, 40px) scale(1.2); }
        }
        @keyframes blob-float-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(140px, 10px) scale(1.3); }
          66% { transform: translate(-50px, -100px) scale(0.7); }
        }
        @keyframes blob-float-6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 120px) scale(0.8); }
          66% { transform: translate(110px, -30px) scale(1.2); }
        }
      `}} />

      {/* --- DESKTOP Top Text & Button --- */}
      <div className="hidden md:flex relative z-30 flex-col items-center px-4 md:px-6">
         <p className="force-quicksand text-[15px] font-bold tracking-[0.2em] text-[#1D3557] uppercase mb-2">
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
      <div className="hidden md:flex flex-col items-center w-full relative -mt-17">
        <div className="relative flex justify-center items-center w-full animate-desktop-dynamic">
          
          {/* 🎈 GOOEY METABALLS CONTAINER (DESKTOP) 🎈 */}
          <div className="absolute top-0 left-0 w-full h-[60%] z-20 pointer-events-none" style={{ filter: 'url(#goo)' }}>
            
            {/* YAHAN FIX KIYA HAI: Left Side Spread - Kaafi door tak faila diya hai */}
            <div className="absolute top-[10%] left-[12%] w-[80px] h-[80px] bg-[#E01D91] rounded-full animate-[blob-float-1_12s_ease-in-out_infinite]"></div>
            <div className="absolute top-[2%] left-[26%] w-[35px] h-[35px] bg-[#E01D91] rounded-full animate-[blob-float-2_15s_ease-in-out_infinite]"></div>
            <div className="absolute top-[25%] left-[8%] w-[50px] h-[50px] bg-[#E01D91] rounded-full animate-[blob-float-3_11s_ease-in-out_infinite]"></div>
            <div className="absolute top-[18%] left-[32%] w-[20px] h-[20px] bg-[#E01D91] rounded-full animate-[blob-float-4_14s_ease-in-out_infinite]"></div>
            <div className="absolute top-[35%] left-[18%] w-[40px] h-[40px] bg-[#E01D91] rounded-full animate-[blob-float-5_16s_ease-in-out_infinite]"></div>
            <div className="absolute top-[5%] left-[40%] w-[15px] h-[15px] bg-[#E01D91] rounded-full animate-[blob-float-6_10s_ease-in-out_infinite]"></div>
            <div className="absolute top-[15%] left-[5%] w-[60px] h-[60px] bg-[#E01D91] rounded-full animate-[blob-float-1_18s_ease-in-out_infinite]"></div>
            <div className="absolute top-[30%] left-[28%] w-[25px] h-[25px] bg-[#E01D91] rounded-full animate-[blob-float-2_13s_ease-in-out_infinite]"></div>

            {/* YAHAN FIX KIYA HAI: Right Side Spread - Kaafi door tak faila diya hai */}
            <div className="absolute top-[5%] right-[15%] w-[70px] h-[70px] bg-[#E01D91] rounded-full animate-[blob-float-2_14s_ease-in-out_infinite]"></div>
            <div className="absolute top-[20%] right-[8%] w-[45px] h-[45px] bg-[#E01D91] rounded-full animate-[blob-float-4_11s_ease-in-out_infinite]"></div>
            <div className="absolute top-[8%] right-[35%] w-[30px] h-[30px] bg-[#E01D91] rounded-full animate-[blob-float-6_16s_ease-in-out_infinite]"></div>
            <div className="absolute top-[32%] right-[22%] w-[55px] h-[55px] bg-[#E01D91] rounded-full animate-[blob-float-1_13s_ease-in-out_infinite]"></div>
            <div className="absolute top-[15%] right-[28%] w-[25px] h-[25px] bg-[#E01D91] rounded-full animate-[blob-float-3_15s_ease-in-out_infinite]"></div>
            <div className="absolute top-[2%] right-[42%] w-[40px] h-[40px] bg-[#E01D91] rounded-full animate-[blob-float-5_10s_ease-in-out_infinite]"></div>
            <div className="absolute top-[28%] right-[12%] w-[18px] h-[18px] bg-[#E01D91] rounded-full animate-[blob-float-2_18s_ease-in-out_infinite]"></div>
            <div className="absolute top-[12%] right-[5%] w-[65px] h-[65px] bg-[#E01D91] rounded-full animate-[blob-float-1_15s_ease-in-out_infinite]"></div>

          </div>

          <Image
            src="/full-hero-section.png"
            alt="Hero Section"
            width={1920}
            height={1080}
            quality={100}
            unoptimized
            priority
            className="w-full max-w-none h-auto object-cover pointer-events-none translate-y-30 relative z-10"
          />

          {/* 🌸 DESKTOP FLOWERS OVERLAY 🌸 */}
          <img 
            src="/flower.png" 
            alt="flower" 
            className="absolute w-[20px] h-[20px] object-contain animate-spin-slow pointer-events-none z-30"
            style={{ top: '77%', left: '38.37%' }} 
          />
          <img 
            src="/flower.png" 
            alt="flower" 
            className="absolute w-[20px] h-[20px] min-w-[25px] object-contain animate-spin-slow pointer-events-none z-30"
            style={{ top: '77%', right: '38.37%' }} 
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
        <div className="w-full flex justify-center relative z-10 translate-y-75 mb-6 -mt-75 animate-mobile-dynamic">
          
          {/* 🎈 GOOEY METABALLS CONTAINER (MOBILE) 🎈 */}
          <div className="absolute top-0 left-0 w-full h-[60%] z-20 pointer-events-none" style={{ filter: 'url(#goo)' }}>
            
            {/* Left Cluster - Mobile Spread */}
            <div className="absolute top-[5%] left-[5%] w-[45px] h-[45px] bg-[#E01D91] rounded-full animate-[blob-float-1_12s_ease-in-out_infinite]"></div>
            <div className="absolute top-[18%] left-[25%] w-[25px] h-[25px] bg-[#E01D91] rounded-full animate-[blob-float-2_15s_ease-in-out_infinite]"></div>
            <div className="absolute top-[10%] left-[35%] w-[15px] h-[15px] bg-[#E01D91] rounded-full animate-[blob-float-3_11s_ease-in-out_infinite]"></div>
            <div className="absolute top-[28%] left-[12%] w-[35px] h-[35px] bg-[#E01D91] rounded-full animate-[blob-float-4_14s_ease-in-out_infinite]"></div>
            <div className="absolute top-[15%] left-[15%] w-[12px] h-[12px] bg-[#E01D91] rounded-full animate-[blob-float-5_10s_ease-in-out_infinite]"></div>
            
            {/* Right Cluster - Mobile Spread */}
            <div className="absolute top-[8%] right-[8%] w-[40px] h-[40px] bg-[#E01D91] rounded-full animate-[blob-float-2_13s_ease-in-out_infinite]"></div>
            <div className="absolute top-[20%] right-[28%] w-[20px] h-[20px] bg-[#E01D91] rounded-full animate-[blob-float-1_16s_ease-in-out_infinite]"></div>
            <div className="absolute top-[12%] right-[38%] w-[30px] h-[30px] bg-[#E01D91] rounded-full animate-[blob-float-4_11s_ease-in-out_infinite]"></div>
            <div className="absolute top-[25%] right-[15%] w-[15px] h-[15px] bg-[#E01D91] rounded-full animate-[blob-float-6_14s_ease-in-out_infinite]"></div>
            <div className="absolute top-[5%] right-[22%] w-[25px] h-[25px] bg-[#E01D91] rounded-full animate-[blob-float-3_12s_ease-in-out_infinite]"></div>

          </div>

          <Image
            src="/hero-mobile.png"
            alt="Menopause Care Mobile"
            width={800}
            height={800}
            quality={100}
            unoptimized
            priority
            className="w-full max-w-[600px] h-auto object-cover relative z-10"
          />
        </div>
        
        {/* Background Image Container */}
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

        {/* Pink Box Container */}
        <div 
          className="w-[calc(100%-2rem)] max-w-[380px] h-[221px] bg-[#AC0066] rounded-[0px_0px_40px_40px] px-[20px] py-[24px] flex flex-col justify-between items-center mx-auto relative z-40 mt-0 mb-[10px] shadow-lg"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Top Text & Flower Block */}
          <div className="flex flex-col items-center gap-[12px] w-full max-w-[310px] h-[101px] pointer-events-none">
            
            {/* Title with Flowers */}
            <h3 className="flex flex-row justify-center items-center gap-[12px] w-full h-[45px]">
              <img src="/flower.png" alt="flower" className="w-[20px] h-[20px] object-contain animate-spin-slow" />
              <span className="force-caveat font-bold text-[#FFFFFF] text-[34px] sm:text-[36px] leading-[45px] text-center whitespace-nowrap">
                You're not alone
              </span>
              <img src="/flower.png" alt="flower" className="w-[20px] h-[20px] object-contain animate-spin-slow" />
            </h3>

            {/* Slider Description Text */}
            <p 
              key={activeIndex}
              className="force-quicksand font-bold text-[#FFFFFF] text-[15.5px] sm:text-[16px] leading-[22px] text-center w-full animate-fadeIn"
            >
              {slides[activeIndex].text}
            </p>

          </div>

          {/* Indicator Dots */}
          <div className="flex flex-row justify-center items-center gap-[12px] h-[8px]">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-[4px] cursor-pointer ${
                  activeIndex === index
                    ? "w-[64px] h-[8px] bg-[#FF7A21]"
                    : "w-[16px] h-[8px] bg-[rgba(255,122,33,0.6)]"
                }`}
              ></div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}