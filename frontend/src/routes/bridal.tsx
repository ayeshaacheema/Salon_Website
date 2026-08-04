import { createFileRoute, Link } from "@tanstack/react-router";
import bridal from "@/assets/bridal.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g2 from "@/assets/gallery-2.jpg";
import hero from "@/assets/hero.jpg";
import { PageHeader } from "@/components/page-header";
import { Check } from "lucide-react";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Packages — Salon of Beauty" },
      { name: "description", content: "Signature bridal packages for Nikkah, Mehndi and Walima days." },
      { property: "og:title", content: "Bridal Packages — Salon of Beauty" },
      { property: "og:description", content: "Signature bridal packages for your wedding week." },
      { property: "og:image", content: bridal },
    ],
  }),
  component: Bridal,
});

const packages = [
  {
    name: "The Nikkah",
    tagline: "Your first look.",
    price: "PKR 85,000",
    img: hero,
    includes: ["Bridal makeup + trial", "Signature hair styling", "Draping assistance", "Bridal touch-up kit"],
  },
  {
    name: "The Aisle",
    tagline: "The complete bride.",
    price: "PKR 165,000",
    img: bridal,
    includes: [
      "Nikkah + Barat + Walima days",
      "Bridal trial & consultation",
      "Hair styling for all events",
      "Bridal mehndi (feet + hands)",
      "Skin ritual · pre-bridal",
      "On-site coordination",
    ],
    featured: true,
  },
  {
    name: "The Walima",
    tagline: "A softer, second glow.",
    price: "PKR 65,000",
    img: g6,
    includes: ["Reception makeup", "Hair styling", "Draping assistance", "Refresh touch-ups"],
  },
];

function Bridal() {
  return (
    <div>
      <PageHeader eyebrow="Bridal Collection" title={<>Your <em className="italic text-clay">wedding</em> week, quietly held.</>}>
        A curated week of appointments — bridal, hair, mehndi and skin — designed so you never lift a finger.
      </PageHeader>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`group flex flex-col overflow-hidden border ${p.featured ? "border-espresso bg-espresso text-ivory lg:-mt-8" : "border-border bg-card text-espresso"}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                {p.featured && <p className="mb-4 text-[0.68rem] uppercase tracking-[0.32em] text-rose-gold">Most Loved</p>}
                <h3 className={`font-display text-4xl ${p.featured ? "text-ivory" : "text-espresso"}`}>{p.name}</h3>
                <p className={`mt-2 font-display text-lg italic ${p.featured ? "text-rose-gold" : "text-clay"}`}>{p.tagline}</p>
                <p className={`mt-6 text-xs uppercase tracking-[0.28em] ${p.featured ? "text-ivory/60" : "text-muted-foreground"}`}>Investment</p>
                <p className={`mt-2 font-display text-3xl ${p.featured ? "text-ivory" : "text-espresso"}`}>{p.price}</p>
                <ul className={`mt-8 space-y-3 border-t pt-6 text-sm ${p.featured ? "border-ivory/15 text-ivory/85" : "border-border text-muted-foreground"}`}>
                  {p.includes.map((it) => (
                    <li key={it} className="flex gap-3">
                      <Check size={14} className={`mt-1 shrink-0 ${p.featured ? "text-rose-gold" : "text-clay"}`} /> {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`mt-8 inline-flex justify-center px-6 py-4 text-xs uppercase tracking-[0.32em] ${
                    p.featured ? "bg-rose-gold text-espresso hover:bg-ivory" : "bg-espresso text-ivory hover:bg-ink"
                  }`}
                >
                  Reserve this package
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <img src={g2} alt="Bridal mehndi" className="aspect-[6/5] w-full object-cover" loading="lazy" />
          <div>
            <p className="eyebrow">Bespoke</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-6xl">
              Something <em className="italic text-clay">entirely</em> yours.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Prefer a package built around your week? We create bespoke bridal itineraries — including destination and multi-day.
            </p>
            <Link to="/contact" className="mt-10 link-underline text-xs uppercase tracking-[0.32em]">Request a bespoke consultation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}