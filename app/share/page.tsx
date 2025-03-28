'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Toc from '@/components/Toc';
import { useIsMobile } from '../hooks/useIsMobile';
import siteMetadata from '@/data/siteMetadata';

const YouTubeShare = () => {
    const isMobile = useIsMobile();
    const images = siteMetadata.youtubeShare.mainPage.images;

    const sortedImages = useMemo(() => {
        return [...images].sort((a, b) => {
            return Number(b.priority) - Number(a.priority);
        });
    }, []);

    const displayedImages = isMobile ? sortedImages.slice(0, 4) : images;

    return (
        <main className="m-auto flex max-w-[1020px] gap-20 text-stone-900">
            <Toc />
            <section className="flex flex-col gap-10 px-5 pb-5 pt-10 md:px-0">
                <h1 className=" text-[28px] font-semibold md:text-[40px] md:font-bold">
                    {siteMetadata.youtubeShare.mainPage.title}
                </h1>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {displayedImages.map((img, idx) => (
                        <div key={idx}>
                            <img src={img.src} alt={img.alt} className="h-auto w-full rounded-md" />
                        </div>
                    ))}
                </div>

                <div className="flex max-w-[700px] flex-col gap-4">
                    <div>
                        <h2 className="text-[20px] font-semibold md:text-[22px]">
                            Apache Pinot OSS YouTube Channel
                        </h2>
                        <p>
                            A central hub for Apache Pinot videos: meetup talks, tutorials, and
                            real-world use cases- all in one place! If you’ve shared a talk or found
                            a great video online, send it our way, and we’ll feature it! For the
                            community- by the community.
                        </p>
                    </div>

                    <div>
                        <h3
                            id="how-to-contribute"
                            className="text-[20px] font-semibold md:text-[22px]"
                        >
                            How to Contribute?
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>
                                Video is already on YouTube? Share the link, and we'll list it under
                                the channel (no need for raw files).
                            </li>
                            <li>Have raw files? We can edit and upload the video for you!</li>
                        </ul>
                    </div>

                    <div>
                        <h3
                            id="where-to-share"
                            className="text-[20px] font-semibold md:text-[22px]"
                        >
                            Where to Share?
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>
                                Post in{' '}
                                <a
                                    href="https://apache-pinot.slack.com/archives/C08GH2MAVT4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    #pinot-youtube-channel
                                </a>
                                on Pinot Slack
                            </li>
                            <li>
                                Email{' '}
                                <a href="mailto:apachepinot@gmail.com" className="custom-link">
                                    apachepinot@gmail.com
                                </a>{' '}
                                (Subject: Pinot YouTube Channel)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-20 flex flex-wrap items-center justify-center md:mb-48 md:mt-4 md:justify-start">
                    <img src="/static/images/youtube_default.svg" alt="youtube" className="mr-3" />
                    <span className="">
                        <Link
                            href="https://www.youtube.com/@ApachePinot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="custom-link"
                        >
                            Apache Pinot OSS YouTube Channel
                        </Link>
                    </span>
                </div>
            </section>
        </main>
    );
};

export default YouTubeShare;
