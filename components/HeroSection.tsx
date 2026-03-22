import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import pinotMeta from '@/data/pinot-meta.json';
import ResponsiveImage from './ResponsiveImage';

const HeroSection = () => {
    const isDesktop = false;

    return (
        <section className="md:mx-auto md:max-w-screen-outerLiveArea">
            <div className="p-8 text-center md:pb-12 md:pt-24">
                <h1 className="mb-4 text-4xl font-bold leading-[45px] md:text-[3.5rem] md:leading-[70px]">
                    {pinotMeta.heroHeadline}
                </h1>
                <p className="m-auto mb-8 max-w-4xl text-lg md:leading-[28.80px]">
                    {pinotMeta.heroDescription}
                </p>
                <div className="flex justify-center gap-4">
                    <Button
                        variant="default"
                        size="xl"
                        className="rounded-lg bg-vine-100 px-5 py-3 text-xl sm:px-8"
                    >
                        <Link href={siteMetadata.cta.getStarted} target="_blank">
                            Get Started
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        className="rounded-lg border-2 border-vine-100 px-5 py-3 text-xl text-vine-100 hover:border-vine-120 hover:text-vine-120 sm:px-8"
                    >
                        <Link href="/use-cases/">Explore Use Cases</Link>
                    </Button>
                </div>
            </div>
            <ResponsiveImage />
        </section>
    );
};

export default HeroSection;
