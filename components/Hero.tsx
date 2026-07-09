"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui";
import { TerminalCard } from "@/components/TerminalCard";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { contact } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <BackgroundGlow />

      <div className="section-padding mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-signal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
              </span>
              Open to Fall 2026 / 2027 SWE, AI/ML, Cybersecurity &amp; Product Internships
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="mt-8 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl"
          >
            Soham Patel
            <span className="mt-2 block text-gradient">
              Software engineer building AI-powered, cloud-native products.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg"
          >
            University of Toronto — Computer Science &amp; Commerce. I build full-stack,
            cloud-backed systems and AI-powered tools, with a product and business lens
            layered on top of the engineering.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" icon={<MessageSquare size={16} />}>
              Contact Me
            </Button>
            <Button
              href={contact.resumeHref}
              variant="ghost"
              download
              icon={<Download size={16} />}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
