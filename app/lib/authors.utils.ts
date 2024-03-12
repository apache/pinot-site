import { allBlogs, allAuthors } from 'contentlayer/generated';
import type { Authors, Blog } from 'contentlayer/generated';
import { coreContent } from 'pliny/utils/contentlayer';

const getAuthorsFromBlogPost = (slug: string) => {
    const post = allBlogs.find((p) => p.slug === slug) as Blog;
    const authorList = post?.authors || ['default'];

    return authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author);
        return coreContent(authorResults as Authors);
    });
};

export { getAuthorsFromBlogPost };
