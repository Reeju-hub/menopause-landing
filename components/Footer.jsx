"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  
  // =========================================
  // NAYA FIX: Force Download via JavaScript Blob
  // =========================================
  const handleDownload = async (e) => {
    e.preventDefault(); // Normal click behavior ko rokna
    
    try {
      // Dhyan dein: Yahan PDF ka exact naam likhna hai jo public folder mein hai
      const fileUrl = "/Menoessence Client Onboarding Form.pdf"; 
      
      const response = await fetch(fileUrl);
      const blob = await response.blob(); // File ko raw data mein convert karna
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Menoessence-Client-Onboarding-Form.pdf"; // Jis naam se device me save hogi
      
      document.body.appendChild(link);
      link.click(); // Zabardasti click karwana
      
      // Safai (Memory leak bachane ke liye)
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      // Agar JS fail ho jaye (rare), toh fallback normal download
      window.open("/Menoessence Client Onboarding Form.pdf", "_blank");
    }
  };

  return (
    // YAHAN FIX KIYA HAI: md:px-12 ko md:px-[100px] kar diya taaki footer alignment exact baaki page se match ho
    <footer className="w-full bg-[#FEFCF8] pt-12 pb-6 px-6 md:px-[100px] border-t border-gray-200 relative z-10">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&display=swap');
      `}} />

      {/* YAHAN FIX KIYA HAI: max-w-[1200px] ko max-w-[1560px] kar diya */}
      <div className="max-w-[1560px] mx-auto flex flex-col">
        
        {/* Top Section: Logo & Brand Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-16">
          <Image
            src="/logo.svg" 
            alt="MenoEssence Logo" 
            width={180}
            height={45}
            className="h-8 md:h-10 w-auto mb-4"
          />
          <p 
            className="text-slate-600 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-[320px]" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Empowering women through evidence-based guidance and integrated care in midlife.
          </p>
        </div>

        {/* Absolute Bottom Section: Copyright & Links */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-200/80">
          
          {/* Copyright Area */}
          <p className="text-slate-500 text-[13px] md:text-sm font-medium text-center md:text-left" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            © {new Date().getFullYear()} MenoEssence. All rights reserved.
          </p>

          {/* Links Area */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-3 w-full md:w-auto">
            
            <a 
              href="/api/download" 
              download="Menoessence-Client-Onboarding-Form.pdf"
              className="text-slate-600 hover:text-[#D9185F] transition text-[13px] md:text-[14px] font-bold flex items-center gap-1.5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Onboarding & Consent Form
            </a>

            {/* Privacy Policy Link */}
            <Link 
              href="/privacy-policy" 
              className="text-slate-600 hover:text-[#D9185F] transition text-[13px] md:text-[14px] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Privacy Policy
            </Link>

            {/* Terms & Conditions Link */}
            <Link 
              href="/terms-and-conditions" 
              className="text-slate-600 hover:text-[#D9185F] transition text-[13px] md:text-[14px] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}