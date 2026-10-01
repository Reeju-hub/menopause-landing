import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageDivider from '../components/ImageDivider';
import ImageDivider2 from '../components/ImageDivider2';
import StepsSection from '../components/StepsSection';
import StagesSection from '../components/StagesSection';
import IntegratedCareSection from '../components/IntegratedCareSection';
import CarePlanSection from '@/components/CarePlanSection';
import TeamSection from '@/components/TeamSection';
import FaqSection from '@/components/FaqSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      
      <Navbar />
      
      <HeroSection />
      
      {/* Pehli leti hui aurat */}
      <ImageDivider />
      
      {/* Text Section (Exact Figma Match for Safari & Desktop) */}
      {/* YAHAN FIX KIYA HAI: Grid hata kar Flex lagaya, items-start kiya, max-width badhayi aur exact Figma gaps (100px padding, 60px gap) set kiye */}
      <section className="py-16 md:py-24 px-6 md:px-[100px] max-w-[1560px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-[60px] min-w-0">
        
        {/* Left Column (Exact 580px for Desktop) */}
        <div className="min-w-0 md:w-[580px] shrink-0">
          
          <p
            className="text-[#0B306F] uppercase font-bold tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.16em] text-[12px] sm:text-[12px] md:text-[16px] mb-4 whitespace-nowrap block"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            —&nbsp;SHAPE&nbsp;YOUR&nbsp;MIDLIFE&nbsp;JOURNEY&nbsp;—
          </p>
          
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] mt-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your transition from <br />
            <span className="text-[#b31217] font-bold">perimenopause</span> to <br />
            <span className="text-[#b31217] font-bold">menopause</span> is more <br /> 
            than just hormonal <br />
            changes.
          </h2>
        </div>
        
        {/* Right Column (Exact 720px for Desktop) */}
        <div className="text-slate-700 text-[16px] md:text-base leading-relaxed space-y-4 font-medium md:max-w-[720px] w-full" style={{ fontFamily: 'Quicksand, serif' }}>
          <p>
           Midlife can affect your sleep, energy, mood, metabolism, relationships, identity, and how you experience everyday life.
          </p>
          <p>
           We combine evidence-based care with a compassionate, multidisciplinary team to help you access the best midlife science.
          </p>
           <p>
           Together, we create your personalised midlife care roadmap shaped around your symptoms, priorities, and goals.
          </p>
        </div>

      </section>

      {/* Doosri leti hui aurat */}
      <ImageDivider2 />
      
      <StepsSection />
      <CarePlanSection />
      
      {/* Teesri leti hui aurat */}
      <StagesSection />
      <IntegratedCareSection />
      <TeamSection/>
      <FaqSection />
      <CommunitySection />
      <Footer />

    </main>
  );
}