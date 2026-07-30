# Mahadeva landing section

Implementation of the Figma frame `Frame 2147235684`
([node 3678-3367](https://www.figma.com/design/qUPD0QuEbNgmizUtTQiRRM/Templates?node-id=3678-3367))
— the hero and the "Everything You Need to Scale With AI" feature strip.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Layout

| Path | Contents |
| --- | --- |
| `app/page.tsx` | Composes the two sections |
| `app/globals.css` | Tailwind entry + design tokens (`--color-ink`, `--color-card`) |
| `components/Hero.tsx` | Badge, headline, 3D monogram |
| `components/FeatureCards.tsx` | The six-card scroll strip |
| `public/assets/` | PNG/SVG exported from the Figma node |

## Notes on the design

- **The card row is a horizontal scroll strip.** In Figma the six cards total
  1690px inside a 1040px column, so they bleed off both edges. At `lg` and up
  the strip starts scrolled to the middle to reproduce that framing; below `lg`
  it starts at the first card. It scrolls and swipes at every width.
- **Cards 1/2 and 5/6 are duplicates** ("Revenue Optimization" and "Workflow
  Automation"), matching the Figma frame — the repetition is what makes the row
  read as continuing past the edges. There are four unique cards.
- **Type is Almarai** (400 and 300), loaded via `next/font/google`.
- The badge ornaments are exported per node rather than one asset mirrored;
  Figma bakes the artboard background into SVG exports, so those solid rects
  are stripped from the committed files.
