import { useReveal } from '../hooks/useReveal';

const usps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Perfect Location',
    desc: 'Just 640m from Banaras Railway Station — a 5-minute walk with your luggage. No auto hassle.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Honest Pricing',
    desc: 'AC rooms from ₹1,189/night. No hidden charges, no surprises. What you see is what you pay.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: 'Spotless & Clean',
    desc: 'Daily housekeeping, fresh linen, and sanitized bathrooms. We treat cleanliness like a promise.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Safe & Secure',
    desc: 'CCTV cameras, fire extinguishers, first-aid kit, and a family-run environment you can trust.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Family Friendly',
    desc: 'Family rooms, kids welcome, interconnected rooms available. Perfect for the whole family.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Zero Risk Booking',
    desc: 'Free cancellation up to 24 hours. Pay at hotel. No credit card needed.',
  },
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="amenities" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)`,
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-accent/60" />
            <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Why Choose Us</span>
            <div className="w-12 h-[2px] bg-accent/60" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-5">
            Why Guests Love{' '}
            <span className="text-accent">Madhu Homestay</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Here's what makes us different from every other stay in Varanasi.
          </p>
        </div>

        {/* Cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger ${isVisible ? 'active' : ''}`}>
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-accent/30 transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                {usp.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">{usp.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
