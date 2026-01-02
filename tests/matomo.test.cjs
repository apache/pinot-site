const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const layoutPath = path.join(repoRoot, 'app', 'layout.tsx');
const nextConfigPath = path.join(repoRoot, 'next.config.js');
const vercelConfigPath = path.join(repoRoot, 'vercel.json');

test('matomo tracking snippet is present in the layout', () => {
    const layoutContents = fs.readFileSync(layoutPath, 'utf8');

    assert.ok(
        layoutContents.includes('https://analytics.apache.org/'),
        'Expected analytics.apache.org base URL in layout'
    );
    assert.ok(layoutContents.includes("matomo.php"), 'Expected matomo.php in layout');
    assert.ok(layoutContents.includes("matomo.js"), 'Expected matomo.js in layout');
    assert.ok(layoutContents.includes("setSiteId', '88'"), 'Expected Matomo site ID 88 in layout');
});

test('csp allows analytics.apache.org in script-src', () => {
    const nextConfigContents = fs.readFileSync(nextConfigPath, 'utf8');

    assert.ok(
        nextConfigContents.includes('analytics.apache.org'),
        'Expected analytics.apache.org in next.config.js CSP'
    );
});

test('csp allows analytics.apache.org for script elements', () => {
    const layoutContents = fs.readFileSync(layoutPath, 'utf8');
    const nextConfigContents = fs.readFileSync(nextConfigPath, 'utf8');
    const vercelConfigContents = fs.readFileSync(vercelConfigPath, 'utf8');

    for (const contents of [layoutContents, nextConfigContents, vercelConfigContents]) {
        assert.ok(
            contents.includes('analytics.apache.org'),
            'Expected analytics.apache.org in CSP sources'
        );
        assert.ok(
            contents.includes('script-src-elem'),
            'Expected script-src-elem directive in CSP'
        );
    }
});
