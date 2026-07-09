"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";

const lines = [
  { prompt: "$ whoami", output: "soham-patel — software engineer" },
  { prompt: "$ school", output: "University of Toronto — CS & Commerce" },
  {
    prompt: "$ stack",
    output: '["TypeScript", "Next.js", "NestJS", "Python", "AWS/Azure"]',
  },
  { prompt: "$ focus", output: `[${focusAreas.slice(0, 4).map((f) => `"${f}"`).join(", ")}]` },
  { prompt: "$ status", output: "open to Fall 2026 / 2027 internships" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-signal-radial blur-2xl" />

      <div className="glass overflow-hidden rounded-2xl shadow-glow-sm">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-xs text-mist">soham@dev — zsh</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 px-5 py-6 font-mono text-[13px] leading-relaxed"
        >
          {lines.map((line, i) => (
            <motion.div key={i} variants={item}>
              <p className="text-signal-300">{line.prompt}</p>
              <p className="text-mist break-words">{line.output}</p>
            </motion.div>
          ))}
          <motion.div variants={item} className="flex items-center gap-1 pt-1">
            <span className="text-signal-300">$</span>
            <span className="inline-block h-4 w-2 animate-blink bg-signal-300" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
