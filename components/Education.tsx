import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading eyebrow="05 — Education" title="Academic background" />

      <Reveal delay={0.1}>
        <div className="glass rounded-2xl p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-300/10 text-signal-300">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">
                  {education.school}
                </h3>
                <p className="mt-1 text-mist">{education.degree}</p>
                <p className="text-mist">{education.program}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-mist">{education.duration}</p>
              <p className="mt-1 font-mono text-xs text-signal-300">GPA: {education.gpa}</p>
            </div>
          </div>

          <div className="mt-7 border-t border-white/[0.06] pt-6">
            <p className="eyebrow mb-3">Relevant coursework</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
