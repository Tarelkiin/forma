# Validation / v12-github-web

- Served as plain static files beneath /forma/, matching a GitHub project-site base path.
- Actual browser WebGL: renamed material maps and Studio HDRI loaded; generated chess profile rendered.
- No pairing UI, EventSource, BroadcastChannel or /info /state /events networking in the app.
- Native Canvas camera regression: PASS moving-mask clearing, soft edges and mirroring. No real camera images recorded; no live-camera test this iteration.
- index.html script syntax check passed.
- Previous version folders unchanged. No GitHub repository created and no deployment performed.

- Browser camera engine self-test: bundled JS/WASM/model segmented three synthetic frames successfully. Renamed assets are SHA256-identical to originals.
