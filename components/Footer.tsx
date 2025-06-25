
import React from 'react';
import { SOCIAL_LINKS, ARTIST_NAME } from '../constants';
import { SocialLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--theme-card-bg)]/50 text-[var(--theme-text-secondary)] py-8 mt-12 border-t border-[var(--theme-border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-[var(--theme-text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-300"
            >
              <link.Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Crafted with pixels and passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;