import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: "We came to Varanasi for family darshan and stayed at Madhu Homestay for 3 nights. Rooms were clean, AC worked perfectly, and the owner uncle was very helpful. He even helped us arrange an auto to the ghats. Will definitely come back!",
    initial: 'R',
    bg: 'bg-blue-500',
  },
  {
    name: 'Priya Sharma',
    location: 'Lucknow',
    rating: 5,
    text: "Best budget stay in Varanasi! So close to the railway station — we walked with our luggage in 5 minutes. Free Wi-Fi, hot water, and the room had a nice balcony. At this price, you won't find anything better.",
    initial: 'P',
    bg: 'bg-rose-500',
  },
  {
    name: 'Amit & Sneha Patel',
    location: 'Ahmedabad',
    rating: 4,
    text: "We booked the family room for our parents and us. Two big beds, clean bathroom, and very peaceful neighbourhood. Staff was polite and parking was free. Only wish they had a restaurant, but plenty of dhabas nearby.",
    initial: 'A',
    bg: 'bg-emerald-500',
  },
  {
    name: 'Mohd. Arif',
    location: 'Patna',
    rating: 5,
    text: "I travel to Varanasi often for work and this homestay is my go-to place now. Affordable, clean, and the location is unbeatable. WhatsApp booking was super easy — I just messaged and they confirmed in 5 minutes.",
    initial: 'M',
    bg: 'bg-violet-500',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useReveal();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Reviews</span>
            <div className="section-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-tight mb-5">
            What Our <span className="text-primary">Guests Say</span>
          </h2>

          {/* OTA Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { name: 'Goibibo', score: '4/5 ⭐' },
              { name: 'MakeMyTrip', score: 'Verified ✓' },
              { name: 'Agoda', score: 'Listed ✓' },
            ].map((ota) => (
              <span key={ota.name} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-medium text-charcoal/70 border border-sand/50">
                {ota.name} <span className="text-primary font-semibold">{ota.score}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className={`reveal ${isVisible ? 'active' : ''} max-w-4xl mx-auto`}>
          <div
            className="relative bg-white rounded-3xl shadow-lg shadow-black/5 p-8 md:p-12 border border-sand/30"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-accent/15">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-accent' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Text */}
            <p className="font-heading text-xl md:text-2xl text-charcoal leading-relaxed mb-8 min-h-[120px]">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${testimonials[current].bg} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonials[current].initial}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonials[current].name}</p>
                  <p className="text-muted text-sm">{testimonials[current].location}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setCurrent((current - 1 + testimonials.length) % testimonials.length); setIsAutoPlaying(false); }}
                  className="w-10 h-10 rounded-full border border-sand hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-300"
                  aria-label="Previous review"
                >
                  <svg className="w-4 h-4 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => { next(); setIsAutoPlaying(false); }}
                  className="w-10 h-10 rounded-full border border-sand hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-300"
                  aria-label="Next review"
                >
                  <svg className="w-4 h-4 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-accent w-8' : 'bg-sand w-4 hover:bg-accent/40'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
