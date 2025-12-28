
import { Timeline } from '@/components/Timeline';
import { Gallery } from '@/components/Gallery';
import { 
  DAD_NAME, 
  PROGRAM_DATA, 
  PHOTO_DATA, 
  SPECIAL_MENTIONS 
} from '@/constants';
import { Heart, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-md mx-auto min-h-screen shadow-xl bg-[#FDFBF7] pb-20 relative">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center px-8 text-center bg-[#1A2E44] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-7 w-24 h-24 border-t-2 border-l-2 border-[#C5A059] opacity-40"/>
        <div className="absolute bottom-10 right-7 w-24 h-24 border-b-2 border-r-2 border-[#C5A059] opacity-40"/>
        
        <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[#C5A059] font-medium tracking-[0.3em] uppercase mb-4 text-sm">
            A Milestone Celebration
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Celebrating 70 Years of {DAD_NAME}
          </h1>
          <p className="text-white/70 text-base sm:text-lg italic max-w-xs mx-auto">
            Program of Events & Cherished Memories
          </p>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center space-y-2 animate-bounce opacity-50">
          <span className="text-white text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="text-white w-6 h-6" />
        </div>
        
        {/* Subdued Background Placeholder (Lightweight) */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
          }}
        ></div>
      </section>

      {/* Intro Message */}
      <section className="py-16 px-8 text-center bg-stone-50 border-b border-stone-200">
        <Heart className="w-8 h-8 text-[#C5A059] mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl mb-4 text-stone-800">Welcome</h2>
        <p className="text-stone-600 leading-relaxed text-lg">
          We are so glad you could join us today to celebrate {DAD_NAME}&apos;s 70th trip around the sun. 
          Your presence means the world to our family.
        </p>
      </section>

      {/* Program Section */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-2 text-stone-800">Program</h2>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>
          <p className="text-stone-500 text-sm uppercase tracking-widest">Order of Events</p>
        </div>
        <Timeline events={PROGRAM_DATA} />
      </section>

      {/* Photo Section */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl mb-2 text-stone-800">70 Years in Pictures</h2>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>
          <p className="text-stone-500 text-sm uppercase tracking-widest px-4">From early beginnings to recent adventures</p>
        </div>
        <div className="px-4">
          <Gallery groups={PHOTO_DATA} />
        </div>
      </section>

      {/* Special Mentions Section */}
      <section className="py-20 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-stone-800">Special Mentions</h2>
          <div className="w-8 h-px bg-stone-300 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-6">
          {SPECIAL_MENTIONS.map((mention, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2">
                {mention.role}
              </span>
              <h4 className="text-xl font-bold text-stone-800 mb-1">{mention.name}</h4>
              {mention.note && (
                <p className="text-stone-500 italic text-sm">{mention.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <footer className="py-24 px-10 text-center bg-[#1A2E44] text-white">
        <Heart className="w-8 h-8 text-[#C5A059] mx-auto mb-8 fill-[#C5A059]" />
        <h2 className="text-3xl mb-6">Thank You</h2>
        <p className="text-white/80 leading-relaxed text-lg mb-12 italic">
          &rdquo;The greatest gift of life is friendship, and I have received it.&ldquo;
        </p>
        <p className="text-sm uppercase tracking-[0.2em] text-[#C5A059]">
          With Love, The Family
        </p>
        <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-xs">
          © 2025 {DAD_NAME}&apos;s 70th Anniversary
        </div>
      </footer>

      {/* Sticky Bottom Bar (Simple Cues) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-medium z-50">
        <span>EST. 1955</span>
        <span className="uppercase tracking-widest text-[#C5A059]">{DAD_NAME} is 70</span>
        <span>DEC 2025</span>
      </div>
    </div>
  );
};
