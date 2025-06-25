
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, ARTIST_NAME } from '../constants';
import { NavLinkItem } from '../types';
import ThemeSelector from './ThemeSelector';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tailwind JIT can't see these if they are string literals from CSS vars.
  // Using direct color names here for active states, or use a more complex setup if these need to change per theme.
  // For simplicity, using fixed active colors for now. Consider a data attribute approach if theme-based active colors are needed.
  const activeClassName = "text-[var(--brand-primary)] border-b-2 border-[var(--brand-primary)]"; 
  const inactiveClassName = "text-[var(--theme-text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-300";
  const mobileActiveClassName = "bg-[var(--brand-primary)] text-white"; // Assuming white text contrasts well with brand primary
  const mobileInactiveClassName = "text-[var(--theme-text-secondary)] hover:bg-[var(--theme-border)] hover:text-[var(--brand-primary)]";


  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                 ${isScrolled ? 'bg-[var(--theme-card-bg)]/90 backdrop-blur-md shadow-lg border-b border-[var(--theme-border)]' 
                              : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl md:text-3xl font-display font-bold text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] transition-colors duration-300">
              {ARTIST_NAME}
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {NAV_LINKS.map((link: NavLinkItem) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : inactiveClassName} px-1 py-2 text-sm lg:text-base font-medium`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <ThemeSelector className="ml-6 w-36" />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSelector className="mr-2 w-32 text-xs" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--theme-text-secondary)] hover:text-[var(--brand-primary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--brand-primary)]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                   md:hidden overflow-hidden transition-all duration-500 ease-in-out 
                   bg-[var(--theme-card-bg)]/95 backdrop-blur-md`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${isActive ? mobileActiveClassName : mobileInactiveClassName} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;