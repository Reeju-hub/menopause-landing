"use client";
import Image from "next/image";
import { useState } from "react";

export default function CarePlanSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- SWIPE LOGIC ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 40; 

  const plans = [
    {
      quote: "“My brain won't shut up and my jeans won't zip up.”",
      items: [
        { img: "/med-your.png", title: "Daily Brain\nBoost" },
        { img: "/med-your.png", title: "GLP-1S" },
        { img: "/med-your.png", title: "Metabolic\nLabs" }
      ]
    },
    {
      quote: "“I'm bloated, cranky, and can't tell if I need a nap or a snack.”",
      items: [
        { img: "/med-your.png", title: "GLP-1s" },
        { img: "/med-your.png", title: "Daily Fiber+" },
        { img: "/med-your.png", title: "Thyroid & B12\nlabs" }
      ]
    },
    {
      quote: "“I'm awake and sweaty at 3 a.m. but not in a good way.”",
      items: [
        { img: "/med-your.png", title: "Estradiol\nCream" },
        { img: "/med-your.png", title: "Progesterone" },
        { img: "/med-your.png", title: "Thyroid\npanel" }
      ]
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

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
    
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <section className="relative z-40 w-full pt-20 pb-0 md:py-28 px-6 md:px-[100px] flex items-center">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block w-full h-full relative">
          <Image 
            src="/background-youcareplan-woman.png" 
            alt="Care Plan Background Desktop" 
            fill 
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="block md:hidden w-full h-full relative">
          <Image 
            src="/your-care-plan-bg.png" 
            alt="Care Plan Background Mobile" 
            fill 
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&display=swap');
      `}} />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1560px] mx-auto flex flex-col justify-center items-start">
        
        <h2 className="text-white text-[60px] md:text-[64px] font-bold mb-8 drop-shadow-md" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Your Care Plan
        </h2>

        {/* Cream Card Container */}
        <div 
          className="bg-[#FCF3E7] backdrop-blur-md border border-white/30 h-auto md:h-[370px] rounded-[32px] max-w-[480px] w-full relative z-30 mt-4 md:mt-0 -mb-[100px] md:mb-0 overflow-hidden shadow-lg"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* YAHAN FIX KIYA HAI: Arrows container ko solid bg aur gradient fade mask diya hai */}
          <div className="absolute top-0 right-0 pt-6 pr-6 pb-6 pl-10 md:pt-8 md:pr-8 md:pb-8 flex gap-2 shrink-0 z-20 bg-[#FCF3E7] rounded-bl-[32px]">
            {/* Soft gradient fade masking */}
            <div className="absolute top-0 left-[-40px] w-[40px] h-full bg-gradient-to-r from-transparent to-[#FCF3E7] pointer-events-none"></div>
            
            <button onClick={handlePrev} className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0 relative">
              <img src="/leftcare.png"  alt="Previous" className="w-full h-full object-contain" />
            </button>
            <button onClick={handleNext} className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0 relative">
              <img src="/rightcare.png"  alt="Next" className="w-full h-full object-contain" />
            </button>
          </div>

          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {plans.map((plan, idx) => (
              
              <div key={idx} className="w-full shrink-0 min-w-0 flex flex-col p-6 md:p-8">
                
                {/* YAHAN FIX KIYA HAI: Quote ki padding right (pr) badha di taaki arrows ke aage overlap na kare */}
                <h3 className="text-[22px] md:text-[26px] pr-[90px] md:pr-[100px] font-extrabold text-[#323232] leading-snug mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {plan.quote}
                </h3>

                {/* Subtitle */}
                <p className="text-[12px] md:text-sm uppercase tracking-[0.16em] font-bold text-[#323232] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  YOUR CARE PLAN MAY INCLUDE
                </p>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 w-full pb-1">
                  {plan.items.map((item, itemIdx) => (
                    
                    <div key={itemIdx} className="bg-white rounded-[16px] md:rounded-[24px] overflow-hidden flex flex-col text-center shadow-sm w-full h-full min-w-0">
                      <div className="w-full aspect-[4/3] shrink-0 bg-gray-50">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Text box with overflow protection */}
                      <div className="w-full flex-1 flex items-center justify-center p-1 md:p-2 overflow-hidden">
                        <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.05em] text-[#323232] leading-tight whitespace-pre-line break-words w-full" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {item.title}
                        </span>
                      </div>
                    </div>

                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}