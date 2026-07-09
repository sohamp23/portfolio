import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { focusAreas } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading eyebrow="01 — About" title="Where engineering meets business context" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
          <p>
            I&apos;m a Computer Science &amp; Commerce student at the University of Toronto,
            which means I spend as much time thinking about why a system should exist as I do
            building it. That combination shapes how I work: I don&apos;t just ship code that
            runs, I design for the constraints a real business actually has — cost, scale,
            maintainability, and the people who have to use what I build.
          </p>
          <p>
            My experience spans enterprise billing infrastructure, AI-powered developer
            tooling, and consumer applications used by thousands of people. Across all of it,
            the throughline is the same: understand the system deeply enough to make it
            simpler, not just bigger. Right now that means working across payments platforms,
            cloud-native architectures, and applied statistics — with an eye toward AI/ML
            systems that hold up outside a notebook.
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
