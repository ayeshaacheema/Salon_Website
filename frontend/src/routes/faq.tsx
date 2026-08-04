import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Salon of Beauty" },
      { name: "description", content: "Answers to the questions we hear most often." },
      { property: "og:title", content: "FAQ — Salon of Beauty" },
      { property: "og:description", content: "Answers to the questions we hear most often." },
    ],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "Bookings",
    qs: [
      { q: "How do I reserve an appointment?", a: "Use our online booking form, WhatsApp us, or call the atelier. We confirm within the day." },
      { q: "How far in advance should I book bridal?", a: "For Nikkah and Walima days we recommend 4–6 months in advance. Peak wedding season books earlier." },
      { q: "Do you require a deposit?", a: "Bridal packages require a 30% deposit to hold your date. Individual services do not." },
    ],
  },
  {
    title: "Bridal",
    qs: [
      { q: "Do you offer bridal trials?", a: "Yes — all bridal packages include a full trial session, usually two to four weeks before your event." },
      { q: "Do you travel for on-site bridal?", a: "Yes, across Islamabad and Rawalpindi. Destination bridal is available on request." },
      { q: "Can you accommodate multiple family members?", a: "Absolutely. Bridal packages can include hair and makeup for your immediate family." },
    ],
  },
  {
    title: "At the atelier",
    qs: [
      { q: "Where are you located?", a: "F-7 Markaz, Islamabad. Parking is available on the street and in the nearby lot." },
      { q: "Are your products safe for sensitive skin?", a: "We only use professional-grade, dermatologically tested products. Let us know about allergies at booking." },
      { q: "Is the salon women-only?", a: "Yes — our space is entirely women-only, staff and clients alike." },
    ],
  },
];

function FAQ() {
  return (
    <div>
      <PageHeader eyebrow="FAQ" title={<>Quiet answers, <em className="italic text-clay">clearly</em> put.</>}>
        The questions we hear most often. Something else on your mind? Please write to us.
      </PageHeader>

      <section className="mx-auto max-w-4xl px-6 py-24">
        {groups.map((g) => (
          <div key={g.title} className="mb-20 last:mb-0">
            <h2 className="mb-8 font-display text-3xl italic text-clay md:text-4xl">{g.title}</h2>
            <div>
              {g.qs.map((item, i) => <Row key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />)}
            </div>
          </div>
        ))}

        <div className="border-t border-border pt-12 text-center">
          <p className="font-display text-2xl italic text-espresso">Still curious?</p>
          <Link to="/contact" className="mt-6 inline-flex link-underline text-xs uppercase tracking-[0.32em]">Write to us →</Link>
        </div>
      </section>
    </div>
  );
}

function Row({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [o, setO] = useState(!!defaultOpen);
  return (
    <div className="border-t border-border last:border-b">
      <button onClick={() => setO(!o)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className="font-display text-xl text-espresso md:text-2xl">{q}</span>
        <span className="shrink-0 text-clay">{o ? <Minus size={20} /> : <Plus size={20} />}</span>
      </button>
      {o && <div className="pb-6 pr-10 text-muted-foreground leading-relaxed rise-in">{a}</div>}
    </div>
  );
}