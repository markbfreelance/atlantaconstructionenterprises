import Link from "next/link";
import { ArrowRight, Phone, Shield, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36 lg:py-44">
      {/* Layered background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-amber-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-amber-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            Licensed General Contractor &bull; Est. 1998
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            We Build What{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-500">Others Only</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-600/20 sm:bottom-2 sm:h-4 lg:bottom-3" />
            </span>
            <br />
            <span className="text-white">Dream About</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-300 sm:text-lg">
            Atlanta Construction Enterprises delivers quality residential and
            commercial construction throughout the greater Atlanta area —
            from complete renovations to ground-up builds.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-amber-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-600/20"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7707950072"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400 backdrop-blur-sm"
            >
              <Phone className="h-4 w-4" />
              (770) 795-0072
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/5 pt-8 sm:gap-10">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-amber-600" />
              <div>
                <p className="text-xl font-extrabold text-white">25+</p>
                <p className="text-[11px] uppercase tracking-wider text-navy-400">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-amber-600" />
              <div>
                <p className="text-xl font-extrabold text-white">GA</p>
                <p className="text-[11px] uppercase tracking-wider text-navy-400">Licensed & Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-600" />
              <div>
                <p className="text-xl font-extrabold text-white">24/7</p>
                <p className="text-[11px] uppercase tracking-wider text-navy-400">Work Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom geometric accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
    </section>
  );
}
