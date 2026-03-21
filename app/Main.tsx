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
import BenchmarkSection from '@/components/BenchmarkSection';
import CompanyStories from '@/components/CompanyCarousel';
import CommunitySection from '@/components/CommunitySection';
import TextCodeSplitSection from '@/components/TextCodeSplitSection';
import BlogSection from '@/components/BlogSection';

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
        </>
    );
};

export default Home;
