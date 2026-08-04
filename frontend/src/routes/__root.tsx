import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_20%,oklch(0.86_0.03_68/0.6),transparent)]" />
      <div className="max-w-xl text-center">
        <p className="eyebrow mb-6"><span className="rule mr-3" />Lost in the mirror</p>
        <h1 className="text-[22vw] leading-none tracking-tighter text-espresso sm:text-[10rem]">404</h1>
        <p className="mt-6 font-display text-2xl italic text-espresso">The page you seek has stepped away.</p>
        <p className="mt-3 text-sm text-muted-foreground">Perhaps a fresh look, a new appointment, or a return home.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link to="/" className="link-underline text-sm tracking-widest uppercase">Return home</Link>
          <Link to="/book" className="inline-flex items-center justify-center bg-espresso px-8 py-3 text-xs uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-ink">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Salon of Beauty — Luxury Beauty House, Islamabad" },
      { name: "description", content: "An intimate atelier for bridal, hair, skin and nails in Islamabad. Where quiet luxury meets craft." },
      { name: "author", content: "Salon of Beauty" },
      { property: "og:title", content: "Salon of Beauty — Luxury Beauty House, Islamabad" },
      { property: "og:description", content: "An intimate atelier for bridal, hair, skin and nails in Islamabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f4efe4" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-ivory text-espresso">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="bottom-center" toastOptions={{ style: { fontFamily: "var(--font-sans)" } }} />
    </QueryClientProvider>
  );
}
