import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border/60 bg-ivory pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-12">
        <div>
          <p className="eyebrow"><span className="rule mr-3" />{eyebrow}</p>
        </div>
        <div>
          <h1 className="rise-in font-display text-5xl leading-[1.02] tracking-tight text-espresso md:text-7xl lg:text-[6rem]">
            {title}
          </h1>
          {children && <div className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{children}</div>}
        </div>
      </div>
    </section>
  );
}