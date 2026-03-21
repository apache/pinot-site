'use client';

import { FC } from 'react';
import { CoreContent } from 'pliny/utils/contentlayer';
import { Blog } from '@/.contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';
import HeroSection from '@/components/HeroSection';
import CompanyLogoBar from '@/components/CompanyLogoBar';
import TextMediaSplitSection from '@/components/TextMediaSplitSection';
import SectionContainer from '@/components/SectionContainer';
import Features from '@/components/Features';
import CompanyStories from '@/components/CompanyCarousel';
import BenchmarkSection from '@/components/BenchmarkSection';
import CommunitySection from '@/components/CommunitySection';
import TextCodeSplitSection from '@/components/TextCodeSplitSection';
import BlogSection from '@/components/BlogSection';
import VideoEmbed from '@/components/VideoEmbed';

interface HomeProps {
    posts: CoreContent<Blog>[];
}

const Home: FC<HomeProps> = ({ posts }) => {
    return (
        <>
            <HeroSection />
            <CompanyLogoBar />
            <TextMediaSplitSection
                videoUrl={siteMetadata.video.videoUrl}
                videoTitle={siteMetadata.video.title}
                heading={siteMetadata.video.heading}
                paragraphs={siteMetadata.video.paragraphs}
                ctaText="Learn More"
                ctaHref={siteMetadata.cta.learnMore}
            />
            <Features />
            <CompanyStories />
            <BenchmarkSection />
            <CommunitySection />
            <TextCodeSplitSection title={siteMetadata.codeSection.header} />
            <BlogSection posts={posts} />
            <TextMediaSplitSection
                heading={siteMetadata.youtubeShare.heading}
                paragraphs={siteMetadata.youtubeShare.paragraphs}
                ctaText={siteMetadata.youtubeShare.ctaText}
                ctaHref={siteMetadata.youtubeShare.link}
                imageUrl={siteMetadata.youtubeShare.imageUrl}
                imageAlt={siteMetadata.youtubeShare.imageAlt}
                target="_self"
            />
            {siteMetadata.youtubeShare.exampleVideos && (
                <section className="bg-stone-100 pb-14 dark:bg-gray-900 md:pb-[6.5rem]">
                    <div className="mx-auto grid max-w-screen-outerLiveArea grid-cols-1 gap-6 px-5 sm:px-6 md:grid-cols-2 md:px-[5.5rem]">
                        {siteMetadata.youtubeShare.exampleVideos.map((video, index) => (
                            <VideoEmbed key={index} src={video.url} title={video.title} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
