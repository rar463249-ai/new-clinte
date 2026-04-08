import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className={`reveal-left ${isVisible ? 'active' : ''} relative`}>
            <div className="relative">
              {/* Main image */}
              <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src="	https://images.unsplash.com/photo-1689698401205-f25b0d134afe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHx2YXJhbmFzaSUyMGdoYXQlMjBtb3JuaW5nJTIwaG9seSUyMGNpdHklMjBJbmRpYXxlbnwwfHx8fDE3NzQyNzM3NDl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Comfortable room at Madhu Homestay"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
              </div>
            
              {/* Experience badge */}
              <div className="absolute -left-4 top-8 bg-white rounded-2xl shadow-xl p-5 hidden md:block" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <p className="font-hseading text-3xl font-bold text-accent">100+</p>
                <p className="text-muted text-xs mt-1">Happy Guests</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`reveal-right ${isVisible ? 'active' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">About Us</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-[1.15] mb-6">
              Welcome to{' '}
              <span className="text-accent">Madhu Homestay</span>
            </h2>

            <p className="text-lg text-charcoal/80 font-medium mb-4 leading-relaxed">
              We're not a hotel — we're a family that loves hosting guests.
            </p>

            <div className="space-y-4 text-muted leading-[1.8] mb-10">
              <p>
                Madhu Homestay is a family-run property located in the peaceful Jjanki Nagar area of Varanasi, just 640 meters from Banaras Railway Station. Whether you're here for darshan at Kashi Vishwanath, a peaceful morning at the ghats, or simply exploring the lanes of Banaras — we make sure you have a clean, comfortable, and affordable place to come back to.
              </p>
              <p>
                Our rooms come with AC, free Wi-Fi, private bathrooms, and everything you need for a relaxed stay. We take pride in keeping our property spotless, safe, and welcoming — because every guest is family to us.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { value: '640m', label: 'From Station' },
                { value: '4/5', label: 'Guest Rating' },
                { value: '24/7', label: 'Support' },
                { value: '₹1,189', label: 'Starting Price' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="font-heading text-xl font-bold text-accent">{stat.value}</p>
                  <p className="text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
