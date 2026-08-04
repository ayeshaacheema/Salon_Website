import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/bridal", label: "Bridal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-espresso/30 font-display text-lg italic text-espresso">S</span>
          <span className="hidden font-display text-lg tracking-[0.24em] uppercase text-espresso sm:block">
            Salon of Beauty
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-espresso after:scale-x-100" }}
              inactiveProps={{ className: "text-espresso/70" }}
              className="relative text-xs uppercase tracking-[0.28em] transition-colors hover:text-espresso after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-espresso after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="hidden whitespace-nowrap bg-espresso px-6 py-3 text-[0.68rem] uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-ink md:inline-flex"
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-11 w-11 place-items-center border border-espresso/30 text-espresso lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="veil-in fixed inset-0 top-[72px] z-40 flex flex-col bg-ivory px-6 py-10 lg:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl italic text-espresso"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory"
          >
            Book Appointment
          </Link>
          <div className="mt-auto pt-10 text-sm text-muted-foreground">
            F-7 Markaz, Islamabad · +92 300 000 0000
          </div>
        </div>
      )}
    </header>
  );
}