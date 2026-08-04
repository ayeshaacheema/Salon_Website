import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import skin from "@/assets/skin.jpg";
import nails from "@/assets/nails.jpg";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Salon of Beauty" },
      { name: "description", content: "Bridal, hair, skin, nails — a visual archive." },
      { property: "og:title", content: "Gallery — Salon of Beauty" },
      { property: "og:description", content: "A visual archive of our work." },
      { property: "og:image", content: bridal },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; cat: string; ratio: string };
const items: Item[] = [
  { src: bridal, cat: "Bridal", ratio: "aspect-[4/5]" },
  { src: g1, cat: "Makeup", ratio: "aspect-[3/4]" },
  { src: hair, cat: "Hair", ratio: "aspect-[4/5]" },
  { src: g2, cat: "Mehndi", ratio: "aspect-[6/5]" },
  { src: g6, cat: "Bridal", ratio: "aspect-[3/4]" },
  { src: skin, cat: "Skin", ratio: "aspect-[4/5]" },
  { src: g3, cat: "Makeup", ratio: "aspect-[4/5]" },
  { src: g4, cat: "Hair", ratio: "aspect-[4/5]" },
  { src: nails, cat: "Nails", ratio: "aspect-square" },
  { src: g5, cat: "Interior", ratio: "aspect-[5/6]" },
  { src: interior, cat: "Interior", ratio: "aspect-[4/3]" },
  { src: hero, cat: "Editorial", ratio: "aspect-[4/5]" },
];

const filters = ["All", "Bridal", "Makeup", "Hair", "Skin", "Nails", "Mehndi", "Editorial", "Interior"];

function Gallery() {
  const [f, setF] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const shown = f === "All" ? items : items.filter((i) => i.cat === f);

  return (
    <div>
      <PageHeader eyebrow="Portfolio" title={<>A visual <em className="italic text-clay">archive</em>.</>}>
        Our work, quietly gathered. Filter by chapter, or wander.
      </PageHeader>

      <div className="sticky top-[72px] z-30 border-b border-border/60 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-6 py-4 lg:px-12">
          {filters.map((c) => (
            <button
              key={c}
              onClick={() => setF(c)}
              className={`shrink-0 border px-5 py-2 text-[0.68rem] uppercase tracking-[0.32em] transition-colors ${
                f === c ? "border-espresso bg-espresso text-ivory" : "border-border text-espresso hover:border-espresso"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {shown.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it.src)}
              className={`mb-4 block w-full overflow-hidden ${it.ratio} group relative`}
            >
              <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" />
              <span className="absolute bottom-4 left-4 text-[0.68rem] uppercase tracking-[0.32em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">{it.cat}</span>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/95 p-6 veil-in" onClick={() => setOpen(null)}>
          <button className="absolute right-6 top-6 grid h-12 w-12 place-items-center border border-ivory/30 text-ivory hover:bg-ivory/10" aria-label="Close">
            <X />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </div>
  );
}