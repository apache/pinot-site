import rss from './rss.mjs';
import generateDirectoryIndexes from './generate-directory-indexes.mjs';

async function postbuild() {
    await rss();
    generateDirectoryIndexes();
}

postbuild();
