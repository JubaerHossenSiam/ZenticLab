# Zentic Lab website

A Next.js App Router website built from all ten HTML designs in `zenticlab-website-design/`. Uses TypeScript, React, shared navigation and footer components, and prerendered pages.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. The development server binds to the local computer only.

```sh
npm run build      # Static export to out/ and TypeScript validation
npx serve out      # Preview the exported site locally
npm run typecheck  # TypeScript validation
```

## Pages

`/`, `/services`, `/services/ecommerce`, `/services/business`, `/hosting-care`, `/domain-hosting-plans`, `/content-update-plans`, `/security-maintenance-plans`, `/about`, and `/contact`.

The existing site's shared slugs (`/`, `/services`, `/about`, and `/contact`) are preserved. The static export includes corresponding `.html` files; Cloudflare Pages serves clean URLs from those files and may canonicalize requests for `.html` URLs. E-commerce and business packages have dedicated pages under `/services/ecommerce` and `/services/business`. The published URL inventory is recorded in `url-audit.json`.

## Cloudflare Pages

The site uses `output: "export"` and needs no Next.js server or runtime adapter. Next.js server rewrites are not used.

- Project: `zenticlab`
- Production branch: `main`
- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build` (or `npx next build`)
- Build output directory: `out`
- Root directory: repository root

Deploy the generated `out/` directory. It includes all ten pages, nested service pages, a custom `404.html`, favicon files, images, and client-side JavaScript. No environment variables are required. Use `npm run dev` during development; `next start` is not used for a static export.

## Editing

- `src/app/`: Next.js routes, page metadata, shared layout, and styles.
- `src/components/Header.tsx`: Shared navigation with mobile menu and active states.
- `src/components/designs/`: Editable React components converted from the supplied designs, including the shared footer and logo.
- `public/images/`: Locally stored images, including team portraits extracted from the designs.
- `src/app/designs.css`: Original design styles.
- `src/app/globals.css`: Responsive and accessibility improvements.
- `scripts/responsive-design.mjs`: Import-time responsive hooks and proportional artwork scaling, retained when designs are regenerated.
- `RESPONSIVE_AUDIT.md` and `responsive-audit.json`: Responsive audit scope, findings, and measured results.

The original HTML designs are preserved. `npm run import-designs` regenerates page components, route files, the shared logo/footer, and `designs.css` from those exports; it overwrites edits to generated files. It does not overwrite the header, layout, or responsive stylesheet.

## Assets and contact links

The four original product photos supplied by the owner are stored unchanged as `public/images/t-shirt.webp`, `shoes.webp`, `headphones.webp`, and `bag.webp`. The importer maps the HTML exports' `/_blob/` references to these local files across hero and CTA illustrations. Existing embedded team photos and artwork are preserved. The original Google Fonts stylesheet loads Inter and Plus Jakarta Sans, with system-font fallbacks.

Contact buttons open the WhatsApp number and email supplied in the designs. The footer links to Zentic Lab's Facebook and Instagram profiles.

“Book a Free Project Call” buttons open https://calendly.com/zenticlab/30min in a new tab so visitors can choose an appointment time.

No database, email service, authentication, or deployment credentials are needed to run this site.
