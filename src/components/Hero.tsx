const APP_URL = "https://app.vaultz.io";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 text-center">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 50% -10%, rgba(110,231,194,0.25), transparent 60%)",
        }}
      />
      <p className="mx-auto mb-6 w-fit rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
        Built for Robinhood Chain
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        Launch tokens without handing bots the first block.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
        Vaultz is a permissionless presale vault: your community raises ETH, and on success the
        vault automatically deploys it as locked Uniswap liquidity — with an anti-snipe window
        that closes before bots can touch it.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={APP_URL}
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
        >
          Launch the App
        </a>
        <a
          href="#how-it-works"
          className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
        >
          See how it works
        </a>
      </div>
      <p className="mt-6 text-xs text-white/40">
        Currently in testnet development. No audit yet — see the roadmap below.
      </p>
    </section>
  );
}
