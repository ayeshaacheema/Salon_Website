import { createFileRoute, Link } from "@tanstack/react-router";
import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import skin from "@/assets/skin.jpg";
import nails from "@/assets/nails.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Salon of Beauty" },
      { name: "description", content: "Bridal, hair, skin, nails, mehndi and more — a curated menu." },
      { property: "og:title", content: "Services — Salon of Beauty" },
      { property: "og:description", content: "A curated menu of bridal, hair, skin and nail services." },
      { property: "og:image", content: bridal },
    ],
  }),
  component: Services,
});

type Cat = {
  key: string;
  title: string;
  tagline: string;
  img: string;
  items: { name: string; price: string; note?: string }[];
};

const cats: Cat[] = [
  {
    key: "makeup", title: "Makeup", tagline: "Skin-first, editorial, considered.", img: g1,
    items: [
      { name: "Bridal Makeup", price: "on request", note: "Includes trial" },
      { name: "Party Makeup", price: "PKR 18,000" },
      { name: "Editorial / Shoot", price: "on request" },
      { name: "Casual / Soft Glam", price: "PKR 12,000" },
    ],
  },
  {
    key: "hair", title: "Hair", tagline: "Cut, colour, styled with intent.", img: hair,
    items: [
      { name: "Signature Cut", price: "PKR 5,500" },
      { name: "Colour · Balayage", price: "from PKR 22,000" },
      { name: "Keratin · Botox", price: "from PKR 18,000" },
      { name: "Bridal Hair Styling", price: "PKR 15,000" },
    ],
  },
  {
    key: "skin", title: "Skin", tagline: "Rituals for calmer, brighter skin.", img: skin,
    items: [
      { name: "Hydrafacial", price: "PKR 14,000" },
      { name: "Signature Facial", price: "PKR 9,500" },
      { name: "Bridal Radiance Course", price: "from PKR 45,000" },
      { name: "Chemical Peel", price: "PKR 11,000" },
    ],
  },
  {
    key: "nails", title: "Nails", tagline: "Quiet, precise, gently glossy.", img: nails,
    items: [
      { name: "Manicure", price: "PKR 3,500" },
      { name: "Pedicure", price: "PKR 4,500" },
      { name: "Gel Overlay", price: "PKR 5,500" },
      { name: "Minimal Nail Art", price: "PKR 6,500" },
    ],
  },
  {
    key: "mehndi", title: "Mehndi & Ritual", tagline: "Craft passed hand to hand.", img: g2,
    items: [
      { name: "Bridal Mehndi", price: "on request" },
      { name: "Party Mehndi", price: "PKR 4,500" },
      { name: "Threading & Waxing", price: "from PKR 800" },
      { name: "Bridal Waxing Ritual", price: "PKR 8,500" },
    ],
  },
];

function Services() {
  return (
    <div>
      <PageHeader eyebrow="The Menu" title={<>A quiet <em className="italic text-clay">menu</em> of services.</>}>
        Curated, not exhaustive. Every service is delivered by a specialist — never a rotation of hands.
      </PageHeader>

      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        {cats.map((c, i) => (
          <section id={c.key} key={c.key} className={`grid gap-12 border-b border-border py-20 lg:grid-cols-12 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:[direction:ltr]" : ""}`}>
              <img src={c.img} alt={c.title} className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
            <div className={`lg:col-span-7 ${i % 2 ? "lg:[direction:ltr]" : ""}`}>
              <p className="eyebrow">0{i + 1} · Chapter</p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-7xl">
                {c.title}
              </h2>
              <p className="mt-4 font-display text-2xl italic text-clay">{c.tagline}</p>
              <dl className="mt-10 border-t border-border">
                {c.items.map((it) => (
                  <div key={it.name} className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                    <dt>
                      <span className="font-display text-2xl italic text-espresso">{it.name}</span>
                      {it.note && <span className="ml-3 text-xs uppercase tracking-[0.28em] text-clay">{it.note}</span>}
                    </dt>
                    <dd className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{it.price}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/book" className="mt-10 inline-flex bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory hover:bg-ink">
                Book {c.title} →
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}