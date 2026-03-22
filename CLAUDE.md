# CLAUDE.md — Apache Pinot Website

## Project Overview

Apache Pinot marketing/docs website built with **Next.js 14** (App Router), **TypeScript**, **TailwindCSS**, and **ContentLayer** for MDX processing. Statically exported (`output: 'export'`).

## Key Commands

```bash
yarn dev              # Start dev server
yarn build            # Production build (includes postbuild script)
yarn lint:check       # Lint without auto-fix (used in CI)
yarn lint             # Lint with auto-fix
yarn check            # Prettier check
yarn format           # Prettier auto-format
yarn check:consistency # Validate version/positioning consistency
yarn test             # Run tests
```

## Git & PR Rules

-   **Development branch:** `new-site-dev` — all PRs must target this branch
-   **Release/production branch:** `new-static-prod` — production deployments
-   **Site config branch:** `asf-site` — Apache infrastructure site configuration
-   Always branch from `origin/new-site-dev`

## Architecture

### Single Source of Truth (SSOT)

`data/pinot-meta.json` is the SSOT for version numbers, tagline, hero text, capabilities, and terminology. Components import from this file — never hardcode version strings or positioning text in components.

Files that read from `pinot-meta.json`:

-   `data/siteMetadata.js` — site-wide config (uses `require()`, CommonJS)
-   `components/HeroSection.tsx` — hero headline and description
-   `app/download/page.tsx` — download page header and SEO meta
-   `components/DownloadTable/DesktopDownloadTable.tsx` — "Latest" badge
-   `components/DownloadTable/MobileDownloadTable.tsx` — "Latest" badge
-   `components/Features.tsx` — "Last verified" marker
-   `components/BenchmarkSection.tsx` — "Last verified" marker
-   `components/UseCases.tsx` — "Last verified" marker

### Content (ContentLayer MDX)

-   `data/blog/*.mdx` — Blog posts
-   `data/downloads/*.mdx` — Download entries (one per release version)
-   `data/authors/*.mdx` — Author profiles

The download page uses ContentLayer's `allDownloads` (from MDX files) as the data source, not the `downloadData` array in `data/downloadsData.ts`. The `.ts` file primarily exports the `DownloadData` type.

### Key Data Files

| File                          | Purpose                                        |
| ----------------------------- | ---------------------------------------------- |
| `data/pinot-meta.json`        | SSOT for version, tagline, positioning         |
| `data/siteMetadata.js`        | Site config (CommonJS `module.exports`)        |
| `data/downloadsData.ts`       | Download metadata & `DownloadData` type export |
| `data/featuresData.ts`        | Feature cards with doc links                   |
| `data/useCasesData.ts`        | Use case categories                            |
| `data/benchmarkData.ts`       | Benchmark metrics                              |
| `data/companiesUsingPinot.ts` | Company logos/names                            |

### Components That Need Manual Version Updates Per Release

These components have hardcoded version strings that `pinot-meta.json` does not control:

-   `components/Terminal.tsx` — Docker image tags (`pinot:X.Y.Z`, `pinot:X.Y.Z-arm64`)
-   `components/ReleaseBanner.tsx` — Release announcement text

See `RELEASE_GUIDE.md` for the full release checklist.

## Download URL Patterns

```
# Scarf gateway (0.8.0+)
https://apachepinot.gateway.scarf.sh/pinot/{VERSION}/apache-pinot-{VERSION}-{src|bin}.tar.gz

# Archive (pre-0.8.0, incubating)
https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-{VERSION}/apache-pinot-incubating-{VERSION}-{src|bin}.tar.gz

# Docker
apachepinot.docker.scarf.sh/apachepinot/pinot:{VERSION}
apachepinot.docker.scarf.sh/apachepinot/pinot:{VERSION}-arm64
```

## Consistency Validation

Run `node scripts/check-consistency.mjs` before committing. It checks:

-   `pinot-meta.json` has all required fields
-   `siteMetadata.js` imports from `pinot-meta.json`
-   No duplicate versions in `downloadsData.ts`
-   Download MDX file exists for the latest version
-   HeroSection reads from SSOT
-   No hardcoded version numbers in key components

## Style & Formatting

-   Prettier and ESLint are enforced via `husky` + `lint-staged` pre-commit hooks
-   Run `yarn format` if prettier check fails
-   `siteMetadata.js` uses CommonJS (`require`/`module.exports`), not ES modules
-   MDX frontmatter dates: `MM/DD/YYYY` in downloads, `YYYY-MM-DD` in blog posts
