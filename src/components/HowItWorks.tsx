const steps = [
  {
    title: "Create a launch",
    body:
      "Anyone deploys a token + vault through the factory: total supply, softcap/hardcap, allowlist and public round windows, and how supply splits across presale, liquidity, and team.",
  },
  {
    title: "Community raises ETH",
    body:
      "Contributors join an allowlisted round first, then a public round — both capped per wallet. Miss the softcap and everyone pulls their own refund; nobody's funds are ever at the mercy of a manual decision.",
  },
  {
    title: "Liquidity migrates automatically",
    body:
      "Once the raise succeeds, anyone can trigger finalize(). It pays the platform fee, mints a full-range Uniswap v3 position from the raised ETH, and locks that position in a timelock — all in one transaction.",
  },
  {
    title: "Trading opens, snipe-guarded",
    body:
      "Trading flips on in the same transaction as the liquidity mint. The exact launch block is blocked outright, and a short per-wallet buy cap follows — then it expires permanently. No admin switch, no exceptions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">How a launch works</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Four steps, all enforced by the contracts themselves — not by a team member clicking a button.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-line bg-panel p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-panel-2 text-sm font-semibold text-accent">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
