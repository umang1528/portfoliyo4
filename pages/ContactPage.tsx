
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { SOCIAL_LINKS } from '../constants';
import { SocialLink } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError(null);
    if (!formData.name || !formData.email || !formData.message) {
        setSubmitError("Please fill in all fields.");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setSubmitError("Please enter a valid email address.");
        return;
    }

    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
        setIsSubmitted(false);
        setSubmitError(null);
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionTitle title="Get In Touch" subtitle="Let's Collaborate or Just Say Hello!" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div 
            className="bg-[var(--theme-card-bg)] p-8 rounded-xl shadow-2xl border border-[var(--theme-border)] animate-fadeInUp"
            style={{animationDelay: '100ms'}}
        >
          <div>
            <h3 className="text-2xl font-display font-semibold text-[var(--brand-primary)] mb-6">Send Me a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-3 bg-green-500/20 text-green-700 rounded-md animate-fadeIn">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitError && (
              <div className="mb-4 p-3 bg-red-500/20 text-red-700 rounded-md animate-fadeIn">
                {submitError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--theme-text-secondary)] mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--input-text)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] p-3 placeholder-[var(--theme-text-secondary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--theme-text-secondary)] mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--input-text)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] p-3 placeholder-[var(--theme-text-secondary)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--theme-text-secondary)] mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--input-text)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] p-3 placeholder-[var(--theme-text-secondary)]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div 
            className="space-y-8 animate-fadeInUp" 
            style={{animationDelay: '200ms'}}
        >
          <div>
            <h3 className="text-2xl font-display font-semibold text-[var(--brand-primary)] mb-4">Connect With Me</h3>
            <p className="text-[var(--theme-text-secondary)] mb-6">
              Follow my work, drop a line, or let's discuss your next big idea. I'm active on these platforms:
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[var(--theme-card-bg)] p-3 rounded-lg hover:bg-[var(--theme-border)] transition-colors duration-300 group border border-[var(--theme-border)]"
                >
                  <link.Icon className="h-6 w-6 text-[var(--brand-secondary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                  <span className="text-[var(--theme-text-primary)] group-hover:text-[var(--brand-primary)] transition-colors duration-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--theme-card-bg)] p-6 rounded-xl shadow-xl border border-[var(--theme-border)]">
             <h3 className="text-2xl font-display font-semibold text-[var(--brand-primary)] mb-3">Or Find Me Here</h3>
             <p className="text-[var(--theme-text-secondary)]">Studio Location (Conceptual):</p>
             <p className="text-[var(--theme-text-primary)]">123 Pixel Lane, Creative City, Digital Domain 404</p>
             <div className="mt-4 h-48 w-full bg-[var(--theme-border)] rounded-lg overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/maplocation/600/300" 
                    alt="Conceptual map location"
                    className="w-full h-full object-cover opacity-70"
                />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;