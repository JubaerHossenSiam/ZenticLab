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
npm run build      # Production build and TypeScript validation
npm start          # Serve the production build
npm run typecheck  # TypeScript validation
```

## Pages

`/`, `/services`, `/ecommerce`, `/business`, `/hosting-care`, `/domain-hosting-plans`, `/content-update-plans`, `/security-maintenance-plans`, `/about`, and `/contact`.

The existing site's shared slugs (`/`, `/services`, `/about`, and `/contact`) are preserved. Legacy `.html` URLs serve the same pages through internal rewrites, without redirects. Existing `/services?tab=ecommerce` and `/services?tab=business` links render the relevant package pages directly. The published URL inventory is recorded in `url-audit.json`.

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

Four product image references in the original exports pointed to unavailable `/_blob/` assets. Replacement product photos are stored locally; their Unsplash source URLs are recorded in `scripts/fetch-product-images.mjs`. Existing embedded team photos and artwork are preserved. The original Google Fonts stylesheet loads Inter and Plus Jakarta Sans, with system-font fallbacks.

Contact buttons open the WhatsApp number and email supplied in the designs. No messages are sent automatically. The supplied designs did not include a contact form or social profile URLs. Social artwork is displayed without dead links; real profile links can be added to the footer when available.

“Book a Free Project Call” buttons open https://calendly.com/zenticlab/30min in a new tab so visitors can choose an appointment time.

No database, email service, authentication, or deployment credentials are needed to run this site.
