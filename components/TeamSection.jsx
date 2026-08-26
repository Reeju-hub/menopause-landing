"use client";

import { useState } from "react";

export default function TeamSection() {
  // Kaunsa card khula hai usko track karne ke liye state
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
      // NOTE: Aap yahan Nahida ka actual bio update kar sakte hain
      bio: "OB-GYN with over a decade of clinical experience in providing evidence-based, compassionate women’s health care across hospital, community and global health settings, with a focus on midlife women's health and gynaecologic oncology."
    },
    {
      id: 3,
      name: "Deepa Mani",
      title: <>Certified<br/>Psychotherapist</>,
      subtitle: "",
      image: "/team-3.jpg",
      // NOTE: Aap yahan Deepa ka actual bio update kar sakte hain
      bio: "OB-GYN with over a decade of clinical experience in providing evidence-based, compassionate women’s health care across hospital, community and global health settings, with a focus on midlife women's health and gynaecologic oncology."
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-12 flex justify-center bg-white overflow-hidden">
      
      {/* Content Container */}
      <div className="w-full max-w-[1200px] flex flex-col">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 md:mb-10 text-left">
          Meet your team
        </h2>

        {/* Cards Container - Desktop pe Grid (3 columns), Mobile pe Vertical Stack (flex-col) */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 w-full items-start">
          
          {teamData.map((member) => (
            <div key={member.id} className="bg-[#FDF4E7] rounded-[24px] p-5 md:p-6 flex flex-col w-full shadow-sm transition-all duration-300">
              
              {/* Top Section: Photo, Name, and Button */}
              <div className="flex items-center w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-[72px] h-[72px] md:w-[76px] md:h-[76px] rounded-full object-cover shrink-0 shadow-sm"
                />
                
                {/* Text Details */}
                <div className="flex flex-col ml-4 flex-grow">
                  <h4 className="text-[17px] md:text-[18px] font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[#D9185F] font-bold mt-1 text-[13px] md:text-[15px] leading-tight">
                    {member.title}
                  </p>
                  {member.subtitle && (
                    <p className="text-slate-700 text-[12px] md:text-[13px] mt-1 font-semibold">
                      {member.subtitle}
                    </p>
                  )}
                </div>

                {/* Plus / Minus Toggle Button */}
                <button 
                  onClick={() => toggleCard(member.id)}
                  className={`shrink-0 w-8 h-8 rounded-full border-[1.5px] border-[#004D40] flex items-center justify-center transition cursor-pointer ml-2 ${
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

              {/* Bottom Section: Bio Content (Visible only when expanded) */}
              {expandedCards[member.id] && (
                <div className="mt-5 pt-4 border-t border-[#F2E5D3] animate-fadeIn">
                  {/* YAHAN COLOR, SIZE AUR FONT UPDATE KIYA GAYA HAI */}
                  <p 
                    className="text-[#221f1f] text-[20px] leading-relaxed font-medium" 
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {member.bio}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}