const APP_URL = "https://app.vaultz.io";
const GITHUB_URL = "https://github.com/vaultz-io";

export function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            Vaultz
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/50">
            A permissionless, anti-snipe presale vault on Robinhood Chain. Unaudited — use testnet
            only until the audit in the roadmap is complete.
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <div>
            <p className="mb-3 font-semibold text-white/80">Product</p>
            <div className="flex flex-col gap-2 text-white/50">
              <a href={APP_URL} className="hover:text-white">Launch App</a>
              <a href="#how-it-works" className="hover:text-white">How it works</a>
              <a href="#roadmap" className="hover:text-white">Roadmap</a>
            </div>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white/80">Resources</p>
            <div className="flex flex-col gap-2 text-white/50">
              <a href={GITHUB_URL} className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#trust" className="hover:text-white">Trust properties</a>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-white/30">
        Vaultz is experimental software. Nothing here is financial advice. Contracts are unaudited
        — interact only with funds you can afford to lose, and prefer testnet until an audit is
        published.
      </p>
    </footer>
  );
}
