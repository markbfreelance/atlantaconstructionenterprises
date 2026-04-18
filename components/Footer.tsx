import Link from "next/link";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Clock,
  HardHat,
  Recycle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-navy-200">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="relative -mt-24 mb-12 overflow-hidden bg-gradient-to-r from-navy-800 to-navy-900 p-8 sm:p-10 border border-white/5">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-amber-600/10 to-transparent" />
          <div className="absolute top-0 left-0 h-1 w-24 bg-amber-500" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Ready to Build Something Great?
              </h3>
              <p className="mt-1 text-sm text-navy-300">
                Get a free consultation and estimate for your next project.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-amber-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/25"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center bg-amber-600">
                <HardHat className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-extrabold text-white uppercase">
                  ACE
                </span>
                <span className="block text-[9px] font-medium tracking-[0.2em] text-navy-400 uppercase">
                  Atlanta Construction
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-navy-300">
              Transforming your house into the home of your dreams. Licensed
              Georgia general contractor since 1998.
            </p>
            <div className="mt-5 flex items-start gap-2.5 border-l-2 border-green-500/40 bg-green-500/5 p-3 text-xs text-navy-300">
              <Recycle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-400" />
              <span>
                Environmentally conscious — we recycle all demoed materials.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors hover:text-amber-400"
                  >
                    <ChevronRight className="h-3 w-3 text-navy-500 transition-all group-hover:text-amber-500 group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <span>
                  121 Courtland Circle
                  <br />
                  Powder Springs, GA 30127
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-600" />
                <a href="tel:7707950072" className="hover:text-amber-400 transition-colors">
                  (770) 795-0072
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 shrink-0 text-amber-600" />
                <a href="tel:7707787126" className="hover:text-amber-400 transition-colors">
                  (770) 778-7126
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-600" />
                <a
                  href="mailto:aceincjb@bellsouth.net"
                  className="hover:text-amber-400 transition-colors"
                >
                  aceincjb@bellsouth.net
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <p className="font-semibold text-white">Office Hours</p>
                  <p className="text-navy-300">Mon–Sun: 7:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <p className="font-semibold text-white">Work Hours</p>
                  <p className="text-navy-300">24/7 Available</p>
                </div>
              </div>
            </div>
            <div className="mt-6 border border-white/5 bg-white/[0.02] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-navy-400">
                Cobb County License
              </p>
              <p className="mt-1 text-sm font-semibold text-white">#70779</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/5 pt-6 text-center text-[11px] text-navy-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Atlanta Construction Enterprises,
            Inc. All rights reserved.
          </p>
          <p>Georgia Contractor License #RLQA000852</p>
        </div>
      </div>
    </footer>
  );
}
