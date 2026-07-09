export function Footer() {
  return (
    <footer className="section-padding border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} Soham Patel. Built with purpose.</p>
        <p className="font-mono">University of Toronto · CS &amp; Commerce</p>
      </div>
    </footer>
  );
}
