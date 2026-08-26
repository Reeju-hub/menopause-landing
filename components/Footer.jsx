"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FEFCF8] pt-12 pb-6 px-6 md:px-12 border-t border-gray-200 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
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
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Empowering women through evidence-based guidance and integrated care in midlife.
          </p>
        </div>

        {/* ========================================= */}
        {/* Absolute Bottom Section: Copyright & Links */}
        {/* ========================================= */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-200/80">
          
          {/* Copyright Area */}
          <p className="text-slate-500 text-[13px] md:text-sm font-medium text-center md:text-left" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            © {new Date().getFullYear()} MenoEssence. All rights reserved.
          </p>

          {/* Links Area (Ekdum neeche) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-3 w-full md:w-auto">
            
            {/* ========================================= */}
            {/* UPDATED: Single Combined Onboarding & Consent Form Download */}
            {/* ========================================= */}
            <a 
              href="/Menoessence Client Onboarding Form.pdf" 
              download 
              className="text-slate-600 hover:text-[#D9185F] transition text-[13px] md:text-[14px] font-bold flex items-center gap-1.5"
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
            >
              Privacy Policy
            </Link>

            {/* Terms & Conditions Link */}
            <Link 
              href="/terms-and-conditions" 
              className="text-slate-600 hover:text-[#D9185F] transition text-[13px] md:text-[14px] font-semibold"
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}