'use client';

import { FC } from 'react';
import { CoreContent } from 'pliny/utils/contentlayer';
import { Blog } from '@/.contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';
import HeroSection from '@/components/HeroSection';
import TextVideoSplitSection from '@/components/TextVideoSplitSection';
import SectionContainer from '@/components/SectionContainer';
import Features from '@/components/Features';
import CompanyStories from '@/components/CompanyCarousel';
import CommunitySection from '@/components/CommunitySection';
import TextCodeSplitSection from '@/components/TextCodeSplitSection';
import BlogSection from '@/components/BlogSection';

interface HomeProps {
    posts: CoreContent<Blog>[];
}

const Home: FC<HomeProps> = ({ posts }) => {
    return (
        <div>
            <HeroSection />
            <TextVideoSplitSection
                videoUrl={siteMetadata.video.videoUrl}
                title={siteMetadata.video.title}
            />
            <Features />
            <CompanyStories />
            <CommunitySection />
            <TextCodeSplitSection title={siteMetadata.codeSection.header} />
            <BlogSection posts={posts} />
        </div>
    );
};

export default Home;
