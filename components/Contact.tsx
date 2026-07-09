import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { Reveal, Button } from "@/components/ui";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { contact } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative mx-auto max-w-6xl py-28 sm:py-36">
      <BackgroundGlow variant="reverse" />

      <Reveal className="glass mx-auto max-w-3xl rounded-3xl p-10 text-center sm:p-16">
        <p className="eyebrow mb-4">06 — Contact</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-mist sm:text-lg">
          Interested in software engineering, AI/ML, cybersecurity, fintech, cloud systems, or
          product-focused internships? Let&apos;s connect.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${contact.email}`} icon={<Mail size={16} />}>
            {contact.email}
          </Button>
          <Button href={`tel:${contact.phoneHref}`} variant="secondary" icon={<Phone size={16} />}>
            {contact.phone}
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={contact.resumeHref}
            download
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
