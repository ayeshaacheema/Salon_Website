import { createFileRoute, Link } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import team from "@/assets/team.jpg";
import bridal from "@/assets/bridal.jpg";
import hero from "@/assets/hero.jpg";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Salon of Beauty, Islamabad" },
      { name: "description", content: "An intimate atelier in F-7 Markaz. Twelve years of craft, quietly considered." },
      { property: "og:title", content: "About — Salon of Beauty" },
      { property: "og:description", content: "Twelve years of craft, quietly considered." },
      { property: "og:image", content: hero },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHeader eyebrow="Our Story" title={<>Twelve years of quiet <em className="italic text-clay">craft</em>.</>}>
        Founded in 2013 above a garden in F-7, we grew into an atelier that treats beauty like a private conversation.
      </PageHeader>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-28 lg:grid-cols-[1.2fr_1fr] lg:px-12">
        <img src={interior} alt="Interior" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        <div className="lg:pt-12">
          <p className="eyebrow">The House</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-5xl">
            A room that <em className="italic text-clay">listens</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Warm terracotta walls, arched vanity mirrors, marble counters, hushed music. The room was designed for
            calm — because good work happens in calm rooms.
          </p>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-12">
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-6xl">
              Ayesha <em className="italic text-clay">Malik</em>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              London-trained, Islamabad-rooted. Ayesha has quietly styled over 1,800 brides and led seasonal editorials
              for Pakistan’s most-read style journals.
            </p>
            <ul className="mt-10 space-y-4 border-t border-border pt-8 text-sm text-espresso">
              <li className="flex justify-between border-b border-border pb-3"><span>Education</span><span className="text-muted-foreground">London College of Fashion</span></li>
              <li className="flex justify-between border-b border-border pb-3"><span>Founded</span><span className="text-muted-foreground">2013 · Islamabad</span></li>
              <li className="flex justify-between border-b border-border pb-3"><span>Featured</span><span className="text-muted-foreground">Vogue India · Grazia · Hello!</span></li>
            </ul>
          </div>
          <img src={team} alt="Ayesha Malik" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-6 py-28 lg:grid-cols-3 lg:px-12">
        {[
          ["Warmth", "You are a guest first, a client second."],
          ["Craft", "Every stroke — considered, unhurried, precise."],
          ["Quiet", "We do not shout. Our work speaks softly."],
        ].map(([t, d]) => (
          <div key={t} className="border-t border-border pt-6">
            <h3 className="font-display text-3xl italic text-espresso">{t}</h3>
            <p className="mt-4 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="relative bg-espresso py-28 text-ivory">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <img src={bridal} alt="" className="mx-auto mb-12 aspect-square w-32 object-cover grayscale" loading="lazy" />
          <h2 className="font-display text-3xl leading-tight italic text-ivory md:text-5xl">
            “We wanted a house that felt like a friend’s dressing room — beautiful, private, and yours for the hour.”
          </h2>
          <p className="mt-8 text-xs uppercase tracking-[0.32em] text-ivory/60">Ayesha Malik · Founder</p>
          <Link to="/book" className="mt-12 inline-flex bg-ivory px-8 py-4 text-xs uppercase tracking-[0.32em] text-espresso hover:bg-cream">Reserve a visit</Link>
        </div>
      </section>
    </div>
  );
}