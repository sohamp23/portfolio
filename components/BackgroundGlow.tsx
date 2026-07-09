export function BackgroundGlow({ variant = "default" }: { variant?: "default" | "reverse" }) {
  const flip = variant === "reverse";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`absolute h-[420px] w-[420px] rounded-full bg-signal-radial blur-3xl animate-float ${
          flip ? "right-[-120px] top-10" : "left-[-120px] top-10"
        }`}
      />
      <div
        className={`absolute h-[320px] w-[320px] rounded-full bg-signal-radial blur-3xl animate-float-slow opacity-70 ${
          flip ? "left-[-80px] bottom-0" : "right-[-80px] bottom-0"
        }`}
      />
    </div>
  );
}
