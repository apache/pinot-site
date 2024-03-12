import { ReactNode } from 'react';
import { CoreContent } from 'pliny/utils/contentlayer';
import type { Blog, Authors } from 'contentlayer/generated';
import SectionContainer from '@/components/SectionContainer';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import TableOfContents from '@/components/TableOfContents';
import { format } from 'date-fns';

interface LayoutProps {
    content: CoreContent<Blog>;
    authorDetails: CoreContent<Authors>[];
    next?: { path: string; title: string };
    prev?: { path: string; title: string };
    children: ReactNode;
}

interface PostHeading {
    depth: number;
    value: string;
    url: string;
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
    const { filePath, path, slug, date, title, tags, toc, readingTime, customSlug, customPath } =
        content;

    const tocArray = toc as unknown as PostHeading[];

    return (
        <section className=" px-5 pt-10 md:px-[13.313rem] md:py-16">
            <ScrollTopAndComment />
            <article className="">
                <div className="mx-auto lg:flex">
                    <div className="lg:pr-12">
                        <header className="pt-6 md:pr-10">
                            <h1 className="text-4xl font-semibold">{title}</h1>
                            {authorDetails.length > 0 && (
                                <p className="pt-2 text-lg">
                                    By: {authorDetails.map((author) => author.name).join(', ')}
                                </p>
                            )}
                            <p className="py-2 text-sm">
                                {format(date, 'MMMM do, yyyy')} • {readingTime.text}
                            </p>
                        </header>

                        <div className="flex flex-col lg:flex-row">
                            <main className="">
                                <div className="prose max-w-[45rem] pb-8 pt-10 dark:prose-invert">
                                    {children}
                                </div>
                            </main>
                        </div>
                    </div>
                    <aside className="mt-10 hidden border-l-2 pl-5 lg:sticky lg:top-1 lg:block lg:h-full">
                        <section className="sticky top-0 mb-4 w-[15.375rem]">
                            <div className="flex flex-col space-y-1.5 pb-3">
                                <h3 className="text-sm font-semibold leading-snug text-neutral-500 dark:text-neutral-100">
                                    Table of Contents
                                </h3>
                            </div>
                            <TableOfContents chapters={tocArray} />
                        </section>
                    </aside>
                </div>
            </article>
        </section>
    );
}
