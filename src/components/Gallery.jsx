import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const images = [
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', alt: 'AC Double Room', category: 'Rooms' },
  { src: 'https://ik.imagekit.io/zhrq3zl7w/image-600x375.png', alt: 'Modern Bathroom', category: 'Rooms' },
  { src: 'https://images.unsplash.com/photo-1768844335653-7593a132c203?crop=entropy%5Cu0026cs=srgb%5Cu0026fm=jpg%5Cu0026ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHx2YXJhbmFzaSUyMGdoYXQlMjBtb3JuaW5nJTIwaG9seSUyMGNpdHklMjBJbmRpYXxlbnwwfHx8fDE3NzQyNzM3NDl8MA%5Cu0026ixlib=rb-4.1.0%5Cu0026q=85%22,%22description%22:%22Two', alt: 'Cozy Bedroom', category: 'Rooms' },
  { src: 'https://ik.imagekit.io/zhrq3zl7w/image-600x400%20(1).png?updatedAt=1775640681670', alt: 'Varanasi Ghats', category: 'Varanasi' },
  { src: 'https://ik.imagekit.io/zhrq3zl7w/image-800x533.png', alt: 'Property Exterior', category: 'Property' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', alt: 'Room Interior', category: 'Rooms' },
];

export default function Gallery() {
  const [ref, isVisible] = useReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Gallery</span>
            <div className="section-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-tight mb-5">
            Take a <span className="text-primary">Peek Inside</span>
          </h2>
          <p className="text-muted text-lg">See our rooms, facilities, and the Varanasi vibe around us.</p>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 stagger ${isVisible ? 'active' : ''}`}>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className={`${i === 0 ? 'md:col-span-2 md:row-span-2' : ''} relative rounded-2xl overflow-hidden cursor-pointer group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full ${i === 0 ? 'h-full min-h-[300px]' : 'h-52 md:h-56'} object-cover group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg">{img.alt}</span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelected(null)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <button className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setSelected(null)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            style={{ animation: 'scaleIn 0.3s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/70 text-sm">{selected.alt}</p>
        </div>
      )}
    </section>
  );
}
