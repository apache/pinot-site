import React from 'react';
import CompanyTable from '@/components/CompaniesTable';
import CompanyStoriesGrid from '@/components/CompanyStoriesGrid';
import { companiesUsingPinot } from '@/data/companiesUsingPinot';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { genPageMetadata } from '../seo';
import siteMetadata from '@/data/siteMetadata';

export const metadata = genPageMetadata({
    title: 'Powered By',
    description: 'Companies using Apache Pinot'
});

const PoweredBy = () => {
    return (
        <section>
            <header className="p-8 pb-6 text-center md:p-0 md:pt-16">
                <h1 className="mb-6 text-3xl font-bold md:pb-10 md:text-5xl">
                    Powered by Apache Pinot&trade;
                </h1>
                <h3 className="pt-4 text-2xl font-semibold md:pb-10">Company Stories</h3>
            </header>
            <CompanyStoriesGrid />
            <h3 className="p-4 pt-14 text-center text-2xl font-semibold md:pb-10">
                Companies Using Apache Pinot
            </h3>
            <CompanyTable companies={companiesUsingPinot} />
            <footer className="mx-5 my-14 bg-green-50 py-12 text-center md:mx-28 md:my-24">
                <h3 className="mb-6 px-16 text-2xl font-semibold md:mb-8">
                    Share your Apache Pinot story.
                </h3>
                <Button variant="default" size="lg" className="bg-vine-100 px-6 py-2 text-base">
                    <Link href={siteMetadata.shareStory.link} target="_blank">
                        Share Now
                    </Link>
                </Button>
            </footer>
        </section>
    );
};

export default PoweredBy;
