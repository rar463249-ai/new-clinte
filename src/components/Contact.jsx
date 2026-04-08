import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

export default function Contact() {
  const [ref, isVisible] = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', checkin: '', checkout: '', guests: '2', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'd like to book at Madhu Homestay.\n\nName: ${form.name}\nPhone: ${form.phone}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}${form.message ? `\nMessage: ${form.message}` : ''}`;
    window.open(`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = "w-full bg-white border border-sand focus:border-accent rounded-xl px-4 py-3.5 text-charcoal text-sm placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-accent font-semibold text-xs tracking-[0.2em] uppercase">Contact</span>
            <div className="section-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-tight mb-5">
            Book Your Stay
          </h2>
          <p className="text-muted text-lg">We reply within minutes. No formalities — just message or call.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info — Left */}
          <div className={`lg:col-span-2 reveal-left ${isVisible ? 'active' : ''}`}>
            <div className="space-y-5 mb-10">
              {[
                { icon: '📞', label: 'Call Us', value: '+91 6386 683 077', sub: 'Available 8 AM – 10 PM', href: `tel:+91${PHONE}` },
                { icon: '💬', label: 'WhatsApp', value: '+91 6386 683 077', sub: 'Quick reply, easy booking', href: WA_LINK, external: true },
                { icon: '✉️', label: 'Email', value: 'krishneshwartiwari52699@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:krishneshwartiwari52699@gmail.com' },
                { icon: '📍', label: 'Address', value: 'Bajardiha Rd, Jjanki Nagar, Varanasi 221106', sub: 'Near Shri Ram Nagar Colony', href: 'https://maps.google.com/?q=Madhu+Homestay+Varanasi', external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-cream/50 hover:bg-cream border border-transparent hover:border-sand/50 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-lg shrink-0 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold text-charcoal text-sm mt-0.5 break-all">{item.value}</p>
                    <p className="text-muted text-xs mt-1">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Directions */}
            <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl">
              <h4 className="font-heading text-primary font-semibold text-sm mb-2">📌 How to Reach</h4>
              <p className="text-muted text-sm leading-relaxed">
                From Banaras Railway Station: Exit from the main gate, walk towards Bajardiha Road (5 min). We are near Shiv Mandir. Call us — we'll guide you!
              </p>
            </div>
          </div>

          {/* Form — Right */}
          <div className={`lg:col-span-3 reveal-right ${isVisible ? 'active' : ''}`}>
            <form onSubmit={handleSubmit} className="bg-cream/50 border border-sand/50 rounded-3xl p-8 lg:p-10">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Quick Enquiry</h3>
              <p className="text-muted text-sm mb-8">Fill in your details — we'll reach you via WhatsApp.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Phone *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="Your phone" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Check-in *</label>
                  <input type="date" required value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Check-out *</label>
                  <input type="date" required value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className={inputClass} />
                </div>
              </div>

              <div className="mb-5">
                <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Guests</label>
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div className="mb-7">
                <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-2 block">Message (Optional)</label>
                <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Any special request?" />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  sent ? 'bg-green-500 text-white' : 'bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5'
                }`}
              >
                {sent ? '✅ Opening WhatsApp...' : 'Send Enquiry via WhatsApp →'}
              </button>

              <p className="text-muted/50 text-xs text-center mt-4">Your details are safe. We never share your information.</p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={`reveal ${isVisible ? 'active' : ''} mt-16`} style={{ transitionDelay: '0.3s' }}>
          <div className="rounded-2xl overflow-hidden shadow-md border border-sand/50">
            <iframe
              title="Madhu Homestay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.5!2d82.98!3d25.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzM2LjAiTiA4MsKwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              className="border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
