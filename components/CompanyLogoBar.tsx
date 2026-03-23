import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import companyLogos from '@/data/companyLogos';

// Curated top-tier logos for the compressed trust bar (10 logos)
const featuredLogoNames = [
    'LinkedIn',
    'Uber',
    'Stripe',
    'Walmart',
    'Visa',
    'NVIDIA',
    'Goldman Sachs',
    'Slack',
    'Target',
    'DoorDash'
];

const featuredLogos = featuredLogoNames
    .map((name) => companyLogos.find((c) => c.name === name))
    .filter(Boolean) as (typeof companyLogos)[number][];

const CompanyLogoBar: React.FC = () => {
    return (
        <section className="flex flex-col py-10 md:py-14">
            <div className="mx-auto w-full max-w-6xl px-6">
                <h3 className="mb-8 text-center text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
                    Trusted by engineering teams at leading companies
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
                    {featuredLogos.map((company) => (
                        <div
                            key={company.name}
                            className="flex shrink-0 items-center justify-center"
                        >
                            <Image
                                src={company.logo}
                                alt={company.alt}
                                width={200}
                                height={60}
                                className="h-auto w-auto max-w-[120px] dark:invert md:max-w-[160px]"
                                priority={false}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <Link
                        href="/powered-by/"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        See all users &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CompanyLogoBar;
