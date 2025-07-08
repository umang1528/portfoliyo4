import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_NAME, ARTIST_TAGLINE, portfolioData } from '../constants';
import SectionTitle from '../components/SectionTitle';
import TypewriterEffect from '../components/TypewriterEffect'; 
import ProjectCarousel from '../components/ProjectCarousel';
import HeroBackdropSwiper from '../components/HeroBackdropSwiper';

declare const gsap: any;
declare const ScrollTrigger: any;

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const HomePage: React.FC = () => {

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const heroTexts = gsap.utils.toArray('.hero-text-item');
      heroTexts.forEach((textElement: any) => {
        gsap.from(textElement, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textElement,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        gsap.killTweensOf('.hero-text-item');
      };
    }
  }, []);

  return (
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 space-y-6 md:space-y-10">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden rounded-xl p-16 shadow-xl border border-[var(--theme-border)]">
        
        {/* 🔥 Background Swiper */}
        <HeroBackdropSwiper imageUrls={portfolioData.map(p => p.imageUrl)} />
        <div className="absolute inset-0 bg-[var(--theme-hero-backdrop-overlay)] z-10"></div>

        {/* ✨ Welcome Text OVER Swiper */}
       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">Welcome</h2>
          <p className="text-lg text-[var(--theme-text-primary)] mb-4 leading-relaxed">
            Hi, I'm {ARTIST_NAME}, a passionate {ARTIST_TAGLINE.toLowerCase()} specializing in creating immersive 3D worlds and captivating illustrations.
          </p>
          <p className="text-lg text-[var(--theme-text-primary)] mb-6 leading-relaxed">
            This portfolio is a curated collection of my adventures in art, showcasing projects that blend creativity with cutting-edge techniques.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-semibold rounded-lg text-md hover:bg-[var(--brand-secondary)] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </Link>
        </div>

        {/* Star Icons */}
        <div className="absolute inset-0 opacity-20 z-20">
          {[...Array(10)].map((_, i) => (
            <StarIcon
              key={i}
              className="absolute text-[var(--brand-primary)] animate-pulse"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Text and Button */}
        <div className="relative z-30 flex flex-col items-center justify-center mt-52">
          <div className="hero-text-item">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6">
              <TypewriterEffect
                text={ARTIST_NAME}
                speed={100}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"
              />
            </h1>
          </div>
          <div className="hero-text-item">
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--theme-text-secondary)] mb-10 max-w-3xl mx-auto">
              <TypewriterEffect
                text={ARTIST_TAGLINE}
                speed={50}
                delay={ARTIST_NAME.length * 100 + 300}
              />
            </p>
          </div>
          <div className="hero-text-item">
            <Link
              to="/portfolio"
              className="px-10 py-4 bg-[var(--brand-primary)] text-white font-semibold rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--brand-primary)]/50"
            >
              Explore My Universe
            </Link>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div
          onClick={() =>
            window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })
          }
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ')
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
          }}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30 cursor-pointer"
        >
          <svg
            className="w-8 h-8 text-[var(--brand-primary)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <SectionTitle title="Featured Projects" subtitle="A Sneak Peek into My Portfolio" />
        <ProjectCarousel projects={portfolioData.slice(0, 5)} />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--theme-card-bg)] rounded-xl shadow-xl border border-[var(--theme-border)]">
        <div className="container mx-auto px-4 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--brand-primary)] mb-6">Ready to See More?</h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-xl mx-auto">
            Explore a diverse range of projects, from character designs to intricate environments.
          </p>
          <Link
            to="/portfolio"
            className="px-10 py-4 bg-[var(--brand-secondary)] text-white font-semibold rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--brand-secondary)]/50"
          >
            View My Full Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
