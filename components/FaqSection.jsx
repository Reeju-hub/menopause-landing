"use client";

import { useState } from "react";

export default function FaqSection() {
  // openIndex decide karega ki kaunsa question khula rahega. 
  // '0' ka matlab hai ki pehla question by default khula rahega.
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ Data - Exact matches from the provided image
  const faqs = [
    {
      question: "Do I need a referral to join?",
      answer: "No. You can book a discovery call directly. We'll take it from there."
    },
    {
      question: "I don't have obvious symptoms yet. Should I still come?",
      answer: "Yes. Perimenopause can begin years before symptoms become noticeable. Understanding what's ahead and how to support your health now is one of the most useful things you can do in your 30s and 40s."
    },
    {
      question: "I have all the symptoms. But is this the right time for me?",
      answer: "There is rarely a perfect time. What we can tell you is that the women who join MenoEssence consistently say they wish they had started sooner. A discovery call is a good first step, no commitment required."
    },
    {
      question: "I'm already seeing my gynaecologist. Will this complicate things?",
      answer: "No. MenoEssence is designed to complement your existing care, not replace it. Many women find that what they learn here helps them have better, more productive conversations with their own doctors."
    },
    {
      question: "I already have a nutritionist, a gynaecologist, and a therapist. What's different here?",
      answer: "MenoEssence brings those three conversations into one space, with a team that talks to each other and looks at the whole picture. The value is in the integration - not in replacing what you already have."
    },
    {
      question: "I'd prefer a 1:1 session rather than a group. Is that possible?",
      answer: "Our programme is designed as a small group experience and the peer connection is genuinely part of what makes it work. That said, please reach out directly and we can discuss what's right for you."
    },
    {
      question: "What happens if I don't look after my health during this transition?",
      answer: "Midlife is a critical window for long-term health. Bone density, cardiovascular health, metabolic function, and cognitive wellbeing are all shaped by what happens during perimenopause and menopause. This is not about fear, it's about giving yourself the best possible foundation for the decades ahead."
    },
    {
      question: "Can I manage this on my own with diet, sleep, and exercise?",
      answer: "Lifestyle choices matter enormously and we will absolutely work on those with you. But for many women, understanding the hormonal and biological changes that are driving their symptoms changes everything. Knowledge is the foundation. The lifestyle strategies build on it."
    },
    {
      question: "Will you accept my existing diagnostic reports?",
      answer: "Yes. Please bring any recent blood work or investigations to your discovery call. We'll let you know if anything additional would be helpful."
    }
  ];

  const toggleFaq = (index) => {
    // Agar click kiya hua question already khula hai, toh usko band kar do (null). 
    // Warna us index ko khol do.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // YAHAN FIX KIYA HAI: md:px-12 ko hata kar md:px-[100px] apply kiya taaki baki page ke padding se match kare
    <section className="w-full py-20 px-6 md:px-[100px] bg-[#9E0059] flex justify-center text-white">
      
      {/* YAHAN FIX KIYA HAI: max-w-[1000px] ko max-w-[1560px] kar diya taaki width consistency maintain rahe */}
      <div className="w-full max-w-[1560px] flex flex-col mx-auto">
        
        {/* Subtitle */}
        <p className="text-12px md:text-2xl font-bold tracking-[0.16em] uppercase mb-4 text-white/90" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          — FAQS —
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10">
          Questions we hear often
        </h2>

        {/* FAQs List */}
        <div className="flex flex-col border-t border-white/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-white/30 flex flex-col">
                {/* Question Row (Clickable) */}
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon - AUR BOLD KIYA GAYA HAI (border-2 aur strokeWidth={3.5}) */}
                  <span className="shrink-0 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    {isOpen ? (
                      // Minus Icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      // Plus Icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer (Only visible if isOpen is true) */}
                {isOpen && (
                  <div className="pb-6 text-white/80 text-base md:text-lg pr-12 font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}