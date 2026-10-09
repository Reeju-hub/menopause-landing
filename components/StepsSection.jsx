import Image from "next/image";

export default function StepsSection() {
  const steps = [
    {
      num: "1",
      title: "Book a discovery call:",
      desc: "A 45 min call with our experts, to assess your needs across multiple body systems. No pressure to sign up to anything."
    },
    {
      num: "2",
      title: "Set your goals:",
      desc: "This is where we build your midlife health roadmap - health history, priorities, goals, interventions and success metrics in 6-7 areas of health."
    },
    {
      num: "3",
      title: "Join the community:",
      desc: "You join a group of 3 – 4 women like you. A safe space for you to have meaningful conversations and be seen. Because you should not have to do it alone."
    },
    {
      num: "Go!",
      title: "", 
      desc: "For the duration of your care plan, a multi-disciplinary team combines clinical insight, nutrition science, and emotional wellbeing to help you achieve your goals.",
      hasFlowers: true
    }
  ];

  return (
    <section id="how-we-help" className="relative w-full flex justify-center bg-[#093566] overflow-hidden py-16 md:pt-[60px] md:pb-[80px] px-6 md:px-[100px]">
      
      {/* DIRECT GOOGLE FONT & CUSTOM ANIMATION INJECTION */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap');
        .force-cormorant { font-family: 'Cormorant Garamond', serif !important; }
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
      <div className="relative z-10 w-full max-w-[1560px] mx-auto flex flex-col items-center md:items-start gap-[24px]">
        
        {/* Header Frame */}
        <div className="flex flex-col items-start md:items-center gap-[12px] w-full px-4 md:px-0">
          <p className="force-cormorant font-medium text-[20px] md:text-[22px] font-bold tracking-[0.16em] text-[#FFFFFF] uppercase text-left md:text-center w-full leading-[20px]">
            — HOW WE HELP —
          </p>
          {/* YAHAN FIX KIYA HAI: max-w-4xl ko hata kar max-w-full aur xl:whitespace-nowrap add kiya taaki desktop pe single line rahe */}
          <h2 className="force-cormorant font-medium text-[36px] md:text-[52px] font-bold text-[#FFFFFF] text-left md:text-center md:leading-[69px] w-full max-w-full xl:whitespace-nowrap">
            We provide you the integrated care you deserve in your midlife.<br />
            <span className="text-[#FFFFFF] italic force-cormorant">As easy as 1, 2, 3!</span>
          </h2>
        </div>

        {/* 2x2 Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[36px] w-full mt-4 px-0">
          {steps.map((step, index) => {
            const isLastCard = index === 3;

            return (
              <div
                key={index}
                className={`flex flex-col items-start w-full gap-[12px] h-full ${
                  isLastCard ? 'md:col-span-3' : ''
                }`}
              >
                <span className=" italic force-cormorant text-[#FFFFFF] text-[36px] font-bold leading-[48px]">
                  {step.num}
                </span>

                <div className="w-full flex-1 bg-[#FCF3E7] rounded-[12px] p-[20px] flex flex-col items-start gap-[12px] relative overflow-hidden shadow-lg">
                  {step.title && (
                    <h4 className="force-cormorant text-[#3D2C2C] font-bold text-[20px] md:text-[22px] leading-[24px] md:leading-[32px]">
                      {step.title}
                    </h4>
                  )}

                  <p className="force-cormorant text-[#3D2C2C] font-bold text-[20px] md:text-[22px] leading-[24px] md:leading-[32px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}