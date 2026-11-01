# Responsive audit — 1 November 2026

All ten pages were reviewed and corrected. Original HTML exports remain intact; responsive changes are retained by `npm run import-designs`.

| Finding | Correction |
| --- | --- |
| Desktop section padding combined with additional mobile container padding | One source of vertical spacing per section; 56px section padding and 32px content spacing on phones |
| Some headings retained desktop font sizes | All main headings participate in responsive typography, including service cards and CTA headings |
| Hero mockups had minimum pixel font sizes inside a shrinking composition | Text, controls, borders, and SVG boxes scale proportionally with the artwork |
| Absolutely positioned CTA illustrations overlapped text | Grid-based CTA layout with artwork below the message on narrow screens |
| Tiny grids inside illustrations inherited content layout rules | Artwork grids are isolated from responsive content grids |
| Desktop-sized card padding and fixed description heights created awkward mobile spacing | Reduced card padding, responsive body copy, and natural description heights |
| Split layouts and multi-column cards became cramped at intermediate widths | Tablet stacking and flexible card columns, with single-column phone layouts |
| Small answer-card and footer link targets | Larger mobile touch targets while retaining keyboard interaction |
| Card illustrations retained desktop dimensions | 48 card illustrations now use 96px width on phones and 120px on tablets, preserving their aspect ratios |
| Service icons centered against title and subtitle together | A shared title-row grid aligns each icon with the title, with the subtitle in its own row |
| Plan information cards aligned icons against the whole text block and left narrow mobile text gutters | Icons align with headings; phone descriptions span the card width and related-plan buttons use a separate full-width row |
| Process and benefit headings retained 62–68px minimum heights, leaving blank space above descriptions | Reserved heading height is removed at every viewport width; descriptions follow the natural title height with the existing 12px margin |
| Footer links combined 44px minimum heights with additional list gaps | Compact 36px link rows, 8px heading/list spacing, and 24px group spacing on phones |
| Team photos sat inside cards with excessive empty side margins | At phone and tablet widths, cards are bounded to 300px with 20px padding and photos filling the available width; the grid uses one, two, or three columns as space permits |
| Short answer-card fronts constrained longer answers | Open answers determine their own height at every width, without retaining invisible front content or requiring nested scrolling |
| Homepage services stacked into unnecessarily wide tablet cards | Both service cards share a row from 768px upward; narrower screens retain a single column |
| Question-card actions were pushed far below their titles | Actions follow the title with a consistent 20px gap |
| Call-booking placeholders were converted into non-interactive spans | Buttons open a prefilled WhatsApp call request, without sending or booking automatically |

## Verification

- Latest pass: 110 browser viewport checks covering all 10 pages at 320, 390, 640, 641, 768, 820, 959, 960, 1000, 1024, and 1440px widths.
- No horizontal page overflow or clipped headings, paragraphs, list items, or links in those checks. No CTA message/artwork overlap in the 80 checks that measured it during this pass.
- Homepage service cards share a row at all tested widths of 768px and above, and stack below that breakpoint.
- All marked process/benefit headings have zero reserved minimum height; descriptions follow their titles without the former blank spacer.
- At phone widths, page titles are 30–36px, section headings 28px, and card headings at most 22px.
- Visual review of all 10 hero areas and all 10 CTA sections at phone width, plus pricing cards, service cards, FAQs, and representative desktop/tablet views.
- Mobile menu opens, closes with Escape, and closes after navigation.
- FAQ open/close behavior verified by keyboard on all 8 pages containing FAQ sections.
- Homepage question cards verified for keyboard opening and close-button behavior.
- All 6 answer cards checked at 320, 390, 820, and 1440px: front content is removed from layout while open, and answers fit without an internal scrollbar or page overflow. Open/close interactions passed all 24 cases.
- Service icon/title centers align within 1px at every tested width.
- Team cards measured 300px with 20px padding at 390px and 768px viewports; at 320px they shrink to the available width while preserving that padding. Visual review confirms photos fill the card interior.
- The Content Update and Security & Maintenance plan callouts were additionally checked at 320, 390, 640, 768, 1024, and 1440px: all six icon/title alignments pass, with full-width phone descriptions and no overflow.
- Production build and TypeScript validation completed successfully.

Measured results are in `responsive-audit.json`. Browser viewport simulation was used; physical-device testing was not performed.
