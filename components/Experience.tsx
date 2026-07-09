import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { experience, ExperienceItem } from "@/lib/data";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="relative pl-10 sm:pl-14">
      <span
        className={`absolute left-[11px] top-2 h-3 w-3 rounded-full ring-4 sm:left-[19px] ${
          item.current ? "bg-signal-300 ring-signal-300/20" : "bg-white/20 ring-white/[0.06]"
        }`}
      />

      <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-signal-300/30 hover:shadow-card-hover sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">
              {item.role}
            </h3>
            <p className="mt-1 text-signal-300">{item.company}</p>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-end gap-2 font-mono text-xs text-mist">
              {item.duration}
              {item.current && (
                <span className="rounded-full bg-signal-300/15 px-2 py-0.5 text-[10px] font-medium text-signal-300">
                  Current
                </span>
              )}
            </p>
            <p className="mt-1 font-mono text-xs text-mist">{item.location}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-[15px]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-300/60" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Production systems, not class projects"
        description="Four roles, in order, each shipping real software to real users."
      />

      <div className="relative">
        <span className="absolute left-[16px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-signal-300/50 via-signal-500/20 to-transparent sm:left-[24px] sm:block" />
        <div className="space-y-6">
          {experience.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
