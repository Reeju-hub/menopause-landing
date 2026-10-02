"use client";

import { useState } from "react";

export default function TeamSection() {
  // Kaunsa card khula hai usko track karne ke liye state (sirf mobile ke liye relevant rahega)
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Team data array
  const teamData = [
    {
      id: 1,
      name: "Dr. Roshni Changalath",
      title: "Founder & Clinical Lead",
      subtitle: "MBBS, MS, DNB (OBG)",
      image: "/team-1.jpg",
      bio: "OB-GYN with over a decade of clinical experience in providing evidence-based, compassionate women’s health care across hospital, community and global health settings, with a focus on midlife women's health and gynaecologic oncology."
    },
    {
      id: 2,
      name: "Nahida Wankhede",
      title: <>Registered Dietitian &<br/>Certified Menopausal<br/>Nutritionist</>,
      subtitle: "",
      image: "/team-2.jpg",
      bio: "Registered Dietitian and Certified Menopausal Nutritionist with 20 years of experience in clinical nutrition, women’s health, diabetes care, weight management, and nutrition product development."
    },
    {
      id: 3,
      name: "Deepa Mani",
      title: <>Certified<br/>Psychotherapist</>,
      subtitle: "",
      image: "/team-3.jpg",
      bio: "Certified psychotherapist with 15+ years of experience who integrates Transactional Analysis, yoga-based somatic practices, and insights from competitive sports into her therapeutic work."
    }
  ];

  return (
    // YAHAN FIX KIYA HAI: md:px-12 ko md:px-[100px] kar diya taaki page margins sync hon
    <section className="w-full py-16 md:py-20 px-6 md:px-[100px] flex justify-center bg-[#7A1F3A] overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&display=swap');
      `}} />

      {/* Content Container */}
      {/* YAHAN FIX KIYA HAI: max-w-[1200px] ko max-w-[1560px] kar diya */}
      <div className="w-full max-w-[1560px] flex flex-col mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-8 md:mb-10 text-left" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Meet your team
        </h2>

        {/* Cards Container - Desktop pe Grid (3 columns), Mobile pe Vertical Stack (flex-col) */}
        {/* YAHAN FIX KIYA HAI: md:gap-6 ko md:gap-[60px] kar diya taaki boxes ke beech ka gap perfect rahe */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-[60px] w-full items-start">
          
          {/* Loop over Team Data */}
          {teamData.map((member) => (
            // YAHAN FIX KIYA HAI: 'h-full' add kiya taaki agar bio content ki wajah se height alag ho, toh saare cards equal height ke dikhein
            <div key={member.id} className="bg-[#FDF4E7] rounded-[24px] p-5 md:p-6 flex flex-col w-full h-full shadow-sm transition-all duration-300">
              
              {/* Top Section: Photo, Name, and Button */}
              <div className="flex items-center w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-[72px] h-[72px] md:w-[76px] md:h-[76px] rounded-full object-cover shrink-0 shadow-sm"
                />
                
                {/* Text Details */}
                <div className="flex flex-col ml-4 flex-grow">
                  <h4 className="text-[18px] md:text-[18px] font-bold text-slate-900 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {member.name}
                  </h4>
                  <p className="text-[#D9185F] font-bold mt-1 text-[14px] md:text-[15px] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {member.title}
                  </p>
                  {member.subtitle && (
                    <p className="text-slate-700 text-[12px] md:text-[13px] mt-1 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {member.subtitle}
                    </p>
                  )}
                </div>

                {/* Plus / Minus Toggle Button */}
                {/* YAHAN FIX KIYA HAI: 'md:hidden' class lagayi taaki desktop pe button hide ho jaye */}
                <button 
                  onClick={() => toggleCard(member.id)}
                  className={`md:hidden shrink-0 w-8 h-8 rounded-full border-[1.5px] border-[#004D40] flex items-center justify-center transition cursor-pointer ml-2 ${
                    expandedCards[member.id] ? "bg-[#004D40] text-white" : "text-[#004D40] hover:bg-[#004D40] hover:text-white"
                  }`}
                >
                  {expandedCards[member.id] ? (
                    /* Minus Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  ) : (
                    /* Plus Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Bottom Section: Bio Content */}
              {/* YAHAN FIX KIYA HAI: Mobile pe expanded state check karega, par desktop (md) pe hamesha 'md:block' ki wajah se dikhega */}
              <div className={`mt-5 pt-4 border-t border-[#F2E5D3] animate-fadeIn ${expandedCards[member.id] ? 'block' : 'hidden md:block'}`}>
                <p 
                  className="text-[#221f1f] text-[16px] leading-relaxed font-medium" 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {member.bio}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}