import { useState, useEffect } from 'react';

const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Explore', href: '#attractions' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — Text only, no M box */}
          <a href="#home" className="group">
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}>
              Madhu<span className="text-accent">Homestay</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                  scrolled ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-accent`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA — Red button */}
          <div className="hidden lg:block">
            <a
              href={`tel:+91${PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/35 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? 'text-charcoal hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-1 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3.5 rounded-xl text-charcoal/80 hover:bg-gray-50 hover:text-charcoal font-medium text-sm tracking-wide transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a href={`tel:+91${PHONE}`} className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors">
              📞 Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
