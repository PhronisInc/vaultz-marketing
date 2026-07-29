const stages = [
  {
    label: "Contracts + tests",
    status: "done" as const,
    body: "Factory, vault, token, LP locker, and vesting contracts, with a full unit suite plus a fork test against the real Uniswap v3 deployment on Robinhood Chain mainnet.",
  },
  {
    label: "Testnet dry run",
    status: "next" as const,
    body: "A full click-through on Robinhood Chain testnet — create, raise, migrate, claim — once a Uniswap v3 deployment is confirmed there.",
  },
  {
    label: "Professional audit",
    status: "funding" as const,
    body: "This is the gate before any real funds touch mainnet. We're building the community and the audit fund now — a formal contribution mechanism is coming.",
  },
  {
    label: "Mainnet launch",
    status: "later" as const,
    body: "Only after a clean audit. No shortcuts here — this protocol custodies other people's money.",
  },
];

const statusStyles: Record<string, string> = {
  done: "bg-accent text-ink",
  next: "bg-accent-2 text-ink",
  funding: "bg-panel-2 text-white/80 border border-line",
  later: "bg-panel-2 text-white/40 border border-line",
};

const statusLabel: Record<string, string> = {
  done: "Done",
  next: "In progress",
  funding: "Funding now",
  later: "Planned",
};

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-line/60 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Roadmap</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          We'd rather ship this slowly and correctly than fast and sorry.
        </p>
        <ol className="mt-14 space-y-6 border-l border-line pl-8">
          {stages.map((stage) => (
            <li key={stage.label} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-ink bg-line" />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold text-white">{stage.label}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[stage.status]}`}>
                  {statusLabel[stage.status]}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
