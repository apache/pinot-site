import Link from 'next/link';
import { allDownloads } from 'contentlayer/generated';
import { genPageMetadata } from '../seo';
import { transformAndSortDownloads } from '../lib/download.utils';
import Downloads from '@/components/DownloadTable/Downloads';

export const metadata = genPageMetadata({
    title: 'Download',
    description: 'Download Apache Pinot'
});

const Download = () => {
    const downloads = transformAndSortDownloads(allDownloads);

    return (
        <>
            <section>
                <header className="p-8 text-center md:p-0 md:pt-16">
                    <h1 className="mb-6 text-3xl font-bold md:text-5xl">
                        Apache Pinot&trade; download
                    </h1>
                    <p className="text-lg md:mb-12">
                        Be sure to verify your downloads by these{' '}
                        <Link
                            href="https://www.apache.org/info/verification"
                            className="custom-link"
                        >
                            procedures
                        </Link>{' '}
                        using these{' '}
                        <Link
                            href="https://downloads.apache.org/pinot/KEYS"
                            className="custom-link"
                        >
                            KEYS
                        </Link>{' '}
                        for any Apache release.
                    </p>
                </header>
                <Downloads data={downloads} />
            </section>
        </>
    );
};

export default Download;
