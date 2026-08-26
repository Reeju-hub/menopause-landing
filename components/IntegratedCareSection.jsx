"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function IntegratedCareSection() {
  const scrollRef = useRef(null);

  // Card toggle state track karne ke liye
  const [flippedCards, setFlippedCards] = useState({});

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -384, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 384, behavior: "smooth" });
    }
  };

  // Toggle function for individual cards
  const toggleCard = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // All 8 sections added from the image
  const cardsData = [
    {
      id: 1,
      image: "/video-thumb-1.jpg",
      imgClass: "object-cover",
      title: "Energy & vitality",
      desc: "We offer practical, realistic guidance to support hormonal health, energy, metabolic wellbeing, bone health, and overall vitality."
    },
    {
      id: 2,
      image: "/video-thumb-2.jpg",
      imgClass: "object-cover",
      title: "Mood & Emotional Wellbeing",
      desc: "Mood changes, irritability, overwhelm, anxiety, or a quiet sense of not feeling like yourself can all be part of the menopausal transition. We help you understand these changes and support your emotional wellbeing with evidence-based approaches."
    },
    {
      id: 3,
      image: "/video-thumb-3.jpg",
      imgClass: "object-cover",
      title: "Metabolism & Weight Changes",
      desc: "Should you be concerned about your weight? Or is bone health? Understanding hormonal, metabolic, and lifestyle factors involved helps you make informed, sustainable changes without guilt or guesswork."
    },
    {
      id: 4,
      image: "/video-thumb-4.jpg",
      imgClass: "object-left",
      title: "Sleep Disturbances",
      desc: "Disturbed sleep patters or feeling tired despite a full night’s sleep are common in midlife. We explore the factors affecting your sleep and build practical, personalised strategies to improve rest and recovery."
    },
    {
      id: 5,
      image: "/video-thumb-5.jpg", // Placeholder for new image
      imgClass: "object-cover",
      title: "Brain Fog & Memory",
      desc: "Forgetting names, losing your train of thought, difficulty concentrating, or feeling mentally slower than usual can be unsettling. These experiences are common during perimenopause and deserve understanding, not dismissal."
    },
    {
      id: 6,
      image: "/video-thumb-6.jpg", // Placeholder for new image
      imgClass: "object-cover",
      title: "Movement & Strength",
      desc: "Movement plays a powerful role in supporting physical health, mood, sleep, strength, and long-term wellbeing. We help you find sustainable ways to stay active that fit your body, your lifestyle, and your goals."
    },
    {
      id: 7,
      image: "/video-thumb-7.jpg", // Placeholder for new image
      imgClass: "object-cover",
      title: "Sexual Wellbeing",
      desc: "Changes in desire, intimacy, vaginal comfort, and sexual health are common yet often under-discussed. We provide a safe, supportive space to explore concerns and identify solutions that work for you."
    },
    {
      id: 8,
      image: "/video-thumb-8.jpg", // Placeholder for new image
      imgClass: "object-cover",
      title: "Healthy Ageing",
      desc: "Midlife is an opportunity to invest in your future health. From bone health and cardiovascular wellbeing to cognitive resilience and vitality, we focus on helping women age with strength, confidence, and purpose."
    }
  ];

  return (
    <section className="relative w-full py-24 flex flex-col items-center bg-[#004D40] overflow-hidden text-white">
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image 
          src="/green-pattern.svg" 
          alt="Green Pattern Background" 
          fill 
          quality={100}
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-0 flex flex-col mx-auto">
        
        {/* Subtitle & Heading */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center gap-3 w-full mb-6">
          <p className="text-[12px] md:text-[20px] font-bold tracking-[0.16em] uppercase text-[#FDF6EC]" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            — HOW DO WE HELP —
          </p>

          <h2 className="text-3xl md:text-[52px] font-serif font-bold leading-tight md:leading-[69px] max-w-4xl text-white">
            The integrated care you deserve in <span className="text-[#F5A623] italic font-bold">midlife.</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-white text-base md:text-[20px] leading-relaxed md:leading-[32px] font-medium max-w-5xl mb-14 text-left md:text-center mx-0 md:mx-auto">
          A space where women can access evidence-based guidance, meaningful conversations, and a supportive community while navigating perimenopause, menopause and healthy ageing. We help you understand what is changing, why it matters, and what you can do about it.
        </p>

        {/* HORIZONTAL CAROUSEL / SLIDER */}
        <div 
          ref={scrollRef}
          className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory mb-6 pb-4 text-left pr-6 md:pr-12 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          
          {cardsData.map((card) => (
            <div key={card.id} className="shrink-0 w-[360px] h-[312px] snap-start rounded-[24px] overflow-hidden shadow-lg bg-[#FAF4EE] relative group">
              
              {/* Background Image (Fades out when clicked) */}
              <img 
                src={card.image} 
                alt={card.title} 
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${card.imgClass} ${flippedCards[card.id] ? 'opacity-0' : 'opacity-100'}`}
              />

              {/* Text Overlay Content (Pops up when clicked) */}
              <div 
                className={`absolute inset-0 bg-[#FAF4EE] p-8 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                  flippedCards[card.id] ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-4 -z-10 pointer-events-none'
                }`}
              >
                <h3 className="text-[#004D40] text-[22px] font-bold mb-3 font-serif leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-700 text-[14px] leading-relaxed font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {card.desc}
                </p>
              </div>

              {/* Aligned Plus/Minus Button */}
              <button 
                onClick={() => toggleCard(card.id)}
                className={`absolute bottom-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-30 shadow-md ${
                  flippedCards[card.id] 
                    ? 'bg-[#004D40] text-white hover:bg-[#00332a]' 
                    : 'bg-white/90 backdrop-blur-sm text-[#004D40] hover:bg-white'
                }`}
                aria-label="Toggle details"
              >
                {flippedCards[card.id] ? (
                  // Minus Icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>
                ) : (
                  // Plus Icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}
              </button>

            </div>
          ))}

        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 self-end pr-6 md:pr-0">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0"
          >
            <img src="/left.png" alt="Scroll Left" className="w-full h-full object-contain" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0"
          >
            <img src="/right.png" alt="Scroll Right" className="w-full h-full object-contain" />
          </button>
        </div>

      </div>
    </section>
  );
}