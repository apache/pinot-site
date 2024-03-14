'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';

interface PostHeading {
    depth: number;
    value: string;
    url: string;
}

interface TocProps {
    chapters: PostHeading[];
}

function TableOfContents({ chapters }: TocProps) {
    const [activeSlug, setActiveSlug] = useState(chapters.length > 0 ? chapters[0].url : '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry?.isIntersecting) {
                        setActiveSlug(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: '-30% 0px'
            }
        );

        chapters.forEach((chapter) => {
            const element = document.querySelector(chapter.url);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [chapters]);

    return (
        <nav className="flex items-center self-start" aria-label="Table of Contents">
            <ol className="list-none space-y-3">
                {chapters.map((heading: PostHeading) => {
                    return (
                        <li
                            key={heading.url}
                            className={cn(
                                'text-sm font-normal leading-tight',
                                heading.depth === 3 && 'ml-6 font-normal',
                                heading.depth === 4 && 'ml-8 font-normal',
                                heading.depth === 5 && 'ml-10 font-normal',
                                activeSlug === heading.url && 'font-bold'
                            )}
                        >
                            <Link href={`${heading.url}`}>{heading.value}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default TableOfContents;
