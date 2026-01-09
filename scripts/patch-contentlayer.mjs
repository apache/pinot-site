import fs from 'node:fs';
import path from 'node:path';

const nodeMajor = Number(process.versions.node.split('.')[0]);

if (Number.isNaN(nodeMajor) || nodeMajor < 22) {
    process.exit(0);
}

const targetPath = path.join(
    process.cwd(),
    'node_modules',
    '@contentlayer',
    'core',
    'dist',
    'generation',
    'generate-dotpkg.js'
);

if (!fs.existsSync(targetPath)) {
    console.warn(`contentlayer patch skipped: ${targetPath} not found.`);
    process.exit(0);
}

const source = fs.readFileSync(targetPath, 'utf8');

if (source.includes("with { type: 'json' }")) {
    process.exit(0);
}

const needle = `const needsJsonAssertStatement = nodeVersionMajor > 16 || (nodeVersionMajor === 16 && nodeVersionMinor >= 14);
    const assertStatement = needsJsonAssertStatement ? \` assert { type: 'json' }\` : '';`;

const replacement = `const needsJsonWithStatement = nodeVersionMajor >= 22;
    const needsJsonAssertStatement =
        !needsJsonWithStatement &&
        (nodeVersionMajor > 16 || (nodeVersionMajor === 16 && nodeVersionMinor >= 14));
    const assertStatement = needsJsonWithStatement
        ? \` with { type: 'json' }\`
        : needsJsonAssertStatement
        ? \` assert { type: 'json' }\`
        : '';`;

if (!source.includes(needle)) {
    throw new Error('contentlayer patch failed: expected snippet not found.');
}

const patched = source.replace(needle, replacement);
fs.writeFileSync(targetPath, patched, 'utf8');
console.log('contentlayer patch applied for Node >= 22.');
