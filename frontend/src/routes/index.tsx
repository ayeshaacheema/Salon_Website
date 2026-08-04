import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import skin from "@/assets/skin.jpg";
import nails from "@/assets/nails.jpg";
import interior from "@/assets/interior.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Marquee />
      <FeaturedOffers />
      <Signature />
      <BridalFeature />
      <ServicesTriptych />
      <GalleryPreview />
      <WhyUs />
      <Experts />
      <Testimonial />
      <InstagramStrip />
      <Location />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-ivory pt-32 pb-20 lg:min-h-[100vh] lg:pt-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow rise-in"><span className="rule mr-3" />Est. Islamabad · Beauty House</p>
          <h1 className="rise-in mt-6 font-display text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl lg:text-[6.5rem]" style={{ animationDelay: "80ms" }}>
            Quiet
            <span className="block italic text-clay">luxury</span>
            <span className="block">for the</span>
            <span className="block">modern <em className="italic text-clay">bride</em>.</span>
          </h1>
          <div className="rise-in mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "220ms" }}>
            <Link to="/book" className="group inline-flex items-center gap-3 bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-ink">
              Book Appointment
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services" className="link-underline text-xs uppercase tracking-[0.32em] text-espresso">
              Discover Services
            </Link>
          </div>
          <div className="mt-16 grid max-w-md grid-cols-3 gap-8 border-t border-border pt-8 text-espresso">
            {[
              ["12+", "Years of craft"],
              ["4.9", "Client rating"],
              ["1,800+", "Brides styled"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl">{n}</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="veil-in relative aspect-[4/5] w-full overflow-hidden">
            <img src={hero} alt="Salon of Beauty bride" className="h-full w-full object-cover" width={1600} height={1920} />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ivory/60 to-transparent" />
          </div>
          <div className="absolute -left-4 bottom-8 hidden max-w-[240px] border border-border bg-ivory p-6 shadow-editorial lg:block">
            <p className="eyebrow">Now Reserving</p>
            <p className="mt-3 font-display text-xl italic text-espresso">Winter Bridal 2026</p>
            <p className="mt-2 text-xs text-muted-foreground">Limited dates remaining for December–February.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Bridal Couture", "Hair Studio", "Skin & Facials", "Nail Atelier", "Mehndi", "Editorial Makeup"];
  return (
    <section className="overflow-hidden border-y border-border/60 bg-cream py-6">
      <div className="ticker-track flex whitespace-nowrap">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-10 pr-10 font-display text-2xl italic text-espresso/70 md:text-3xl">
            {words.map((w) => (
              <span key={w} className="flex items-center gap-10">
                {w}
                <span className="h-1 w-1 rounded-full bg-clay" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const offers = [
  { tag: "Bridal", title: "The Winter Bride", note: "Reserve your wedding date.", cta: "Reserve Now" },
  { tag: "Skin", title: "Hydrafacial Ritual", note: "Limited time · this month.", cta: "Book This Offer" },
  { tag: "Hair", title: "Hair Spa Package", note: "Restore, gloss, revive.", cta: "Explore" },
];

function FeaturedOffers() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12">
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow"><span className="rule mr-3" />Seasonal</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight text-espresso md:text-6xl">
            Featured <em className="italic text-clay">offers</em>, quietly considered.
          </h2>
        </div>
        <Link to="/services" className="link-underline hidden text-xs uppercase tracking-[0.32em] md:inline-flex">All services</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((o, i) => (
          <article
            key={o.title}
            className={`group relative flex flex-col justify-between border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-editorial ${
              i === 0 ? "md:row-span-2 md:min-h-[520px] bg-espresso text-ivory" : "min-h-[280px]"
            }`}
          >
            <div>
              <p className={`text-[0.68rem] uppercase tracking-[0.32em] ${i === 0 ? "text-rose-gold" : "text-clay"}`}>{o.tag}</p>
              <h3 className={`mt-6 font-display text-3xl leading-tight md:text-4xl ${i === 0 ? "text-ivory md:text-5xl" : "text-espresso"}`}>{o.title}</h3>
              <p className={`mt-4 text-sm ${i === 0 ? "text-ivory/70" : "text-muted-foreground"}`}>{o.note}</p>
            </div>
            <Link
              to="/book"
              className={`mt-8 inline-flex items-center gap-3 border-b pb-1 text-xs uppercase tracking-[0.32em] transition-all group-hover:gap-5 ${
                i === 0 ? "border-rose-gold text-rose-gold" : "border-espresso text-espresso"
              }`}
            >
              {o.cta} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-12">
        <figure className="relative">
          <img src={interior} alt="Salon of Beauty interior" className="aspect-[5/4] w-full object-cover" width={1808} height={1200} loading="lazy" />
          <figcaption className="absolute -bottom-6 left-6 border border-border bg-ivory px-4 py-2 font-display text-sm italic text-espresso">
            Our atelier · F-7 Markaz
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow"><span className="rule mr-3" />Our Philosophy</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-espresso md:text-6xl">
            Beauty is a <em className="italic text-clay">quiet</em> conversation between you and your reflection.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            An intimate house — never a factory. Every appointment is unhurried, private, and shaped around you.
          </p>
          <Link to="/about" className="mt-10 link-underline text-xs uppercase tracking-[0.32em] text-espresso">Our story</Link>
        </div>
      </div>
    </section>
  );
}

function BridalFeature() {
  return (
    <section className="relative bg-ivory py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5 lg:pt-24">
          <p className="eyebrow"><span className="rule mr-3" />Chapter One</p>
          <h2 className="mt-6 font-display text-5xl leading-[1] tracking-tight text-espresso md:text-7xl">
            The Bridal <em className="italic text-clay">Collection</em>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Editorial makeup, sculpted hair, mehndi and skin — a single day, unhurried and yours.
          </p>
          <Link to="/bridal" className="mt-10 inline-flex items-center gap-3 bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory hover:bg-ink">
            View Bridal Packages →
          </Link>
          <dl className="mt-16 space-y-6 border-t border-border pt-8">
            {[
              ["The Aisle", "Full bridal + Nikkah day"],
              ["The Mehndi", "Bridal mehndi + party glam"],
              ["The Walima", "Reception look + hair"],
            ].map(([t, d]) => (
              <div key={t} className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-6">
                <dt className="font-display text-2xl italic text-espresso">{t}</dt>
                <dd className="text-right text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-7">
          <img src={bridal} alt="Bridal makeup by Salon of Beauty" className="aspect-[4/5] w-full object-cover" width={1408} height={1760} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

const triptych = [
  { img: hair, tag: "Hair Studio", title: "Sculpted, glossy, undone.", href: "/services" },
  { img: skin, tag: "Skin & Facials", title: "A ritual for calmer skin.", href: "/services" },
  { img: nails, tag: "Nail Atelier", title: "Considered, never loud.", href: "/services" },
];

function ServicesTriptych() {
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow"><span className="rule mr-3" />Studios</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-espresso md:text-6xl">
              Three rooms.<br />One <em className="italic text-clay">quiet</em> standard.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground md:pt-8">
            Each studio is led by a specialist. Small teams, seasoned hands, one-to-one attention — always.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {triptych.map((s, i) => (
            <Link
              key={s.tag}
              to={s.href}
              className={`group relative block overflow-hidden bg-ivory ${i === 1 ? "lg:mt-16" : ""}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.img} alt={s.tag} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-clay">{s.tag}</p>
                  <p className="mt-2 font-display text-2xl italic text-espresso">{s.title}</p>
                </div>
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-espresso transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const items = [
    { src: g1, span: "row-span-2" },
    { src: g3, span: "" },
    { src: g6, span: "" },
    { src: g2, span: "" },
    { src: g4, span: "row-span-2" },
    { src: g5, span: "" },
  ];
  return (
    <section className="bg-ivory py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow"><span className="rule mr-3" />Portfolio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-espresso md:text-6xl">
              A house of <em className="italic text-clay">craft</em>.
            </h2>
          </div>
          <Link to="/gallery" className="link-underline text-xs uppercase tracking-[0.32em]">Full gallery →</Link>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {items.map((it, i) => (
            <div key={i} className={`group overflow-hidden ${it.span}`}>
              <img src={it.src} alt="Salon work" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const pts = [
    { n: "01", t: "Trained abroad", d: "Educated in London and Dubai; refined in Islamabad." },
    { n: "02", t: "Small by design", d: "Private appointments only. Never rushed, never overbooked." },
    { n: "03", t: "Clean products", d: "Curated pigments and formulas — safe for skin, kind to hair." },
    { n: "04", t: "One-to-one", d: "The artist you meet is the artist who does your look." },
  ];
  return (
    <section className="bg-espresso py-28 text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-12">
        <div>
          <p className="eyebrow text-ivory/60"><span className="rule mr-3" />Why us</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl">
            The details are the <em className="italic text-rose-gold">work</em>.
          </h2>
        </div>
        <dl className="grid gap-10 sm:grid-cols-2">
          {pts.map((p) => (
            <div key={p.n} className="border-t border-ivory/15 pt-6">
              <div className="font-display text-sm text-rose-gold">{p.n}</div>
              <dt className="mt-3 font-display text-2xl italic">{p.t}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ivory/70">{p.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Experts() {
  const team_ = [
    { name: "Ayesha Malik", role: "Founder · Bridal Director", img: team },
    { name: "Zara Ahmed", role: "Hair Studio Lead", img: g4 },
    { name: "Hina Raza", role: "Skin & Facial Specialist", img: g5 },
  ];
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow"><span className="rule mr-3" />The Atelier</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-espresso md:text-6xl">
              Meet our <em className="italic text-clay">experts</em>.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A small team of specialists. Each with a decade of practice, an editorial eye, and a warm bedside manner.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team_.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="font-display text-2xl italic text-espresso">{m.name}</h3>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-clay">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-ivory py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-8 flex justify-center gap-1 text-rose-gold">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
        </div>
        <blockquote className="font-display text-3xl leading-[1.25] italic text-espresso md:text-5xl">
          “They didn’t just do my bridal — they held my hand through the entire week. I felt seen, quiet and beautiful.”
        </blockquote>
        <p className="mt-10 text-xs uppercase tracking-[0.32em] text-muted-foreground">— Mahnoor S. · Winter Bride, 2025</p>
        <Link to="/testimonials" className="mt-10 link-underline inline-flex text-xs uppercase tracking-[0.32em]">Read more stories →</Link>
      </div>
    </section>
  );
}

function InstagramStrip() {
  const imgs = [g1, g2, g3, g4, g5, g6];
  return (
    <section className="bg-cream py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="eyebrow">On Instagram · @salonofbeauty</p>
        <h2 className="mt-4 font-display text-3xl italic text-espresso md:text-5xl">Moments from the atelier</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto px-6 pb-4 lg:px-12">
        {imgs.map((src, i) => (
          <a key={i} href="https://instagram.com" className="group relative h-56 w-56 shrink-0 overflow-hidden md:h-72 md:w-72">
            <img src={src} alt="Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-espresso py-28 text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="eyebrow text-ivory/60"><span className="rule mr-3" />Visit</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Find us in <em className="italic text-rose-gold">F-7</em>, Islamabad.
          </h2>
          <div className="mt-10 space-y-6 text-sm text-ivory/80">
            <p className="font-display text-2xl italic text-ivory">F-7 Markaz, Islamabad</p>
            <p>Tuesday — Saturday · 10:00 to 20:00</p>
            <p>Sunday · 11:00 to 18:00</p>
          </div>
          <div className="mt-10 flex gap-4">
            <Link to="/book" className="bg-ivory px-8 py-4 text-xs uppercase tracking-[0.32em] text-espresso hover:bg-cream">Book Appointment</Link>
            <Link to="/contact" className="link-underline text-xs uppercase tracking-[0.32em] text-ivory">Get directions →</Link>
          </div>
        </div>
        <div className="relative min-h-[380px] overflow-hidden border border-ivory/20">
          <iframe
            title="Salon of Beauty location"
            className="absolute inset-0 h-full w-full grayscale contrast-125"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.0433%2C33.7115%2C73.0633%2C33.7215&layer=mapnik"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
