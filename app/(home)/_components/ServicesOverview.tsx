import Link from "next/link";
import {
  Bath,
  Hammer,
  Home,
  Paintbrush,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Additions & Extensions",
    description: "Basements, attics, dormers, sunrooms, and garage additions.",
  },
  {
    icon: Bath,
    title: "Kitchen & Bath",
    description:
      "Complete kitchen and bathroom remodeling with custom countertops and tile.",
  },
  {
    icon: Hammer,
    title: "Roofing & Siding",
    description:
      "Full roof replacements, repairs, and exterior siding installations.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishes",
    description: "Interior and exterior painting with professional finishes.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Repairs",
    description:
      "General repairs, plumbing work, and maintenance for your property.",
  },
  {
    icon: Zap,
    title: "Electrical & HVAC",
    description:
      "Electrical work, HVAC installation, repairs, and replacements.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative bg-navy-900 py-20 sm:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
            <span className="h-px w-8 bg-amber-600" />
            Our Expertise
            <span className="h-px w-8 bg-amber-600" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-navy-300">
            From small repairs to full-scale construction — we handle it all
            with precision and craft.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-navy-900 p-8 transition-all hover:bg-navy-800"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-white/5 text-amber-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 border border-amber-600/30 bg-amber-600/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-600 hover:text-white"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
