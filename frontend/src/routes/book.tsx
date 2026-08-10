import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import bridal from "@/assets/bridal.jpg";
import interior from "@/assets/interior.jpg";
import { fetchServices, createBooking } from "@/lib/api";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Salon of Beauty" },
      { name: "description", content: "Reserve a private appointment at our F-7 atelier." },
      { property: "og:title", content: "Book Appointment — Salon of Beauty" },
      { property: "og:description", content: "Reserve a private appointment in Islamabad." },
      { property: "og:image", content: interior },
    ],
  }),
  component: Book,
});

const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

const categories = [
  { key: "makeup", label: "Makeup" },
  { key: "hair", label: "Hair" },
  { key: "skin", label: "Skin" },
  { key: "nails", label: "Nails" },
  { key: "mehndi", label: "Mehndi & Ritual" },
];

const isValidPhone = (phone: string) => /^(\+92|0)3\d{9}$/.test(phone.replace(/\s+/g, ""));

function Book() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    category: "",
    serviceId: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  const { data: services, isLoading: loadingServices, isError: servicesError } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  const bookingMutation = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      setStep(3);
    },
    onError: (err: Error) => {
      toast.error("Something went wrong", { description: err.message });
    },
  });

  const set = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v });
  const canNext =
    (step === 1 && form.serviceId && form.date && form.time) ||
    (step === 2 && form.name && isValidPhone(form.phone));

  const selectedService = services?.find((s) => s.id === Number(form.serviceId));

  const submit = () => {
    bookingMutation.mutate({
      serviceId: Number(form.serviceId),
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      notes: form.notes || undefined,
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
      <aside className="relative hidden bg-espresso pt-32 text-ivory lg:block">
        <img src={bridal} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div>
            <Link to="/" className="eyebrow text-ivory/60">← Salon of Beauty</Link>
            <h1 className="mt-16 font-display text-5xl leading-[1] text-ivory xl:text-7xl">
              Reserve a<br/><em className="italic text-rose-gold">quiet</em> hour.
            </h1>
            <p className="mt-6 max-w-sm text-ivory/70">
              Private appointments only. We'll confirm within the day.
            </p>
          </div>
          <div className="border-t border-ivory/15 pt-6 text-sm text-ivory/70">
            <p>F-7 Markaz · Islamabad</p>
            <p>+92 300 000 0000</p>
          </div>
        </div>
      </aside>

      <div className="flex flex-col justify-center bg-ivory px-6 pt-32 pb-16 lg:px-16">
        <div className="mx-auto w-full max-w-lg">
          <div className="mb-10 flex items-center gap-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div className={`h-px w-full ${s <= step ? "bg-espresso" : "bg-border"}`} />
                <div className={`mt-2 text-[0.65rem] uppercase tracking-[0.28em] ${s <= step ? "text-espresso" : "text-muted-foreground"}`}>
                  0{s} · {s === 1 ? "Service" : s === 2 ? "Details" : "Done"}
                </div>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="rise-in">
              <h2 className="font-display text-4xl text-espresso md:text-5xl">Choose your <em className="italic text-clay">appointment</em>.</h2>
              <p className="mt-2 text-muted-foreground">All the details, quietly.</p>

              <label className="mt-10 block">
                <span className="eyebrow">Category</span>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value, serviceId: "" })}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none"
                >
                  <option value="">— Select —</option>
                  {categories.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
                </select>
              </label>

              <label className="mt-8 block">
                <span className="eyebrow">Service</span>
                <select
                  value={form.serviceId}
                  onChange={(e) => set("serviceId", e.target.value)}
                  disabled={!form.category || loadingServices || servicesError}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none disabled:opacity-40"
                >
                  <option value="">{!form.category ? "Select a category first" : "— Select —"}</option>
                  {services?.filter((s) => s.category === form.category).map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
                {servicesError && (
                  <span className="mt-2 block text-xs text-red-600">
                    Unable to load services. Please try again later.
                  </span>
                )}
              </label>

              <label className="mt-8 block">
                <span className="eyebrow">Preferred date</span>
                <input type="date" min={today} value={form.date} onChange={(e) => set("date", e.target.value)} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none" />
              </label>

              <div className="mt-8">
                <span className="eyebrow">Preferred time</span>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {times.map((t) => (
                    <button key={t} onClick={() => set("time", t)} className={`border px-2 py-3 text-sm transition-colors ${form.time === t ? "border-espresso bg-espresso text-ivory" : "border-border text-espresso hover:border-espresso"}`}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rise-in">
              <h2 className="font-display text-4xl text-espresso md:text-5xl">A few <em className="italic text-clay">details</em>.</h2>
              <label className="mt-10 block">
                <span className="eyebrow">Your name</span>
                <input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none" placeholder="Ayesha Khan" />
              </label>
              <label className="mt-8 block">
                <span className="eyebrow">Phone</span>
                <input
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  maxLength={14}
                  inputMode="tel"
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 font-display text-xl italic text-espresso focus:border-espresso focus:outline-none"
                  placeholder="03001234567"
                />
                {form.phone && !isValidPhone(form.phone) && (
                  <span className="mt-2 block text-xs text-red-600">Enter a valid number, e.g. 03001234567</span>
                )}
              </label>
              <label className="mt-8 block">
                <span className="eyebrow">Notes · optional</span>
                <textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} rows={3} className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-sm text-espresso focus:border-espresso focus:outline-none" placeholder="Occasion, preferences, allergies…" />
              </label>

              <div className="mt-10 border border-border bg-cream p-6 text-sm">
                <p className="eyebrow">You're reserving</p>
                <p className="mt-3 font-display text-2xl italic text-espresso">{selectedService?.name}</p>
                <p className="mt-1 text-muted-foreground">{form.date} · {form.time}</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="rise-in py-10 text-center">
              <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full border border-rose-gold text-rose-gold">✓</div>
              <h2 className="font-display text-5xl leading-tight text-espresso">Thank you, <em className="italic text-clay">{form.name.split(" ")[0]}</em>.</h2>
              <p className="mt-4 text-muted-foreground">Your request is with us. We'll confirm your appointment within the day at {form.phone}.</p>
              <Link to="/" className="mt-10 inline-flex bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory hover:bg-ink">Return home</Link>
            </div>
          )}

          {step < 3 && (
            <div className="mt-12 flex items-center justify-between">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="link-underline text-xs uppercase tracking-[0.32em]">← Back</button>
              ) : <span />}
              <button
                disabled={!canNext || bookingMutation.isPending}
                onClick={() => (step === 2 ? submit() : setStep(step + 1))}
                className="inline-flex bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-border disabled:text-muted-foreground"
              >
                {step === 2 ? (bookingMutation.isPending ? "Submitting…" : "Confirm request") : "Continue"} →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}