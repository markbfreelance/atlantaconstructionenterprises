import { Shield, Award, Recycle } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Georgia licensed residential and general contractor with full insurance coverage for your peace of mind.",
    number: "01",
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    description:
      "Incorporated in 1998, we bring decades of construction expertise to every project we take on.",
    number: "02",
  },
  {
    icon: Recycle,
    title: "Eco-Conscious",
    description:
      "We recycle all demoed materials at recycling centers or state-approved municipalities.",
    number: "03",
  },
];

export default function WelcomeSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - text */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              <span className="h-px w-8 bg-amber-500" />
              Why Choose ACE
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Building Excellence,{" "}
              <span className="text-amber-600">Delivering Trust</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Atlanta Construction Enterprises is your trusted partner for
              residential and commercial construction in the greater Atlanta
              area. With over two decades of experience and a commitment to
              quality, we turn your vision into reality.
            </p>
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600" />
          </div>

          {/* Right - cards */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-steel-100 bg-white p-6 transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/5"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-steel-100 transition-colors group-hover:bg-amber-500" />
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy-900 text-amber-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <span className="text-2xl font-extrabold text-steel-100 group-hover:text-amber-100 transition-colors">
                        {item.number}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
