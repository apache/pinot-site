# Release Guide: Adding a New Apache Pinot Version

This guide walks you through all the steps needed to update the website when a new Apache Pinot version is released.

## Quick Checklist

When releasing version **X.Y.Z** on date **YYYY-MM-DD**:

-   [ ] 1. Update `data/pinot-meta.json` (single source of truth)
-   [ ] 2. Create `data/downloads/X.Y.Z.mdx` (download page entry)
-   [ ] 3. Add entry to `data/downloadsData.ts` (download metadata)
-   [ ] 4. Update `components/Terminal.tsx` (Docker quickstart command)
-   [ ] 5. Update `components/ReleaseBanner.tsx` (announcement banner)
-   [ ] 6. Create blog post `data/blog/YYYY-MM-DD-Announcing-Apache-Pinot-X-Y.mdx`
-   [ ] 7. (Optional) Update announcement in `data/siteMetadata.js`
-   [ ] 8. Run `node scripts/check-consistency.mjs` to validate
-   [ ] 9. Run `yarn build` to verify the site compiles

---

## Step-by-Step Instructions

### 1. Update `data/pinot-meta.json`

This is the **single source of truth** for version info. Many components read from this file automatically — update it first.

```json
{
    "latestVersion": "X.Y.Z",
    "latestReleaseDate": "YYYY-MM-DD",
    "previousVersion": "1.4.0",
    "previousReleaseDate": "2025-09-30",
    ...
    "lastVerified": "YYYY-MM-DD",
    "lastVerifiedVersion": "X.Y.Z"
}
```

Move the current `latestVersion`/`latestReleaseDate` values into `previousVersion`/`previousReleaseDate` before overwriting.

**What updates automatically from this file:**

-   Homepage hero headline and description
-   Site-wide SEO meta description
-   Download page header ("Latest release: X.Y.Z")
-   "Latest" badge on download tables (desktop & mobile)
-   "Last verified" markers on Features, Benchmarks, and Use Cases sections

### 2. Create `data/downloads/X.Y.Z.mdx`

Create a new MDX file for the download page. Use the Scarf gateway URLs.

```yaml
---
version: X.Y.Z
date: MM/DD/YYYY
href: https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz
officialSource:
    download: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz'
    sha512: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz.sha512'
    asc: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz.asc'
binary:
    download: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz'
    sha512: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz.sha512'
    asc: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz.asc'
releaseNotes: 'Brief summary of major improvements in this release.'
---
Brief summary of major improvements in this release.
```

> **Note:** The `date` field in the MDX frontmatter uses `MM/DD/YYYY` format. The `releaseNotes` in the frontmatter and the body content should match.

### 3. Add entry to `data/downloadsData.ts`

Add a new entry **at the top** of the `downloadData` array (newest first):

```typescript
{
    version: 'X.Y.Z',
    date: 'M/DD/YYYY',
    href: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz',
    officialSource: {
        download:
            'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz',
        sha512: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz.sha512',
        asc: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-src.tar.gz.asc'
    },
    binary: {
        download:
            'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz',
        sha512: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz.sha512',
        asc: 'https://apachepinot.gateway.scarf.sh/pinot/X.Y.Z/apache-pinot-X.Y.Z-bin.tar.gz.asc'
    },
    releaseNotes: 'Brief summary of major improvements in this release.'
},
```

> **Important:** Do NOT duplicate entries. Each version should appear exactly once. The consistency check script will catch duplicates.

### 4. Update `components/Terminal.tsx`

Update the Docker image version in both the x86 and ARM64 commands:

```typescript
const commands = {
    x86: [
        'docker run -p 9000:9000 \\',
        'apachepinot.docker.scarf.sh/apachepinot/pinot:X.Y.Z \\', // <-- update
        'QuickStart -type hybrid'
    ],
    ARM64: [
        'docker run -p 9000:9000 \\',
        'apachepinot.docker.scarf.sh/apachepinot/pinot:X.Y.Z-arm64 \\', // <-- update
        'QuickStart -type hybrid'
    ]
};
```

### 5. Update `components/ReleaseBanner.tsx`

Update the version number in the announcement text:

```tsx
<AnnouncementBar
    text="🎉🎉🎉 Announcing the release of Apache Pinot X.Y.Z"
    ...
/>
```

### 6. Create a blog post

Create `data/blog/YYYY-MM-DD-Announcing-Apache-Pinot-X-Y.mdx`:

```yaml
---
title: 'Announcing Apache Pinot X.Y'
date: YYYY-MM-DD
authors: ['your-author-slug']
summary: 'Brief description of the release highlights.'
tags: [Apache Pinot, releases, real-time analytics, open source, community updates]
---

We are pleased to announce that Apache Pinot X.Y.Z has been released!

Apache Pinot is an open-source distributed OLAP datastore for user-facing
and agent-facing real-time analytics, delivering sub-second queries on
fresh data at very high concurrency.

This release delivers significant improvements including:

- Feature 1
- Feature 2
- Feature 3

The release can be downloaded at https://pinot.apache.org/download

The release notes are available at https://github.com/apache/pinot/releases
```

> **Tip:** Check `data/authors/` for available author slugs. If your author doesn't exist, create a new MDX file in that directory.

### 7. (Optional) Update announcement config

In `data/siteMetadata.js`, update the `announcement` object if you want to promote a meetup or event related to the release:

```javascript
announcement: {
    text: 'Apache Pinot X.Y.Z is here!  ',
    buttonText: 'Download Now',
    link: '/download/',
    expiresAfter: 'YYYY-MM-DD'  // when to stop showing the banner
}
```

### 8. Validate consistency

Run the consistency check script to catch common issues:

```bash
node scripts/check-consistency.mjs
```

This verifies:

-   `pinot-meta.json` has all required fields
-   `siteMetadata.js` imports from `pinot-meta.json`
-   No duplicate versions in `downloadsData.ts`
-   Download MDX file exists for the latest version
-   HeroSection reads from SSOT (no hardcoded strings)
-   No hardcoded version numbers in key components

### 9. Build and verify

```bash
yarn build
```

If the build succeeds, you're ready to create a PR against `new-site-dev`.

---

## URL Pattern Reference

All download URLs follow the Scarf gateway pattern:

```
https://apachepinot.gateway.scarf.sh/pinot/{VERSION}/apache-pinot-{VERSION}-{TYPE}.tar.gz
```

Where `{TYPE}` is one of: `src`, `bin`

Checksum and signature files append `.sha512` or `.asc` to the download URL.

Docker images follow the pattern:

```
apachepinot.docker.scarf.sh/apachepinot/pinot:{VERSION}
apachepinot.docker.scarf.sh/apachepinot/pinot:{VERSION}-arm64
```

---

## File Reference

| File                            | Purpose                                 | Update type         |
| ------------------------------- | --------------------------------------- | ------------------- |
| `data/pinot-meta.json`          | Single source of truth for version info | Edit fields         |
| `data/downloads/X.Y.Z.mdx`      | Download page entry (ContentLayer)      | Create new file     |
| `data/downloadsData.ts`         | Download metadata & types               | Add new entry       |
| `components/Terminal.tsx`       | Docker quickstart command               | Edit version string |
| `components/ReleaseBanner.tsx`  | Release announcement banner             | Edit version string |
| `data/blog/YYYY-MM-DD-*.mdx`    | Blog announcement post                  | Create new file     |
| `data/siteMetadata.js`          | Site config (announcement banner)       | Optional edit       |
| `scripts/check-consistency.mjs` | CI validation script                    | No changes needed   |
