import { Truck, Shovel, Landmark } from "lucide-react";

const equipment = [
  {
    icon: Truck,
    title: "Skid Steer Work (Bobcat)",
    description:
      "Excavation, land clearing, and clean-ups using professional-grade skid steer equipment.",
  },
  {
    icon: Shovel,
    title: "Ditch Witch (Line Trenching)",
    description:
      "Underground work for phone lines, electrical lines, water lines, low voltage, and drainage pipes.",
  },
  {
    icon: Landmark,
    title: "Excavation Work",
    description:
      "Track hoe, back hoe operations for ditches, holes, and large-scale line trenching for underground utilities.",
  },
];

export default function HeavyEquipment() {
  return (
    <section className="relative bg-navy-900 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
          <span className="h-px w-8 bg-amber-600" />
          Heavy Machinery
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Equipment &amp; Excavation
        </h2>

        <div className="mt-10 grid gap-px bg-white/5 sm:grid-cols-3">
          {equipment.map((item) => (
            <div
              key={item.title}
              className="group relative bg-navy-900 p-8 transition-all hover:bg-navy-800"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-white/5 text-amber-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-white/5 bg-navy-800/50 p-6">
          <h3 className="text-base font-bold text-white">
            Additional Capabilities
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-navy-300 sm:grid-cols-2">
            {[
              "Soil Compaction — Vibrator Plate",
              "Jumping Jack Compaction",
              "Trench Roller Compaction",
              "Pre-Construction Analysis",
              "Drawing and Design Work",
            ].map((cap) => (
              <div key={cap} className="flex items-center gap-3">
                <span className="h-1 w-4 bg-amber-600" />
                {cap}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
