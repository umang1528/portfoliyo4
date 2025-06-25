
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ARTIST_NAME } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionTitle title={`About ${ARTIST_NAME}`} subtitle="My Journey into the Digital Canvas" />

      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 animate-fadeInUp" style={{animationDelay: '100ms'}}>
          <img 
            src={`https://picsum.photos/seed/${ARTIST_NAME.replace(/\s+/g, '')}/600/700`} 
            alt={ARTIST_NAME}
            className="rounded-xl shadow-2xl object-cover w-full h-auto md:max-h-[70vh] transform transition-all duration-500 hover:scale-105 border border-[var(--theme-border)]" 
          />
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <h3 className="text-3xl font-display font-semibold text-[var(--brand-primary)] mb-3">Who I Am</h3>
            <p className="text-lg text-[var(--theme-text-primary)] leading-relaxed">
              Hello! I'm {ARTIST_NAME}, a digital artist with a deep-seated passion for visual storytelling and the boundless possibilities of 3D art. From a young age, I was captivated by the power of images to transport, inspire, and evoke emotion. This fascination led me on a journey through various artistic mediums, ultimately finding my true calling in the digital realm.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{animationDelay: '300ms'}}>
            <h3 className="text-3xl font-display font-semibold text-[var(--brand-primary)] mb-3">My Philosophy</h3>
            <p className="text-lg text-[var(--theme-text-primary)] leading-relaxed">
              I believe art is a conversation between the creator and the audience, a bridge between imagination and reality. My work aims to spark curiosity and wonder, often exploring themes of fantasy, futurism, and the intricate beauty of the natural world reimagined. I strive to blend technical proficiency with artistic intuition, ensuring every piece not only looks stunning but also resonates emotionally.
            </p>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <h3 className="text-3xl font-display font-semibold text-[var(--brand-primary)] mb-3">The Process</h3>
            <p className="text-lg text-[var(--theme-text-primary)] leading-relaxed">
              Each project is an adventure. It begins with an idea, a spark, which then evolves through sketching, modeling, texturing, lighting, and rendering. I am meticulous about details and constantly learning new techniques to push the boundaries of my craft. Collaboration and continuous improvement are core to my process.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{animationDelay: '500ms'}}>
            <h3 className="text-3xl font-display font-semibold text-[var(--brand-primary)] mb-3">Beyond the Canvas</h3>
            <p className="text-lg text-[var(--theme-text-primary)] leading-relaxed">
              When I'm not immersed in digital worlds, I enjoy [mention a hobby or two, e.g., exploring nature, playing musical instruments, reading sci-fi novels]. These experiences often find their way back into my art, enriching my creative palette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;