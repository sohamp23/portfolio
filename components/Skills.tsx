import { Code2, Layers, Wrench } from "lucide-react";
import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { skills } from "@/lib/data";

const icons = [Code2, Layers, Wrench];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading eyebrow="04 — Skills" title="Toolbox" />

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.category} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-signal-300/30">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-300/10 text-signal-300">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-mono text-sm uppercase tracking-wide text-paper">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
