'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import GitHub from '@/data/github.svg';
import { formatNumber, getStars, isLessThanOneHourAgo } from '@/app/lib/stars.utils';
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav';
// import ThemeSwitch from './ThemeSwitch';
import SearchButton from './SearchButton';
// import YouTubeBanner from './YouTubeBanner';
import AnnouncementBar from './AnnouncementBar';

const Header = () => {
    const [stars, setStars] = useState<string | null>(null);
    const pathname = usePathname();

    const isSharePage = pathname === '/share/';

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
                    setStars(null);
                }
            }
        };
        fetchStars();
    }, []);

    return (
        <>
            {/* <ReleaseBanner /> */}
            {/* !isSharePage && <YouTubeBanner /> */}
            <AnnouncementBar
                text={siteMetadata.announcement.text}
                buttonText={siteMetadata.announcement.buttonText}
                backgroundColor="bg-[#C7154A]"
                textColor="text-white"
                buttonHref={siteMetadata.announcement.link}
                buttonColor="text-white"
                expiresAfter={siteMetadata.announcement.expiresAfter}
            />
            <header className="border-b-1 flex items-center justify-between gap-4 border-b px-5 py-3 md:px-6 md:py-4 lg:px-8 xl:px-[4rem]">
                <div className="flex min-w-0 flex-1 items-center">
                    <Link href="/" aria-label={siteMetadata.headerTitle}>
                        <div className="flex shrink-0 items-center justify-between">
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

                    <div className="ml-5 hidden min-w-0 flex-1 items-center gap-4 text-[15px] leading-5 xl:ml-10 xl:flex xl:gap-8 xl:text-lg">
                        {headerNavLinks
                            .filter((link) => link.href !== '/')
                            .map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className={`whitespace-nowrap ${
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
                <div className="hidden shrink-0 items-center gap-2 sm:flex lg:gap-3">
                    <SearchButton />
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="px-2.5 py-2 text-sm lg:px-3 lg:text-base"
                    >
                        <Link href={siteMetadata.github} target="_blank">
                            <GitHub className={`${stars && 'mr-2'}`} />
                            {stars && stars}
                        </Link>
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        asChild
                        className="bg-vine-100 px-4 py-2 text-sm lg:px-5 lg:text-base xl:px-6"
                    >
                        <Link href={siteMetadata.cta.getStarted} target="_blank">
                            Get Started
                        </Link>
                    </Button>
                </div>
                <MobileNav stars={stars} />
            </header>
        </>
    );
};

export default Header;
