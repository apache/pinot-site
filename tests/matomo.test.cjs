const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const layoutPath = path.join(repoRoot, 'app', 'layout.tsx');

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
