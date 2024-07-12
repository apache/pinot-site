'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import GitHub from '@/data/github.svg';
import Link from './Link';
import MobileNav from './MobileNav';
// import ThemeSwitch from './ThemeSwitch';
import SearchButton from './SearchButton';
import AnnouncementBar from './AnnouncementBar';
import { Button } from '@/components/ui/button';
import { formatNumber, getFallbackStars, getStars } from '@/app/lib/stars.utils';
import { useEffect, useState } from 'react';

export function isLessThanOneHourAgo(date: Date): boolean {
    const oneHourInMillis = 60 * 60 * 1000; // Number of milliseconds in one hour
    const currentTime = new Date().getTime();
    const inputTime = date.getTime();

    return currentTime - inputTime < oneHourInMillis;
}

const Header = () => {
    const [stars, setStars] = useState<string | null>(null);
    // const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const fetchStars = async () => {
            const cacheKey = 'githubStars';
            const cachedStars = localStorage.getItem(cacheKey);
            const storedDate = localStorage.getItem(`${cacheKey}_time`);
            const lastRunDate = storedDate ? new Date(storedDate) : new Date(0);

            // Use cached data if it's less than an hour old
            if (cachedStars && storedDate && isLessThanOneHourAgo(lastRunDate)) {
                setStars(cachedStars);
            } else {
                try {
                    const starCount = await getStars('apache', 'pinot');
                    const formattedStars = formatNumber(starCount);
                    setStars(formattedStars);
                    localStorage.setItem(cacheKey, formattedStars);
                    localStorage.setItem(`${cacheKey}_time`, new Date().toISOString());
                } catch (error) {
                    const fallbackStars = await getFallbackStars();
                    setStars(fallbackStars);
                }
            }
        };
        fetchStars();
    }, []);

    return (
        <>
            <AnnouncementBar
                buttonText={siteMetadata.announcement.buttonText as string}
                link={siteMetadata.announcement.link as string}
            >
                🎉🎉🎉 Announcing the release of Apache Pinot 1.1.0
            </AnnouncementBar>
            <header className="border-b-1 flex items-center justify-between border-b px-5 py-3 md:px-[4rem] md:py-4">
                <div className="flex">
                    <Link href="/" aria-label={siteMetadata.headerTitle}>
                        <div className="flex items-center justify-between">
                            <div className="">
                                <Logo />
                            </div>
                            {typeof siteMetadata.headerTitle === 'string' ? (
                                <div className="hidden h-6 text-2xl font-semibold sm:block">
                                    {siteMetadata.headerTitle}
                                </div>
                            ) : (
                                siteMetadata.headerTitle
                            )}
                        </div>
                    </Link>

                    <div className="ml-[4.5rem] flex items-center gap-12 text-lg leading-5">
                        {headerNavLinks
                            .filter((link) => link.href !== '/')
                            .map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className={`hidden sm:block ${
                                        pathname === link.href
                                            ? 'font-bold text-crimson-100'
                                            : 'font-medium text-gray-900 dark:text-gray-100'
                                    }`}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        {/* TODO - Implement design for darkmode */}
                        {/* Uncomment <ThemeSwitch /> when the design is ready */}
                        {/* <ThemeSwitch /> */}
                    </div>
                </div>
                <MobileNav stars={stars} />
                <div className="hidden gap-3 sm:flex">
                    <SearchButton />
                    <Button variant="outline" size="lg" asChild className="px-3 py-2 text-base">
                        <Link href={siteMetadata.github} target="_blank">
                            <GitHub className="mr-2" />
                            {stars ? stars : 'Loading...'}
                        </Link>
                    </Button>
                    <Button variant="default" size="lg" className="bg-vine-100 px-6 py-2 text-base">
                        <Link href={siteMetadata.cta.getStarted} target="_blank">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </header>
        </>
    );
};

export default Header;
