import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Salon of Beauty" },
      { name: "description", content: "Visit our F-7 atelier or write to us." },
      { property: "og:title", content: "Contact — Salon of Beauty" },
      { property: "og:description", content: "Visit our F-7 atelier or write to us." },
      { property: "og:image", content: interior },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent", { description: "We'll reply within the day." });
    setF({ name: "", email: "", msg: "" });
  };
  return (
    <div>
      <PageHeader eyebrow="Contact" title={<>Come <em className="italic text-clay">visit</em>. Or write.</>}>
        F-7 Markaz, Islamabad. Private appointments only — do drop us a line before dropping in.
      </PageHeader>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div className="space-y-10">
          <div>
            <p className="eyebrow">The Atelier</p>
            <p className="mt-3 font-display text-3xl italic text-espresso">Salon of Beauty</p>
          </div>

          <ul className="space-y-6 text-espresso">
            <li className="flex gap-4 border-b border-border pb-6">
              <MapPin size={20} className="mt-1 shrink-0 text-clay" />
              <div>
                <p className="eyebrow">Visit</p>
                <p className="mt-2 font-display text-xl italic">F-7 Markaz, Islamabad</p>
                <p className="text-sm text-muted-foreground">Pakistan · Women-only</p>
              </div>
            </li>
            <li className="flex gap-4 border-b border-border pb-6">
              <Phone size={20} className="mt-1 shrink-0 text-clay" />
              <div>
                <p className="eyebrow">Call</p>
                <p className="mt-2 font-display text-xl italic">+92 300 000 0000</p>
                <p className="text-sm text-muted-foreground">WhatsApp preferred</p>
              </div>
            </li>
            <li className="flex gap-4 border-b border-border pb-6">
              <Mail size={20} className="mt-1 shrink-0 text-clay" />
              <div>
                <p className="eyebrow">Write</p>
                <p className="mt-2 font-display text-xl italic">hello@salonofbeauty.pk</p>
              </div>
            </li>
          </ul>

          <div>
            <p className="eyebrow">Follow the atelier</p>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com" className="grid h-12 w-12 place-items-center border border-border text-espresso hover:border-clay hover:text-clay"><Instagram size={18} /></a>
              <a href="https://facebook.com" className="grid h-12 w-12 place-items-center border border-border text-espresso hover:border-clay hover:text-clay"><Facebook size={18} /></a>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="border border-border bg-cream p-8 md:p-12">
          <p className="eyebrow">Send us a note</p>
          <h2 className="mt-4 font-display text-3xl italic text-espresso md:text-4xl">Tell us a little.</h2>

          <label className="mt-10 block">
            <span className="eyebrow">Name</span>
            <input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none" />
          </label>
          <label className="mt-8 block">
            <span className="eyebrow">Email</span>
            <input required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none" />
          </label>
          <label className="mt-8 block">
            <span className="eyebrow">Message</span>
            <textarea required rows={4} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-espresso focus:border-espresso focus:outline-none" />
          </label>

          <button type="submit" className="mt-10 inline-flex bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory hover:bg-ink">Send message →</button>
        </form>
      </section>

      <section className="relative h-[500px] border-y border-border">
        <iframe
          title="Salon of Beauty location"
          className="absolute inset-0 h-full w-full grayscale contrast-125"
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.0433%2C33.7115%2C73.0633%2C33.7215&layer=mapnik"
          loading="lazy"
        />
      </section>
    </div>
  );
}