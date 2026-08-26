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
      
      {/* Text Section */}
      <section className="py-16 md:py-24 px-6 md:px-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* YAHAN FIX KIYA HAI: Mathematical width aur nowrap jise Safari tod hi nahi sakta */}
          <div style={{ width: '100%', overflow: 'visible' }}>
            <p
              className="text-[#0B306F] uppercase font-bold mb-4"
              style={{ 
                fontFamily: 'Quicksand, serif',
                whiteSpace: 'nowrap', /* Text ko ek line mein lock karta hai */
                letterSpacing: '0.1em', /* Spacing thodi kam ki hai taaki fit aaye */
                fontSize: 'clamp(10px, 3.2vw, 16px)' /* Mobile par chota (approx 12px) aur desktop par 16px */
              }}
            >
              —&nbsp;SHAPE&nbsp;YOUR&nbsp;MIDLIFE&nbsp;JOURNEY&nbsp;—
            </p>
          </div>
          
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2]"
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