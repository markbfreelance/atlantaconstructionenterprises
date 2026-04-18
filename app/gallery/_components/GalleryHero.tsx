export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
          <span className="h-px w-8 bg-amber-600" />
          Portfolio
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Our <span className="text-amber-500">Project Gallery</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-300 sm:text-lg">
          Browse through our portfolio of completed projects — from home
          additions and kitchen remodels to driveways and commercial work.
        </p>
        <div className="mt-6 h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600" />
      </div>
    </section>
  );
}
