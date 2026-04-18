import { FileText, Shield, Award } from "lucide-react";

const facts = [
  {
    icon: FileText,
    label: "Incorporated",
    value: "January 12, 1998 — S Corporation",
  },
  {
    icon: Shield,
    label: "GA Qualifying Agent License",
    value: "# RLQA000852",
  },
  {
    icon: Shield,
    label: "GA Qualifying Agent License",
    value: "# RLC0001410",
  },
  {
    icon: Award,
    label: "Cobb County Business License",
    value: "# 70779",
  },
  {
    icon: FileText,
    label: "RRP License",
    value: "EPA Certified",
  },
  {
    icon: Award,
    label: "CEO, CFO & Secretary",
    value: "Joseph K. Bendik",
  },
];

export default function CompanyFacts() {
  return (
    <section className="relative bg-navy-900 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
          <span className="h-px w-8 bg-amber-600" />
          Credentials
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Company Facts
        </h2>

        <div className="mt-8 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-navy-900 p-5 transition-all hover:bg-navy-800"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/5 text-amber-500">
                <fact.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
                  {fact.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
