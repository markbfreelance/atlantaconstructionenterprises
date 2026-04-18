"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HardHat, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy-950 border-b border-amber-600/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-[11px] text-navy-400">
            <span className="hidden sm:inline">Licensed Georgia General Contractor</span>
            <span className="hidden sm:inline text-navy-600">|</span>
            <span>Mon–Sun: 7AM – 7PM</span>
          </div>
          <a
            href="tel:7707950072"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Phone className="h-3 w-3" />
            (770) 795-0072
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-navy-900/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-sm bg-amber-600 transition-all group-hover:bg-amber-500 group-hover:shadow-lg group-hover:shadow-amber-600/25">
              <HardHat className="h-6 w-6 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 bg-amber-400 rounded-sm" />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-white uppercase">
                ACE
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] text-navy-300 uppercase">
                Atlanta Construction
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-all ${
                    isActive
                      ? "text-amber-400"
                      : "text-navy-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/25"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-navy-200 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy-900/98 backdrop-blur-md border-b border-white/5 px-4 pb-5 pt-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block border-l-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                  isActive
                    ? "border-amber-500 text-amber-400 bg-amber-500/5"
                    : "border-transparent text-navy-200 hover:border-navy-600 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block bg-amber-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 sm:hidden"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
