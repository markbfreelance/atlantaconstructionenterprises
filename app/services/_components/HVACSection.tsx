import Link from "next/link";
import { Fan, Wrench, RefreshCw, ArrowRight } from "lucide-react";

const hvacServices = [
  {
    icon: Fan,
    title: "HVAC Installation",
    description:
      "Complete heating, ventilation, and air conditioning system installations for new construction and retrofits.",
  },
  {
    icon: Wrench,
    title: "HVAC Repairs",
    description:
      "Fast and reliable repair services to get your heating and cooling systems back up and running.",
  },
  {
    icon: RefreshCw,
    title: "HVAC Replacements",
    description:
      "Upgrade your outdated HVAC systems with modern, energy-efficient equipment.",
  },
];

export default function HVACSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
          <span className="h-px w-8 bg-amber-500" />
          Climate Control
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          HVAC Services
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {hvacServices.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden border border-steel-100 bg-white p-7 transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/5"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-steel-100 transition-colors group-hover:bg-amber-500" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-navy-900 text-amber-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-amber-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-600/20"
          >
            Request a Service Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
