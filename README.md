# vaultz-marketing

The explainer/marketing site for [Vaultz](https://github.com/vaultz-io) — a permissionless
anti-snipe presale vault protocol on Robinhood Chain. Static content only: no wallet connection,
no financial interaction. The actual product lives in the separate `vaultz-app` repo
(app.vaultz.io); the contracts live in `vaultz`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static `dist/` directory.

## Deploy (Netlify)

This repo ships a `netlify.toml` (build command `npm run build`, publish `dist`). Connect the repo
in the Netlify dashboard, or deploy manually:

```bash
npx netlify deploy --prod
```

Point the `vaultz.io` domain at the Netlify site once connected.
