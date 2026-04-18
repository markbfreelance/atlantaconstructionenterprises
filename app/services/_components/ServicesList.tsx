import {
  Wrench,
  Home,
  ArrowDownUp,
  Expand,
  Building2,
  Bath,
  Fence,
  Flame,
  Paintbrush,
  Plug,
  Droplets,
  Sun,
  CircleDot,
  LayoutGrid,
  AppWindow,
} from "lucide-react";

const services = [
  { icon: Wrench, label: "Alterations" },
  { icon: Home, label: "Basements" },
  { icon: ArrowDownUp, label: "Conversions" },
  { icon: Expand, label: "Extensions" },
  { icon: Building2, label: "Apartments" },
  { icon: Bath, label: "Bathrooms" },
  { icon: LayoutGrid, label: "Decks" },
  { icon: Fence, label: "Fencing" },
  { icon: Home, label: "Attics" },
  { icon: Flame, label: "Chimneys" },
  { icon: Home, label: "Dormers" },
  { icon: Building2, label: "Garages" },
  { icon: CircleDot, label: "Concrete" },
  { icon: Home, label: "Driveways" },
  { icon: Home, label: "Kitchens" },
  { icon: Plug, label: "Electrical" },
  { icon: Flame, label: "Fire Damage" },
  { icon: Flame, label: "Heating & A/C" },
  { icon: Paintbrush, label: "Painting" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Wrench, label: "Repairs" },
  { icon: Home, label: "Roofing" },
  { icon: Sun, label: "Sunrooms" },
  { icon: Home, label: "Siding" },
  { icon: Sun, label: "Skylights" },
  { icon: LayoutGrid, label: "Tile" },
  { icon: AppWindow, label: "Windows" },
];

export default function ServicesList() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
          <span className="h-px w-8 bg-amber-500" />
          Full Capabilities
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Complete Service Offerings
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-px bg-steel-100 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={`${service.label}-${index}`}
              className="group relative flex flex-col items-center bg-white p-5 text-center transition-all hover:bg-navy-900"
            >
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              <div className="mb-3 flex h-10 w-10 items-center justify-center bg-steel-50 text-navy-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                <service.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-navy-800 group-hover:text-white transition-colors">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
