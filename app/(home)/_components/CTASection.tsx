import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-amber-600 py-20 sm:py-24">
      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-amber-700/50 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%)] bg-[size:20px_20px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 max-w-lg text-base text-amber-100/80">
              Contact us today for a free consultation and estimate. Available 7
              days a week for your construction needs.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-navy-950 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-navy-800 hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7707950072"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-amber-700"
            >
              <Phone className="h-4 w-4" />
              (770) 795-0072
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
