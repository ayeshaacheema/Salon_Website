import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { fetchReviews, type Review } from "@/lib/api";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Journal — Testimonials — Salon of Beauty" },
      { name: "description", content: "Notes from our brides and regulars." },
      { property: "og:title", content: "Journal — Testimonials — Salon of Beauty" },
      { property: "og:description", content: "Notes from our brides and regulars." },
      { property: "og:image", content: hero },
    ],
  }),
  component: T,
});

function T() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const data = await fetchReviews();
        if (!cancelled) setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        if (!cancelled) setError("Unable to load testimonials right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Notes from our{" "}
            <em className="italic text-clay">clients</em>.
          </>
        }
      >
        Small, honest words from the women we've had the privilege of styling.
      </PageHeader>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">

        {loading && (
          <div className="py-20 text-center text-muted-foreground">
            Loading testimonials...
          </div>
        )}

        {error && (
          <div className="py-20 text-center text-muted-foreground">
            {error}
          </div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No testimonials available yet.
          </div>
        )}

        {!loading && !error && reviews.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <figure
                key={review.id}
                className={`flex flex-col justify-between border border-border bg-card p-8 ${
                  i % 4 === 0
                    ? "md:col-span-2 md:bg-espresso md:text-ivory"
                    : ""
                }`}
              >
                <div>
                  <div
                    className={`flex gap-1 ${
                      i % 4 === 0
                        ? "text-rose-gold"
                        : "text-clay"
                    }`}
                  >
                    {Array.from({ length: review.rating }).map((_, k) => (
                      <Star
                        key={k}
                        size={12}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <blockquote
                    className={`mt-6 font-display italic leading-relaxed ${
                      i % 4 === 0
                        ? "text-3xl text-ivory md:text-4xl"
                        : "text-xl text-espresso"
                    }`}
                  >
                    “{review.comment}”
                  </blockquote>
                </div>

                <figcaption
                  className={`mt-8 border-t pt-4 text-xs uppercase tracking-[0.28em] ${
                    i % 4 === 0
                      ? "border-ivory/20 text-ivory/60"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {review.name} · {review.role}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-20 text-center">
          <Link
            to="/book"
            className="inline-flex bg-espresso px-8 py-4 text-xs uppercase tracking-[0.32em] text-ivory hover:bg-ink"
          >
            Book your visit
          </Link>
        </div>

      </section>
    </div>
  );
}