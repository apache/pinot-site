import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { genPageMetadata } from 'app/seo';
import BlogCard from '@/components/BlogCard';

export const metadata = genPageMetadata({ title: 'Blog' });

export default function BlogPage() {
    const posts = allCoreContent(sortPosts(allBlogs));

    return (
        <section aria-labelledby="blog-section-title" className="mt-8 pb-32">
            <header className="p-8 text-center md:p-0 md:pt-16">
                <h1 className="mb-6 text-3xl font-bold md:pb-10 md:text-5xl">
                    Apache Pinot&trade; blog
                </h1>
            </header>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:px-24">
                {posts.map((post, index) => {
                    return <BlogCard key={index} post={post} />;
                })}
            </div>
        </section>
    );
}
