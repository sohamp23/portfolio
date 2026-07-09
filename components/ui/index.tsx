"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/* ---------------------------------- Reveal --------------------------------- */
/* Scroll-triggered fade-up used to give every section a single, consistent
   entrance animation instead of scattering different effects per component. */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- SectionHeading ----------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-mist leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

/* ----------------------------------- Badge ---------------------------------- */

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wide text-mist ${className}`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------- Button --------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
  download?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-signal-gradient text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "glass text-paper hover:border-signal-300/40 hover:-translate-y-0.5",
  ghost: "text-mist hover:text-paper",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  external,
  download,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
