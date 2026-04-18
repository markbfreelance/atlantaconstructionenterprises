import { Recycle, Shield, Building2, ExternalLink } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section className="relative bg-navy-900 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Eco-conscious */}
          <div className="group relative overflow-hidden border border-white/5 bg-navy-800/50 p-8 transition-all hover:border-green-500/30">
            <div className="absolute top-0 left-0 h-1 w-16 bg-green-500" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-green-500/10 text-green-400">
              <Recycle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Environmentally Conscious
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-300">
              ACE is committed to sustainability. We recycle all demoed
              materials at either recycling centers or state-approved
              municipalities, minimizing our environmental impact on every
              project.
            </p>
          </div>

          {/* Licensing */}
          <div className="group relative overflow-hidden border border-white/5 bg-navy-800/50 p-8 transition-all hover:border-amber-500/30">
            <div className="absolute top-0 left-0 h-1 w-16 bg-amber-500" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-amber-500/10 text-amber-400">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Licensed &amp; Certified
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                State of Georgia Residential/General Contractor
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                Qualifying Agent License # RLQA000852
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                Qualifying Agent License # RLC0001410
              </li>
            </ul>
          </div>
        </div>

        {/* External links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="http://www.angieslist.com/AngiesList/Review/5529047"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-navy-200 transition-all hover:border-amber-500/50 hover:text-amber-400"
          >
            Find Us on Angi
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.buildzoom.com/contractor/atlanta-construction-enterprises-inc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-navy-200 transition-all hover:border-amber-500/50 hover:text-amber-400"
          >
            View on BuildZoom
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
