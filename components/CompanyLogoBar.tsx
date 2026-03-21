import Image from 'next/image';
import React from 'react';
import companyLogos from '@/data/companyLogos';

const CompanyLogoBar: React.FC = () => {
    return (
        <section className="flex flex-col py-14 md:py-[4rem]">
            <div className="mx-auto w-full">
                <h3 className="mb-12 text-center text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
                    Trusted by engineering teams at leading companies
                </h3>
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-gray-950" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-gray-950" />
                    <div className="flex w-max animate-marquee items-center gap-12">
                        {/* Render logos twice for seamless loop */}
                        {[...companyLogos, ...companyLogos].map((company, index) => (
                            <div key={index} className="flex shrink-0 items-center justify-center">
                                <Image
                                    src={company.logo}
                                    alt={company.alt}
                                    width={120}
                                    height={40}
                                    className="h-auto w-auto max-w-[100px] dark:invert md:max-w-[120px]"
                                    priority={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyLogoBar;
