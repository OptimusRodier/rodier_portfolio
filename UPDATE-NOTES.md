# Portfolio update – what changed

Copy the contents of this folder over your repo (same paths), then run `npm install` (nothing new to install) and `npm run build`.
Built on top of the patched Next.js 15.3.8 (Vercel security fix), so merge that PR first.

## Your requests
- Top-left of the header: small globe + "Paris". Clock on the right now uses Europe/Paris.
- Under the photo: "Spoken languages" (Langues parlées) above the language tags. Time zone text removed.
- Round photo: new `public/images/ro-square.jpg` (your photo on a white square) so head and shoulders fit.
- EN | FR switch in the header. English stays at the normal URLs, French lives under `/fr`
  (`/fr`, `/fr/about`, `/fr/work`, `/fr/blog`, ...). Everything is translated, including the project articles.
- Awin: role is now "Global Integrations Analyst (formerly Global Technical Integrations Analyst)", plus a line about the move to Paris (Sept 2026).
- chezyo.com: shown as decommissioned in 2025, link removed, "exploring something new at a local level".
- CV: two buttons (ENG CV / FR CV) on the About page and two icons in the footer.
  Put `New_Rodier_Resume_EN.pdf` and `New_Rodier_Resume_FR.pdf` in `/public`.
- Moonfill article rewritten from the new README (EN + FR), without internal contact/access details.

## Performance
- RouteGuard no longer shows a spinner and hides the page until JavaScript runs: pages are now in the first HTML (faster first paint, readable by search engines).
- drift3.png 2.1 MB -> 73 KB, LMS.png 204 KB -> 147 KB, moonfill.png 30 KB -> 7 KB (WebP), photo 208 KB -> 54 KB.
- AVIF/WebP image formats, 30-day image cache, 1-day cache for /images (rename a file if you replace it).
- Smaller fixes: sitemap URLs were "https://https://..." (fixed, now includes FR + hreflang), robots.txt double slash, structured-data `sameAs`.

## Safe to delete (not used by the site)
`public/images/drift1.png`, `drift2.png`, `drift3.png`, `LMS.png`, `moonfill.png` (replaced by .webp),
`public/images/projects/project-01/video-01.mp4` (15 MB), `public/Rodier_Resume_Final.pdf` (replaced by the two new CVs).
