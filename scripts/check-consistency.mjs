#!/usr/bin/env node

/**
 * Consistency check script for Apache Pinot website.
 * Validates that version numbers and positioning language across the site
 * match the single source of truth in data/pinot-meta.json.
 *
 * Run: node scripts/check-consistency.mjs
 * Add to CI: exits with code 1 on mismatch.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let errors = 0;

function error(msg) {
    console.error(`  FAIL: ${msg}`);
    errors++;
}

function pass(msg) {
    console.log(`  OK: ${msg}`);
}

// Load SSOT
const metaPath = resolve(root, 'data/pinot-meta.json');
if (!existsSync(metaPath)) {
    console.error('FATAL: data/pinot-meta.json not found');
    process.exit(1);
}
const meta = JSON.parse(readFileSync(metaPath, 'utf-8'));

console.log(`\nChecking consistency against pinot-meta.json (v${meta.latestVersion})...\n`);

// 1. Check siteMetadata.js pulls from SSOT
console.log('[siteMetadata.js]');
const siteMetaSrc = readFileSync(resolve(root, 'data/siteMetadata.js'), 'utf-8');
if (siteMetaSrc.includes("require('./pinot-meta.json')")) {
    pass('imports pinot-meta.json');
} else {
    error('siteMetadata.js does not import pinot-meta.json — description may drift');
}

// 2. Check downloadsData.ts has no duplicate versions
console.log('\n[downloadsData.ts]');
const downloadsSrc = readFileSync(resolve(root, 'data/downloadsData.ts'), 'utf-8');
const versionMatches = [...downloadsSrc.matchAll(/version:\s*'([^']+)'/g)].map((m) => m[1]);
const versionCounts = {};
for (const v of versionMatches) {
    versionCounts[v] = (versionCounts[v] || 0) + 1;
}
let hasDuplicates = false;
for (const [v, count] of Object.entries(versionCounts)) {
    if (count > 1) {
        error(`version ${v} appears ${count} times (should be 1)`);
        hasDuplicates = true;
    }
}
if (!hasDuplicates) {
    pass('no duplicate versions');
}

// 3. Check that latest version in downloads MDX matches SSOT
console.log('\n[downloads MDX]');
const latestMdxPath = resolve(root, `data/downloads/${meta.latestVersion}.mdx`);
if (existsSync(latestMdxPath)) {
    pass(`${meta.latestVersion}.mdx exists`);
} else {
    error(`${meta.latestVersion}.mdx missing — download page won't show latest version`);
}

// 4. Check HeroSection uses SSOT
console.log('\n[HeroSection.tsx]');
const heroSrc = readFileSync(resolve(root, 'components/HeroSection.tsx'), 'utf-8');
if (heroSrc.includes('pinotMeta.heroHeadline') || heroSrc.includes('pinot-meta.json')) {
    pass('uses pinot-meta.json for headline');
} else {
    error('HeroSection has hardcoded headline — may drift from SSOT');
}
if (heroSrc.includes('pinotMeta.heroDescription') || heroSrc.includes('pinot-meta.json')) {
    pass('uses pinot-meta.json for description');
} else {
    error('HeroSection has hardcoded description — may drift from SSOT');
}

// 5. Scan for hardcoded version numbers in key component files
console.log('\n[Hardcoded versions in components]');
const componentFiles = [
    'components/HeroSection.tsx',
    'components/BenchmarkSection.tsx',
    'components/Features.tsx',
    'components/UseCases.tsx',
    'app/download/page.tsx'
];
const versionPattern = /\b1\.\d+\.\d+\b/g;
for (const file of componentFiles) {
    const filePath = resolve(root, file);
    if (!existsSync(filePath)) continue;
    const content = readFileSync(filePath, 'utf-8');
    const hardcodedVersions = [...content.matchAll(versionPattern)].map((m) => m[0]);
    if (hardcodedVersions.length > 0) {
        error(`${file} has hardcoded version(s): ${[...new Set(hardcodedVersions)].join(', ')}`);
    } else {
        pass(`${file} — no hardcoded versions`);
    }
}

// 6. Check that pinot-meta.json has required fields
console.log('\n[pinot-meta.json schema]');
const requiredFields = [
    'latestVersion',
    'latestReleaseDate',
    'tagline',
    'heroHeadline',
    'heroDescription',
    'shortDescription',
    'capabilities',
    'lastVerified',
    'lastVerifiedVersion'
];
for (const field of requiredFields) {
    if (meta[field]) {
        pass(`field "${field}" present`);
    } else {
        error(`field "${field}" missing or empty`);
    }
}

// Summary
console.log(`\n${'='.repeat(50)}`);
if (errors === 0) {
    console.log('All consistency checks passed.\n');
    process.exit(0);
} else {
    console.error(`${errors} consistency error(s) found.\n`);
    process.exit(1);
}
