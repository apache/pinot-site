/**
 * Generates noindex + redirect index.html files for intermediate date directories
 * under the blog output path.
 *
 * With `output: 'export'` and `trailingSlash: true`, Next.js creates nested
 * directories like out/blog/2025/02/17/post-title/index.html but leaves the
 * intermediate directories (2025/, 2025/02/, 2025/02/17/) without index files.
 * If the web server has directory indexing enabled, those paths expose raw
 * filesystem listings that get crawled and indexed — creating duplicate,
 * low-value pages in search results.
 *
 * This script walks the blog output tree and creates index.html in any
 * directory that lacks one, containing:
 *   - <meta name="robots" content="noindex, nofollow">
 *   - <link rel="canonical" href="/blog/">
 *   - <meta http-equiv="refresh"> redirect to /blog/
 */

import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import path from 'path';
import siteMetadata from '../data/siteMetadata.js';

const siteUrl = siteMetadata.siteUrl;

function generateRedirectHtml(redirectUrl, canonicalUrl) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${canonicalUrl}">
<meta http-equiv="refresh" content="0; url=${redirectUrl}">
<title>Redirecting to Blog Archive</title>
</head>
<body>
<p>Redirecting to the <a href="${redirectUrl}">blog archive</a>…</p>
</body>
</html>`;
}

function walkAndFillIndexes(dir) {
    let created = 0;
    const entries = readdirSync(dir);

    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (!statSync(fullPath).isDirectory()) continue;

        // Recurse into subdirectories first
        created += walkAndFillIndexes(fullPath);

        // If this directory has no index.html, create one
        const indexPath = path.join(fullPath, 'index.html');
        if (!existsSync(indexPath)) {
            const redirectUrl = '/blog/';
            const canonicalUrl = `${siteUrl}/blog/`;
            writeFileSync(indexPath, generateRedirectHtml(redirectUrl, canonicalUrl));
            created++;
        }
    }

    return created;
}

export default function generateDirectoryIndexes() {
    const outBlogDir = path.join(process.cwd(), 'out', 'blog');

    if (!existsSync(outBlogDir)) {
        console.log('No out/blog directory found — skipping directory index generation.');
        return;
    }

    const created = walkAndFillIndexes(outBlogDir);
    console.log(`Generated ${created} noindex redirect page(s) for intermediate blog directories.`);
}
