import React from 'react';
import Link from 'next/link';
import { Blog } from '@/.contentlayer/generated';
import BlogCard from './BlogCard';
import { CoreContent } from 'pliny/utils/contentlayer';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface BlogSectionProps {
    posts: CoreContent<Blog>[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
    return (
        <section
            aria-labelledby="blog-section-title"
            className="md:mx-auto md:max-w-screen-outerLiveArea"
        >
            <h4
                id="blog-section-title"
                className="m-12 text-center text-[2rem] font-bold leading-10 lg:mt-24"
            >
                Pinot Blog
            </h4>
            <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:px-24">
                {posts.slice(0, 3).map((post) => {
                    return <BlogCard key={post.slug} post={post} />;
                })}
            </div>
            <div className="mt-8 pb-14 text-center md:pb-32">
                <Button
                    variant="link"
                    asChild
                    className="text-base font-semibold leading-tight text-vine-100"
                >
                    <Link href={'/blog'}>
                        Browse All
                        <ArrowRight className="mr-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default BlogSection;
