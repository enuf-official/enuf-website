# enuf

The English company website for **enuf**, a mobile game studio. It introduces the studio and its first game, **Animal Defense**, which is in development. The footer’s contact button opens an email to **support@enuf.cloud**.

## Local development

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
npm run dev
```

Open http://localhost:4173. The server reads `site/` directly; refresh after editing.

```sh
npm run build
npm run preview
```

`build` copies the complete static website into `dist/`. It can be served by any static host. `PORT=3000 npm run dev` selects another local port.

## GitHub Pages deployment

The website is published at https://enuf.cloud using `.github/workflows/deploy-pages.yml`. Each push to `main` builds the site and deploys the contents of `dist/`.

One-time repository setup:

1. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
2. Keep **Custom domain** set to `enuf.cloud`. Custom workflows use this repository setting; the root `CNAME` file alone does not configure the domain.
3. Commit and push the workflow and website changes to `main`.
4. Wait for **Actions → Deploy website to GitHub Pages** to succeed. The workflow can also be started with **Run workflow**.
5. Enable **Enforce HTTPS** in Pages settings when GitHub makes it available.

Publishing directly from `main / (root)` renders the README because the actual homepage is `site/index.html`. The workflow uploads `dist/index.html` as the root homepage instead. No dependency installation is required for the build.

## Files

- `site/index.html`: English content, navigation, metadata, and contact link.
- `site/styles.css`: Responsive layout, locally hosted font, and reduced motion support.
- `site/main.js`: Copyright year and current navigation state.
- `site/assets/`: Game artwork and the Manrope font, with its OFL license.
- `.openai/hosting.json`: Sites identity and static output configuration.
- `.github/workflows/deploy-pages.yml`: Build and deploy `dist/` to GitHub Pages.

Game artwork was copied from the existing `../d3` project: the adopted Animal Defense app icon, the fox sprite sheet, and the sheep/chicken thumbnails. The original game project is unchanged. The fox is displayed using CSS sprite framing. Game assets remain subject to their original licenses; do not redistribute them as standalone asset packs.

The website has no external font requests, analytics, forms, or runtime dependencies. All content and the email contact link work without JavaScript.
