import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { focusAreas } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading eyebrow="01 — About" title="Where engineering meets business context" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
          <p>
            Computer Science &amp; Commerce student at the University of Toronto,
            who likes building things that actually ship. I care about the why behind 
            what I build, not just the how.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass rounded-2xl p-6">
            <p className="eyebrow mb-4">Focus areas</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area}>{area}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
