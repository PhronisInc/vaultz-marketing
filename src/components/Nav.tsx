const APP_URL = "https://app.vaultz.io";
const GITHUB_URL = "https://github.com/vaultz-io";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          Vaultz
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#trust" className="hover:text-white">Trust properties</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href={GITHUB_URL} className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a
          href={APP_URL}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:opacity-90"
        >
          Launch App
        </a>
      </div>
    </header>
  );
}
