import { LocalDocument } from 'contentlayer/source-files';

const generateCustomSlug = (doc: LocalDocument) => {
    const baseName = doc._raw.sourceFileName.replace(/\.[^/.]+$/, '');
    const dateParts = baseName.split('-').slice(0, 3).join('/');
    const titlePart = baseName.split('-').slice(3).join('-');
    const customSlug = `${dateParts}/${titlePart}`;

    return customSlug;
};

const generateStandardSlug = (doc: LocalDocument) => {
    const slug = doc._raw.flattenedPath.replace(/^.+?(\/)/, '');

    return slug;
};

const geenrateStandardPath = (doc: LocalDocument) => {
    return doc._raw.flattenedPath;
};

const generateCustomPath = (doc: LocalDocument) => {
    const baseName = doc._raw.sourceFileName.replace(/\.[^/.]+$/, '');
    const dateParts = baseName.split('-').slice(0, 3).join('/');
    const titlePart = baseName.split('-').slice(3).join('-');
    const path = `blog/${dateParts}/${titlePart}`;

    return path;
};

export { generateCustomSlug, generateStandardSlug, geenrateStandardPath, generateCustomPath };
