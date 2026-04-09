import { useEffect, useState } from 'react';

const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background — User's Varanasi image */}
      <div className="absolute inset-0">
        <img
          src="/images/varanasi-hero.jpg"
          alt="Varanasi Ghats - Boats on the Ganges"
          className="w-full h-full object-cover"
          style={{ animation: 'kenburns 25s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            {/* Top label */}
            <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                KASHI · VARANASI
              </span>
            </div>

            {/* Heading */}
            <h1 className={`font-heading text-[42px] sm:text-6xl md:text-7xl lg:text-[78px] font-bold text-white leading-[1.08] mt-5 mb-7 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Your Comfortable Stay
              <br />
              in the Heart of{' '}
              <span className="italic">Varanasi</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-white/65 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Clean AC rooms, free WiFi, and warm hospitality — just minutes from Kashi Vishwanath Temple & Dashashwamedh Ghat.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[600ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.556 4.13 1.528 5.87L0 24l6.305-1.654A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.84-.53-5.47-1.49l-.39-.24-4.06 1.07 1.08-3.97-.26-.41A9.708 9.708 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Book on WhatsApp
              </a>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-charcoal/80 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-charcoal transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip — Like KuberPalace */}
      <div className={`relative z-10 transition-all duration-1000 delay-[800ms] ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 px-8 py-6 inline-flex flex-wrap gap-x-10 gap-y-4">
            {[
              { label: 'CHECK-IN', value: '10:00 AM' },
              { label: 'CHECK-OUT', value: '11:00 AM' },
              { label: 'STARTING AT', value: '₹5,00/night' },
              { label: 'RATING', value: '4 / 8' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-10 bg-gray-200 hidden sm:block -ml-5" />}
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted mb-1">{item.label}</p>
                  <p className="font-heading text-lg font-bold text-charcoal">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
