import { useState, useEffect } from 'react';

const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
      setShowBack(window.scrollY > 1500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop WhatsApp Float */}
      <div className={`hidden md:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}>
        {/* Back to top */}
        {showBack && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-sand/50 flex items-center justify-center text-charcoal/50 hover:text-primary hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </button>
        )}

        {/* WhatsApp */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          style={{ animation: 'gentlePulse 3s ease-in-out infinite' }}
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.556 4.13 1.528 5.87L0 24l6.305-1.654A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.84-.53-5.47-1.49l-.39-.24-4.06 1.07 1.08-3.97-.26-.41A9.708 9.708 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
          <span className="font-semibold text-sm">Chat with us</span>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-sand shadow-[0_-2px_20px_rgba(0,0,0,0.06)] px-4 py-3">
          <div className="flex gap-3 max-w-lg mx-auto">
            <a
              href={`tel:+91${PHONE}`}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-cream border border-sand rounded-xl text-primary font-semibold text-sm hover:bg-cream-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1fb855] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
