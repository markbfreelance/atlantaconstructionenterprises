"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Smartphone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full border border-steel-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 placeholder:text-navy-300";

  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              <span className="h-px w-8 bg-amber-500" />
              Reach Out
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Atlanta Construction Enterprises, Inc.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              We&apos;d love to hear from you. Give us a call, send an email, or
              fill out the form and we&apos;ll get back to you promptly.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "121 Courtland Circle\nPowder Springs, GA 30127" },
                { icon: Phone, label: "Office Phone", value: "(770) 795-0072", href: "tel:7707950072" },
                { icon: Smartphone, label: "Cell", value: "(770) 778-7126", href: "tel:7707787126" },
                { icon: Mail, label: "Email", value: "aceincjb@bellsouth.net", href: "mailto:aceincjb@bellsouth.net" },
                { icon: Clock, label: "Hours", value: "Office: Mon–Sun, 7 AM – 7 PM\nWork Hours: 24/7" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 text-amber-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-navy-900 hover:text-amber-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-navy-800 whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="relative overflow-hidden border border-steel-100 bg-white p-6 sm:p-8">
            <div className="absolute top-0 left-0 h-1 w-24 bg-amber-500" />
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center bg-green-500/10">
                  <Send className="h-7 w-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Thank you for reaching out. We&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-lg font-bold text-navy-900">
                  Send Us a Message
                </h3>
                <p className="mb-6 text-xs text-navy-500">
                  Fill out the form below and we&apos;ll respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy-600">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required className={inputClasses} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy-600">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" className={inputClasses} placeholder="(770) 555-0123" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy-600">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required className={inputClasses} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy-600">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" className={inputClasses} placeholder="Kitchen Remodel Inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy-600">
                      Message *
                    </label>
                    <textarea id="message" name="message" rows={5} required className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 bg-amber-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
