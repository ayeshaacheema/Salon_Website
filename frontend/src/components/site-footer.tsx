import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-espresso text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-24 lg:px-12">
        <div className="grid gap-16 border-b border-ivory/15 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-ivory/60">Salon of Beauty</p>
            <h3 className="mt-6 font-display text-4xl leading-tight text-ivory md:text-5xl">
              Reserve a quiet <em className="text-rose-gold not-italic">hour</em> for yourself.
            </h3>
            <Link
              to="/book"
              className="mt-10 inline-flex items-center gap-3 border-b border-ivory/60 pb-1 text-sm uppercase tracking-[0.32em] transition-all hover:gap-5 hover:border-rose-gold hover:text-rose-gold"
            >
              Book Appointment →
            </Link>
          </div>

          <div>
            <p className="eyebrow text-ivory/50">Visit</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-rose-gold" /> F-7 Markaz, Islamabad, Pakistan</li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-rose-gold" /> +92 300 000 0000</li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-rose-gold" /> hello@salonofbeauty.pk</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/50">Explore</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li><Link to="/services" className="hover:text-rose-gold">Services</Link></li>
              <li><Link to="/bridal" className="hover:text-rose-gold">Bridal Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-rose-gold">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-rose-gold">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-rose-gold">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/50">Hours</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li className="flex justify-between border-b border-ivory/10 pb-2"><span>Tue — Sat</span><span>10:00 — 20:00</span></li>
              <li className="flex justify-between border-b border-ivory/10 pb-2"><span>Sunday</span><span>11:00 — 18:00</span></li>
              <li className="flex justify-between"><span>Monday</span><span className="text-ivory/50">Closed</span></li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-ivory/25 transition-colors hover:border-rose-gold hover:text-rose-gold"><Instagram size={16} /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-ivory/25 transition-colors hover:border-rose-gold hover:text-rose-gold"><Facebook size={16} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 text-xs uppercase tracking-[0.28em] text-ivory/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Salon of Beauty · Islamabad</p>
          <p>Crafted with intent · Every detail considered</p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-ivory/10 py-8">
        <div className="ticker-track flex whitespace-nowrap font-display text-6xl italic text-ivory/10 md:text-8xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10 pr-10">
              Bridal · Hair · Skin · Nails · Mehndi · Bridal · Hair · Skin · Nails · Mehndi ·
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}