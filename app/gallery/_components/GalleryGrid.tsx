import Link from "next/link";
import { ImageIcon, ArrowRight } from "lucide-react";

const projects = [
  { title: "Carport Addition", category: "Additions" },
  { title: "Counter Tops & Back Splash", category: "Kitchen" },
  { title: "Custom Chimney Addition", category: "Exterior" },
  { title: "Custom Fence Gate", category: "Fencing" },
  { title: "Driveway Extension", category: "Concrete" },
  { title: "Basement Addition", category: "Additions" },
  { title: "Bathroom Remodel", category: "Bathrooms" },
  { title: "Deck Construction", category: "Exterior" },
  { title: "Roof Replacement", category: "Roofing" },
  { title: "Kitchen Renovation", category: "Kitchen" },
  { title: "Sunroom Addition", category: "Additions" },
  { title: "Siding Installation", category: "Exterior" },
];

export default function GalleryGrid() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px bg-steel-100 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden bg-white transition-all"
            >
              {/* Placeholder image area */}
              <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <ImageIcon className="h-10 w-10 text-navy-500 transition-all group-hover:text-amber-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-amber-600/0 transition-colors group-hover:bg-amber-600/10" />
              </div>

              {/* Info */}
              <div className="p-5 border-l-2 border-transparent group-hover:border-amber-500 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  {project.category}
                </span>
                <h3 className="mt-1 text-sm font-bold text-navy-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-amber-500/20 bg-amber-500/5 p-8 text-center">
          <p className="text-sm text-navy-600">
            <strong className="text-navy-900">Want to see more?</strong>{" "}
            Contact us to schedule a consultation and we&apos;ll share
            additional project photos and references.
          </p>
          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-2 bg-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20"
          >
            Get in Touch
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
