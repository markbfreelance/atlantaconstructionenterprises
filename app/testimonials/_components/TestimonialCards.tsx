import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Robert & Linda M.",
    project: "Driveway Extension",
    quote:
      "ACE did an outstanding job extending our driveway. The concrete work was flawless and they finished ahead of schedule. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    project: "Basement Addition",
    quote:
      "We wanted to finish our basement and Joe's team delivered beyond our expectations. Professional from start to finish, great communication throughout.",
    rating: 5,
  },
  {
    name: "Sarah & David K.",
    project: "Kitchen Remodel",
    quote:
      "Our kitchen renovation turned out beautifully. The attention to detail on the countertops and backsplash was impressive. ACE truly transformed our space.",
    rating: 5,
  },
  {
    name: "Patricia W.",
    project: "Roof Replacement",
    quote:
      "After storm damage, ACE replaced our entire roof quickly and professionally. They handled everything including the insurance paperwork. A+ service.",
    rating: 5,
  },
  {
    name: "Michael & Angela R.",
    project: "Sunroom Addition",
    quote:
      "The sunroom ACE built for us has become our favorite room in the house. Quality craftsmanship and fair pricing. We'll definitely use them again.",
    rating: 5,
  },
  {
    name: "Thomas H.",
    project: "Deck Construction",
    quote:
      "Joe and his crew built a beautiful deck for our backyard. They were respectful of our property and cleaned up every day. Couldn't be happier.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "text-navy-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCards() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden border border-steel-100 bg-white transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/5"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-steel-100 transition-colors group-hover:bg-amber-500" />
              <div className="flex flex-1 flex-col p-7">
                <Quote className="mb-4 h-8 w-8 text-amber-200" />
                <p className="flex-1 text-sm leading-relaxed text-navy-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-steel-100 pt-4">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-2 text-sm font-bold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-600">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External review links */}
        <div className="mt-14 relative overflow-hidden border border-navy-800 bg-navy-900 p-8 sm:p-10 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative">
            <h3 className="text-lg font-bold text-white">
              See More Reviews
            </h3>
            <p className="mt-2 text-sm text-navy-300">
              Check out our profiles on trusted review platforms:
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.angieslist.com/AngiesList/Review/5529047"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-navy-200 transition-all hover:border-amber-500/50 hover:text-amber-400"
              >
                Angi Reviews
              </a>
              <a
                href="https://www.buildzoom.com/contractor/atlanta-construction-enterprises-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-navy-200 transition-all hover:border-amber-500/50 hover:text-amber-400"
              >
                BuildZoom Profile
              </a>
            </div>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 bg-amber-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
