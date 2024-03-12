// use client;

import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Terminal from './Terminal';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';

interface TextCodeSplitSectionProps {
    title: string;
}

const TextCodeSplitSection: React.FC<TextCodeSplitSectionProps> = ({ title }) => {
    return (
        <section className="bg-stone-100 dark:bg-gray-900 ">
            <div className="mx-auto flex flex-col px-5 py-14 sm:flex-row sm:px-6 md:mx-auto md:max-w-screen-outerLiveArea md:px-[11.75rem] md:py-[6.5rem]">
                <article className="flex flex-col">
                    <header className="pb-6 md:pb-8 md:pt-6">
                        <h2 className=" text-[2rem] font-bold leading-10 text-gray-900 dark:text-white md:text-5xl md:leading-[4rem]">
                            {title}
                        </h2>
                    </header>
                    <div className="flex justify-start pb-6">
                        <Button
                            variant="default"
                            size="lg"
                            className="mr-2 rounded-lg bg-vine-100 px-8 py-3 text-xl"
                        >
                            <Link href={siteMetadata.cta.getStarted} target="_blank">
                                get started
                            </Link>
                        </Button>
                    </div>
                </article>
                <aside className="flex flex-col overflow-hidden rounded-lg md:w-4/6">
                    <Terminal />
                </aside>
            </div>
        </section>
    );
};

export default TextCodeSplitSection;
