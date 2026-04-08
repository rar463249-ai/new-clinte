import { useReveal } from '../hooks/useReveal';

const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

const rooms = [
  {
    name: 'Classic Double Room',
    price: '1,189',
    capacity: '2 Adults',
    bed: '1 Double Bed',
    size: '200 sq ft',
    image: 'https://ik.imagekit.io/zhrq3zl7w/image-600x400.png',
    description: 'Perfect for couples or solo travelers. Air-conditioned room with flat-screen TV, private bathroom, and a balcony view.',
    amenities: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Free Wi-Fi', 'Free Parking', 'Toiletries', 'Bottled Water', 'Balcony'],
    tag: 'Most Popular',
  },
{
    name: 'Classic Double Room',
    price: '1,189',
    capacity: '2 Adults',
    bed: '1 Double Bed',
    size: '200 sq ft',
    image: 'https://ik.imagekit.io/zhrq3zl7w/image-600x400.png',
    description: 'Perfect for couples or solo travelers. Air-conditioned room with flat-screen TV, private bathroom, and a balcony view.',
    amenities: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Free Wi-Fi', 'Free Parking', 'Toiletries', 'Bottled Water', 'Balcony'],
    tag: 'Most Popular',
  },
{
    name: 'Classic Double Room',
    price: '1,189',
    capacity: '2 Adults',
    bed: '1 Double Bed',
    size: '200 sq ft',
    image: 'https://ik.imagekit.io/zhrq3zl7w/image-600x400.png',
    description: 'Perfect for couples or solo travelers. Air-conditioned room with flat-screen TV, private bathroom, and a balcony view.',
    amenities: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Free Wi-Fi', 'Free Parking', 'Toiletries', 'Bottled Water', 'Balcony'],
    tag: 'Most Popular',
  },

  
  {
    name: 'Spacious Family Room',
    price: '1,789',
    capacity: '4 Adults',
    bed: '2 Double Beds',
    size: '320 sq ft',
    image: 'https://ik.imagekit.io/zhrq3zl7w/image-800x533%20(1).png',
    description: 'Ideal for families. Two double beds, spacious layout, private balcony, and a bathtub in the bathroom.',
    amenities: ['Air Conditioning', 'Flat-Screen TV', 'Bathtub & Shower', 'Free Wi-Fi', 'Free Parking', 'Toiletries', 'Bottled Water', 'Terrace'],
    tag: 'Best for Families',
  },
];

export default function Services() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white relative">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Our Rooms</span>
            <div className="section-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-tight mb-5">
            Comfort Meets <span className="text-accent">Affordability</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Everything you need for a perfect Varanasi stay — at a price that makes you smile.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`reveal ${isVisible ? 'active' : ''} group bg-cream/50 rounded-3xl overflow-hidden border border-sand/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {room.tag}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-5 right-5 bg-white rounded-xl px-4 py-2.5 shadow-lg">
                  <span className="font-heading text-2xl font-bold text-accent">₹{room.price}</span>
                  <span className="text-muted text-xs"> / night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">{room.name}</h3>
                
                {/* Room specs */}
                <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    {room.bed}
                  </span>
                </div>

                <p className="text-muted leading-relaxed mb-6">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {room.amenities.map((a) => (
                    <span key={a} className="text-xs font-medium text-primary/70 bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                      {a}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Strip */}
        <div className={`reveal ${isVisible ? 'active' : ''} mt-16`} style={{ transitionDelay: '0.3s' }}>
          <div className="bg-cream rounded-2xl p-8 lg:p-10">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-6 text-center">Included With Every Stay</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {[
                { icon: '🧹', label: 'Daily Housekeeping' },
                { icon: '🎥', label: 'CCTV Security' },
                { icon: '🔥', label: 'Fire Safety' },
                { icon: '🗣️', label: 'Bilingual Staff' },
                { icon: '📰', label: 'Daily Newspaper' },
                { icon: '🧺', label: 'Laundry Service' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-3 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-xs font-medium text-charcoal/70">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
