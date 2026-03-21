import Image from 'next/image';
import React from 'react';
import companyLogos from '@/data/companyLogos';

const CompanyLogoBar: React.FC = () => {
    return (
        <section className="flex flex-col px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[4rem]">
            <div className="mx-auto w-full max-w-7xl">
                <h3 className="mb-12 text-center text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
                    Trusted by engineering teams at leading companies
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {companyLogos.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
                        >
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
        </section>
    );
};

export default CompanyLogoBar;
