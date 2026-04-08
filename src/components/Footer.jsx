const PHONE = '6386683077';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'd like to book a room at Madhu Homestay. Please share availability.")}`;

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA Band  */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Ready to Experience Varanasi?</h3>
            <p className="text-white/70 text-sm">Book directly for the best price — no OTA commission.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white text-charcoal rounded-full font-semibold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl"
            >
              Book on WhatsApp
            </a>
            <a
              href={`tel:+91${PHONE}`}
              className="px-7 py-3.5 bg-white/15 border border-white/30 hover:bg-white/25 text-white rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer — #1F1E1C */}
      <div className="bg-footer text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
            {/* Brand */}
            <div>
              <div className="mb-5">
                <span className="font-heading font-bold text-xl">
                  Madhu<span className="text-accent">Homestay</span>
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                A family-run homestay offering clean, affordable AC rooms near Banaras Railway Station. Rated 4/5 on Goibibo.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📞</span>
                  <a href={`tel:+91${PHONE}`} className="hover:text-white transition-colors">+91 6386 683 077</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✉️</span>
                  <a href="mailto:krishneshwartiwari52699@gmail.com" className="hover:text-white transition-colors break-all text-xs">krishneshwartiwari52699@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <span className="text-xs">Bajardiha Rd, Jjanki Nagar,<br />Varanasi, UP 221106</span>
                </li>
              </ul>
            </div>

            {/* Find Us */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-6">Also Find Us On</h4>
              <div className="space-y-3">
                {['Goibibo', 'MakeMyTrip', 'Agoda'].map((ota) => (
                  <span key={ota} className="block text-sm text-white/40 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-white/60 transition-all duration-300 cursor-default">
                    {ota}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© 2026 Madhu Homestay, Varanasi. All rights reserved.</p>
            <p className="text-white/15 text-xs">Crafted with care for our guests</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
