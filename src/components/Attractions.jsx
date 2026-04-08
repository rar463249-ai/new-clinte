import { useReveal } from '../hooks/useReveal';

const attractions = [

  { icon: '🚂', name: 'Manduadih Railway Station', distance: '770m', time: '8 min walk', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: '🐒', name: 'Durga Temple (Monkey Temple)', distance: '2.7 km', time: '10 min', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { icon: '🙏', name: 'Sankat Mochan Temple', distance: '2.9 km', time: '12 min', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { icon: '🔥', name: 'Harishchandra Ghat', distance: '4.2 km', time: '15 min', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: '⛩️', name: 'Kedar Ghat', distance: '4.2 km', time: '15 min', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: '🌊', name: 'Assi Ghat', distance: '5.3 km', time: '18 min', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: '🛕', name: 'Dashashwamedh Ghat', distance: '5.4 km', time: '20 min', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: '🕉️', name: 'Kashi Vishwanath Temple', distance: '5.6 km', time: '20 min', color: 'bg-orange-50 text-orange-600 border-orange-100' },
];

export default function Attractions() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="attractions" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left - header & image */}
          <div className={`reveal-left ${isVisible ? 'active' : ''} lg:sticky lg:top-28`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Explore</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-5">
              Varanasi From <span className="text-primary">Our Doorstep</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              All the famous temples, ghats, and landmarks are just a short ride away. Our staff can help arrange autos and guides.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1768844335653-7593a132c203?crop=entropy%5Cu0026cs=srgb%5Cu0026fm=jpg%5Cu0026ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHx2YXJhbmFzaSUyMGdoYXQlMjBtb3JuaW5nJTIwaG9seSUyMGNpdHklMjBJbmRpYXxlbnwwfHx8fDE3NzQyNzM3NDl8MA%5Cu0026ixlib=rb-4.1.0%5Cu0026q=85%22,%22description%22:%22Two"
                alt="Varanasi Ghats"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right - attractions list */}
          <div className={`space-y-3 stagger ${isVisible ? 'active' : ''}`}>
            {attractions.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 p-5 bg-cream/50 hover:bg-cream rounded-2xl transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-sm border border-transparent hover:border-sand/50"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-charcoal text-sm">{item.name}</h4>
                  <p className="text-muted text-xs mt-0.5">{item.time} ride</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-heading font-bold text-primary text-sm">{item.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
