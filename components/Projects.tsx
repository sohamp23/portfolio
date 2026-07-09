import { Github, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { projects, ProjectItem } from "@/lib/data";

function ProjectCard({ item, index }: { item: ProjectItem; index: number }) {
  const hasLinks = item.githubUrl || item.liveUrl;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="group relative flex h-full flex-col rounded-2xl p-6 glass transition-all duration-300 hover:border-signal-300/30 hover:shadow-card-hover sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
          <Badge className="shrink-0">{item.category}</Badge>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-mist sm:text-[15px]">
          {item.description}
        </p>

        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist">
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

        <div className="mt-auto pt-6">
          {hasLinks ? (
            <div className="flex gap-4">
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-300 transition-colors hover:text-signal-200"
                >
                  View Project <ArrowUpRight size={14} />
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-mist transition-colors hover:text-paper"
                >
                  View Code <Github size={14} />
                </a>
              )}
            </div>
          ) : (
            <p className="font-mono text-xs text-mist/60">Links coming soon</p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Things I've built end to end"
        description="From marketplace infrastructure to AI tooling to a production mobile app."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((item, i) => (
          <ProjectCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
