import { User, Mail } from "lucide-react";

const team = [
  {
    name: "Joe Bendik",
    role: "Owner / CEO",
    description:
      "Founder and CEO of ACE since 1998. Joe brings hands-on expertise and a commitment to quality craftsmanship to every project.",
    email: "aceincjb@bellsouth.net",
    initials: "JB",
  },
  {
    name: "Wayne Proctor",
    role: "Architect / Engineer",
    description:
      "Wayne leads the design and engineering side of our projects, ensuring structural integrity and innovative solutions.",
    email: null,
    initials: "WP",
  },
  {
    name: "Michelle Farley",
    role: "Office Manager",
    description:
      "Michelle keeps operations running smoothly and serves as the primary point of contact for scheduling and coordination.",
    email: "aceincmf@gmail.com",
    initials: "MF",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 diagonal-stripes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            <span className="h-px w-8 bg-amber-500" />
            Our People
            <span className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            The Team Behind ACE
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden border border-steel-100 bg-white transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/5"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              <div className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-navy-900 text-amber-500 transition-all group-hover:bg-amber-600 group-hover:text-white">
                  <span className="text-xl font-extrabold">{member.initials}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-600">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">
                    {member.description}
                  </p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-600"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
