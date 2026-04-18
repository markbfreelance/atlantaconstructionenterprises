export default function MapEmbed() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
          <span className="h-px w-8 bg-amber-500" />
          Location
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Find Us
        </h2>
        <p className="mt-2 text-sm text-navy-600">
          Located in Powder Springs, Georgia — serving the greater Atlanta area.
        </p>

        <div className="mt-8 overflow-hidden border border-steel-100 shadow-lg">
          <iframe
            title="Atlanta Construction Enterprises Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2!2d-84.6838!3d33.8597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzM0LjkiTiA4NMKwNDEnMDEuNyJX!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
