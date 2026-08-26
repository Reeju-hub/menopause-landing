import Image from "next/image";

export default function CarePlanSection() {
  return (
    <section className="relative z-40 w-full pt-20 pb-0 md:py-28 px-6 md:px-12 flex items-center">
      
      {/* Background Images - Responsive */}
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

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto flex flex-col justify-center items-start">
        
        {/* Main Heading (italic class removed to reduce slant) */}
        <h2 className="text-white text-5xl md:text-[64px] font-bold mb-8 drop-shadow-md" style={{ fontFamily: 'Caveat, serif' }}>
          Your Care Plan
        </h2>

        {/* Cream Card Container (shadow-2xl class removed) */}
        <div className="bg-[#F6C4A3] rounded-[32px] p-6 md:p-8 max-w-[480px] w-full relative z-30 mt-4 md:mt-0 -mb-[100px] md:mb-0">
          
          {/* Top Row: Quote & Arrows */}
          <div className="flex justify-between items-start mb-6 gap-4">
            <h3 className="text-[24px] md:text-[26px] font-serif font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "'Playfair Display', sans-serif" }}>
              &ldquo;My brain won&apos;t shut up and my jeans won&apos;t zip up.&rdquo;
            </h3>
            
            {/* Navigation Arrows Container */}
            <div className="flex gap-2 shrink-0 pt-1">
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0 relative">
                <img src="/leftcare.png" alt="Previous" className="w-full h-full object-contain" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer shrink-0 bg-transparent border-none p-0 relative">
                <img src="/rightcare.png" alt="Next" className="w-full h-full object-contain" />
              </button>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-[12px] md:text-sm uppercase tracking-[0.16em] font-bold text-[#323232] mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            YOUR CARE PLAN MAY INCLUDE
          </p>

          {/* 3 Edge-to-Edge Image Cards */}
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-2">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] overflow-hidden flex flex-col text-center w-[110px] h-[140px] md:w-[120px] md:h-[150px] shadow-sm shrink-0">
              {/* Image filling the top half */}
              <div className="w-full h-[75px] md:h-[85px] shrink-0">
                <img src="/med-your.png" alt="Daily Brain Boost" className="w-full h-full object-cover" />
              </div>
              {/* Text in the bottom half */}
              <div className="w-full flex-1 flex items-center justify-center p-2">
                <span
                  className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#323232] leading-tight"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Daily Brain<br />Boost
                </span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-[24px] overflow-hidden flex flex-col text-center w-[110px] h-[140px] md:w-[120px] md:h-[150px] shadow-sm shrink-0">
              <div className="w-full h-[75px] md:h-[85px] shrink-0">
                <img src="/med-your.png" alt="GLP-1S" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex-1 flex items-center justify-center p-2">
                <span
                  className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#323232] leading-tight"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  GLP-1S
                </span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-[24px] overflow-hidden flex flex-col text-center w-[110px] h-[140px] md:w-[120px] md:h-[150px] shadow-sm shrink-0">
              <div className="w-full h-[75px] md:h-[85px] shrink-0">
                <img src="/med-your.png" alt="Metabolic Labs" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex-1 flex items-center justify-center p-2">
                <span
                  className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#323232] leading-tight"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Metabolic<br />Labs
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}