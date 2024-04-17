import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import quotes from '@/data/companyQuotes';
import Link from './Link';

const CompanyStories: React.FC = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Set up a side effect to subscribe to the 'select' event from the carousel API
    useEffect(() => {
        const onSelect = () => {
            if (carouselApi) {
                setSelectedIndex(carouselApi.selectedScrollSnap());
            }
        };

        if (carouselApi) {
            carouselApi.on('select', onSelect);
            // Trigger onSelect to initialise the selected index
            onSelect();
        }

        // Return a cleanup function that TypeScript recognises as a destructor
        return () => {
            if (carouselApi) {
                carouselApi.off('select', onSelect);
            }
        };
    }, [carouselApi]);

    return (
        <section className="bg-stone-100 dark:bg-gray-900">
            <div className="flex flex-col px-[2.625rem] py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[13.25rem] md:py-[6.5rem]">
                <article>
                    <Carousel
                        setApi={setCarouselApi}
                        className="rounded border-[1.5px] border-amber-800"
                    >
                        <CarouselPrevious variant={'ghost'} className="left-0 z-10 -ml-10" />
                        <CarouselContent>
                            {quotes.map((quote, index) => (
                                <CarouselItem
                                    key={index}
                                    className="flex flex-col items-center justify-center p-4"
                                >
                                    <Image
                                        src={quote.logo}
                                        alt={quote.company}
                                        className=" pb-5 pt-8"
                                        width={132}
                                        height={28}
                                    />
                                    {quote.text && (
                                        <span className=" max-w-[52rem]">
                                            <p className="text-center text-lg text-gray-900 dark:text-white md:text-xl">
                                                “{quote.text}”
                                            </p>

                                            <p className="pb-1 pt-4 text-center text-gray-500 dark:text-gray-300 md:text-base">
                                                - {quote.author}
                                            </p>
                                        </span>
                                    )}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext variant={'ghost'} className="right-0 z-10 -mr-10" />
                        {/* Navigation dots */}
                        <div className="mb-8 flex items-center justify-center">
                            {quotes.map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={`mx-1 h-2 w-2 rounded-full bg-amber-800 transition-opacity duration-300 ${
                                        index === selectedIndex ? 'opacity-100' : 'opacity-30'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() => carouselApi?.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </Carousel>
                </article>
                <Button
                    variant="link"
                    asChild
                    className="justify-center p-0 pt-8 text-base font-semibold leading-tight text-vine-100 md:pt-12"
                >
                    <Link href={'/powered-by'}>
                        See Company Stories
                        <ArrowRight className="mr-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default CompanyStories;
