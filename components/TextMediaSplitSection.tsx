'use client';

import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TextMediaSplitSectionProps {
    heading: string;
    paragraphs?: string[];
    ctaText?: string;
    ctaHref?: string;
    videoUrl?: string;
    videoTitle?: string;
    imageUrl?: string;
    imageAlt?: string;
    target?: string;
}

const TextMediaSplitSection: React.FC<TextMediaSplitSectionProps> = ({
    heading,
    paragraphs,
    ctaText,
    ctaHref,
    videoUrl,
    videoTitle,
    imageUrl,
    imageAlt,
    target = '_blank'
}) => {
    return (
        <section className="bg-stone-100 dark:bg-gray-900">
            <div className="flex flex-col px-5 py-14 sm:flex-row sm:px-6 md:mx-auto md:max-w-screen-outerLiveArea md:gap-20 md:px-[5.5rem] md:py-[6.5rem]">
                <article className="flex flex-1 flex-col">
                    <header>
                        <h2 className="mb-3 text-[1.75rem] font-bold md:text-[2.5rem]">
                            {heading}
                        </h2>
                    </header>
                    {paragraphs &&
                        paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-base leading-relaxed md:text-lg">
                                {paragraph}
                            </p>
                        ))}

                    {ctaText && ctaHref && (
                        <Button
                            variant="link"
                            asChild
                            className="my-6 mr-2 justify-start p-0 text-lg font-semibold leading-tight text-vine-100"
                        >
                            <Link href={ctaHref} target={target} className="w-fit">
                                {ctaText}
                                <ArrowRight className="mr-2 h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                </article>
                <aside className="flex-1">
                    {videoUrl ? (
                        <iframe
                            className="h-[197px] w-full md:h-full"
                            src={videoUrl}
                            title={videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : imageUrl ? (
                        <img src={imageUrl} alt={imageAlt} />
                    ) : null}
                </aside>
            </div>
        </section>
    );
};

export default TextMediaSplitSection;
