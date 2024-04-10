'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';

interface TextVideoSplitSectionProps {
    videoUrl: string;
    title: string;
}

const TextVideoSplitSection: React.FC<TextVideoSplitSectionProps> = ({ videoUrl, title }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const imagePlaceholder = '/static/images/video_thumbnail.png';

    const handlePlaceholderClick = () => {
        setIframeLoaded(true);
        window.open(videoUrl, '_blank');
    };

    const handleKeyPress = (event) => {
        // Check if the key pressed is 'Enter' or 'Space'
        if (event.key === 'Enter' || event.key === ' ') {
            setIframeLoaded(true);
            window.open(videoUrl, '_blank');
        }
    };

    return (
        <section className="bg-stone-100 dark:bg-gray-900">
            <div className="flex flex-col px-5 py-14 sm:flex-row sm:px-6 md:mx-auto md:max-w-screen-outerLiveArea md:gap-20 md:px-[5.5rem] md:py-[6.5rem]">
                <article className="flex flex-1 flex-col">
                    <header>
                        <h2 className="mb-3 text-[1.75rem] font-bold md:text-[2.5rem]">
                            What is Apache Pinot?
                        </h2>
                    </header>
                    <p className="text-base leading-relaxed md:text-lg">
                        Originally developed at LinkedIn, Apache PinotTM is a real-time distributed
                        OLAP datastore, purpose-built to provide ultra low-latency analytics at
                        extremely high throughput.
                    </p>
                    <br />
                    <p className="text-base leading-relaxed md:text-lg">
                        With its distributed architecture and columnar storage, Apache Pinot
                        empowers businesses to gain valuable insights from real-time data,
                        supporting data-driven decision-making and applications.
                    </p>
                    <Button
                        variant="link"
                        asChild
                        className="my-6 mr-2 justify-start p-0 text-lg font-semibold leading-tight text-vine-100"
                    >
                        <Link href={siteMetadata.cta.learnMore} target="_blank">
                            learn more
                            <ArrowRight className="mr-2 h-5 w-5" />
                        </Link>
                    </Button>
                </article>
                <aside className="flex-1">
                    <div
                        className="video-placeholder flex h-[197px] w-full cursor-pointer items-center justify-center bg-cover bg-center md:h-full"
                        onClick={handlePlaceholderClick}
                        onKeyPress={handleKeyPress}
                        role="button"
                        tabIndex={0} // Make it focusable
                        style={{ backgroundImage: `url(${imagePlaceholder})` }}
                        aria-label={title || 'Open video in new tab'}
                    />
                </aside>
            </div>
        </section>
    );
};

export default TextVideoSplitSection;
