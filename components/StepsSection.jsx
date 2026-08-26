import Image from "next/image";

export default function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Book a discovery call:",
      desc: "A 45 min call with Dr. Roshni, to assess your needs across multiple body systems. No pressure to sign up to anything."
    },
    {
      num: "02",
      title: "Set your goals:",
      desc: "This is where we build your midlife health roadmap - health history, priorities, goals, interventions and success metrics in 6-7 areas of health."
    },
    {
      num: "03",
      title: "Join the community:",
      desc: "You join a group of 3 - 4 women like you. A safe space for you to have meaningful conversations and be seen. Because you should not have to do it alone."
    },
    {
      num: "Go!",
      title: "", 
      desc: "For the duration of your care plan, a multi-disciplinary team combines clinical insight, nutrition science, and emotional wellbeing to help you achieve your goals.",
      hasFlowers: true
    }
  ];

  return (
    <section className="relative w-full flex justify-center bg-[#093566] overflow-hidden py-16 md:pt-[60px] md:pb-[80px] md:px-[100px]">
      
      {/* DIRECT GOOGLE FONT & CUSTOM ANIMATION INJECTION */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap');
        .force-playfair { font-family: 'Playfair Display', serif !important; }
        .force-quicksand { font-family: 'Quicksand', sans-serif !important; }
        
        /* CONTINUOUS SLOW SPIN ANIMATION FOR FLOWERS */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
          display: inline-block;
        }
      `}} />

      {/* --- DESKTOP PATTERN --- */}
      <div className="absolute inset-0 z-0 opacity-200 hidden md:block">
        <Image 
          src="/blue-pattern.jpg" 
          alt="Blue Pattern Desktop" 
          fill 
          quality={100}
          unoptimized
          className="object-cover"
        />
      </div>

      {/* --- MOBILE PATTERN FIX --- */}
      <div className="absolute inset-0 z-0 block md:hidden">
         <div 
           className="absolute inset-0 w-full h-full"
           style={{
             backgroundImage: "url('/blue-pattern-mobile.png')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             mixBlendMode: "multiply",
             opacity: 20.0
           }}
         />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full md:w-[1200px] flex flex-col items-center gap-[24px]">
        
        {/* Header Frame */}
        <div className="flex flex-col items-center gap-[12px] w-full px-4 md:px-0">
          <p className="force-quicksand text-[12px] font-bold tracking-[0.16em] text-[#FDF6EC] uppercase text-center w-full leading-[20px]">
            — HOW WE HELP —
          </p>
          <h2 className="force-playfair text-[32px] md:text-[52px] font-bold text-[#FDF6EC] text-center md:leading-[69px] w-full">
            We provide you the integrated care you deserve in your midlife. <span className="text-[#FFB627] italic">As easy as 1, 2, 3....Go</span>
          </h2>
        </div>

        {/* 2x2 Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[36px] w-full mt-4 justify-items-center px-4 md:px-0">
          {steps.map((step, index) => (
            
            <div key={index} className="flex flex-col items-start w-full md:w-[560px] gap-[12px]">
              
              <span className="force-playfair text-[#FFB627] text-[36px] font-bold leading-[48px]">
                {step.num}
              </span>

              {/* === ALL SIDES SHINING GLASS EFFECT === */}
              <div 
                className="w-full h-full rounded-[12px] p-[20px] flex flex-col items-start gap-[12px] backdrop-blur-md relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(253, 246, 236, 0.25) 0%, rgba(253, 246, 236, 0.15) 100%)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(253, 246, 236, 0.4), inset 0 0 16px rgba(253, 246, 236, 0.1)"
                }}
              >
                
                {step.title && (
                  <h4 className="force-quicksand text-[#FDF6EC] font-bold text-[18px] leading-[22px]">
                    {step.title}
                  </h4>
                )}

                <p className="force-quicksand text-[#FDF6EC] font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
                  {step.desc}
                </p>

                {/* ANIMATED FLOWERS SECTIONS */}
                {step.hasFlowers && (
                  <div className="flex gap-[10px] items-center pt-1 mt-auto">
                    <span className="text-[#FFB627] text-[20px] animate-spin-slow">✿</span>
                    <span className="text-[#B31217] text-[20px] animate-spin-slow">✿</span>
                    <span className="text-[#FFB627] text-[20px] animate-spin-slow">✿</span>
                    <span className="text-[#B31217] text-[20px] animate-spin-slow">✿</span>
                    <span className="text-[#FFB627] text-[20px] animate-spin-slow">✿</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}