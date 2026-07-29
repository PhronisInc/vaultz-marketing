const props = [
  {
    title: "No admin keys, anywhere",
    body:
      "The factory and every contract it deploys have no owner and no privileged setter. Platform terms (fee, minimum LP lock) are fixed at deployment — changing them means shipping a new factory, not flipping a switch.",
  },
  {
    title: "Fixed supply, always",
    body:
      "Every launch token mints its full supply once, to the vault, at creation. There is no mint() function afterward — not for the team, not for the platform.",
  },
  {
    title: "Liquidity is actually locked",
    body:
      "The Uniswap position lands in a dedicated timelock contract with a platform-enforced minimum duration. Nothing — including the creator — can withdraw it early.",
  },
  {
    title: "Team tokens vest, and can't be clawed back",
    body:
      "Team allocations sit in a linear vesting contract with an optional cliff. There is no revoke function — once it's funded, the schedule is a promise the platform itself can't break.",
  },
  {
    title: "The snipe window expires on its own",
    body:
      "Trading is blocked outright in the exact block liquidity goes live, then per-wallet buy caps apply for a short, fixed window. Both are hardcoded to lift automatically — there's no admin override to extend or bypass them.",
  },
  {
    title: "Failed raises refund automatically",
    body:
      "If a raise misses its softcap by the deadline, contributors pull their own ETH back directly from the vault. No liquidity is ever created from an under-funded raise.",
  },
];

export function TrustProps() {
  return (
    <section id="trust" className="border-t border-line/60 bg-panel/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Trust properties, not trust me
        </h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Every claim below is something you can check against the source directly — not marketing copy.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-panel p-6">
              <h3 className="flex items-start gap-2 text-base font-semibold text-white">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
