import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import skin from "@/assets/skin.jpg";
import nails from "@/assets/nails.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import { PageHeader } from "@/components/page-header";
import { fetchServices } from "@/lib/api";

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

type CatMeta = {
  key: string;
  title: string;
  tagline: string;
  img: string;
};

const categoryMeta: CatMeta[] = [
  { key: "makeup", title: "Makeup", tagline: "Skin-first, editorial, considered.", img: g1 },
  { key: "hair", title: "Hair", tagline: "Cut, colour, styled with intent.", img: hair },
  { key: "skin", title: "Skin", tagline: "Rituals for calmer, brighter skin.", img: skin },
  { key: "nails", title: "Nails", tagline: "Quiet, precise, gently glossy.", img: nails },
  { key: "mehndi", title: "Mehndi & Ritual", tagline: "Craft passed hand to hand.", img: g2 },
];

function Services() {
  const { data: services, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  const cats = categoryMeta.map((meta) => ({
    ...meta,
    items: (services ?? [])
      .filter((s) => s.category === meta.key)
      .map((s) => ({
        name: s.name,
        price: s.price ?? "",
        note: s.note,
      })),
  }));

  return (
    <div>
      <PageHeader eyebrow="The Menu" title={<>A quiet <em className="italic text-clay">menu</em> of services.</>}>
        Curated, not exhaustive. Every service is delivered by a specialist — never a rotation of hands.
      </PageHeader>

      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        {isLoading && (
          <div className="py-20 text-center text-muted-foreground">Loading services...</div>
        )}

        {isError && (
          <div className="py-20 text-center text-muted-foreground">
            Unable to load services right now.
          </div>
        )}

        {!isLoading && !isError && cats.map((c, i) => (
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
