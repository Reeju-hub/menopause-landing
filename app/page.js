import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageDivider from '../components/ImageDivider';
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
      
      {/* Text Section (Exact Figma Match for Safari) */}
      <section className="py-16 md:py-24 px-6 md:px-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          
          {/* YAHAN FIX KIYA HAI: The Ultimate Safari Em-Dash Bug Fix */}
          <div className="flex flex-row flex-nowrap items-center w-max max-w-none mb-4">
            <span 
              className="shrink-0 whitespace-nowrap text-[#0B306F] font-bold text-[11.5px] md:text-[16px]"
              style={{ fontFamily: 'Quicksand, serif' }}
            >
              —
            </span>
            <span 
              className="shrink-0 whitespace-nowrap text-[#0B306F] uppercase font-bold text-[11.5px] md:text-[16px] tracking-[0.1em] md:tracking-[0.16em] mx-1 md:mx-2"
              style={{ fontFamily: 'Quicksand, serif' }}
            >
              SHAPE YOUR MIDLIFE JOURNEY
            </span>
            <span 
              className="shrink-0 whitespace-nowrap text-[#0B306F] font-bold text-[11.5px] md:text-[16px]"
              style={{ fontFamily: 'Quicksand, serif' }}
            >
              —
            </span>
          </div>
          
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
        
        <div className="text-slate-700 text-xl md:text-base leading-relaxed space-y-4 font-medium" style={{ fontFamily: 'Quicksand, serif' }}>
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
      <ImageDivider />
      
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