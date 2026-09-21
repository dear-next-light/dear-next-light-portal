# v0.1 validation — 2026-09-16

Public site: https://dear-next-light.pages.dev/

- Verified homepage, Privacy, Disclaimer and custom 404 in the browser.
- Verified widths 360, 390, 768, 1024 and 1440 px without horizontal overflow.
- Verified category filters, including the empty Experiments state.
- Public homepage console: no errors. All displayed images loaded.
- Canonical and OGP point to the production origin.
- Build completed with 3 projects. GA4 is disabled until configured.
- Project destinations and contact details were not supplied; they are explicitly marked Coming soon.

## Lighthouse

PageSpeed Insights, Lighthouse 13.4.1, 2026-09-16 12:18 JST:

| Device | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 100 | 96 | 100 | 100 |
| Desktop | 100 | 96 | 100 | 100 |

Report: https://pagespeed.web.dev/analysis/https-dear-next-light-pages-dev/afk3110omy

Remaining minor finding: the decorative numbers 01–03 on Featured cards have insufficient text contrast. Scores meet the specified target of 90 in each category. Scores are measurements of one run, not guarantees of future results.

## Publishing

Cloudflare Pages Direct Upload. Automatic publishing from GitHub is not connected. See README for updating the site.
