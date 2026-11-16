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

## Files

- `site/index.html`: English content, navigation, metadata, and contact link.
- `site/styles.css`: Responsive layout, locally hosted font, and reduced motion support.
- `site/main.js`: Copyright year and current navigation state.
- `site/assets/`: Game artwork and the Manrope font, with its OFL license.
- `.openai/hosting.json`: Sites identity and static output configuration.

Game artwork was copied from the existing `../d3` project: the adopted Animal Defense app icon, the fox sprite sheet, and the sheep/chicken thumbnails. The original game project is unchanged. The fox is displayed using CSS sprite framing. Game assets remain subject to their original licenses; do not redistribute them as standalone asset packs.

The website has no external font requests, analytics, forms, or runtime dependencies. All content and the email contact link work without JavaScript.
