import Link from 'next/link';
import { allDownloads } from 'contentlayer/generated';
import { genPageMetadata } from '../seo';
import { transformAndSortDownloads } from '../lib/download.utils';
import Downloads from '@/components/DownloadTable/Downloads';
import DownloadInstall from '@/components/DownloadInstall';
import pinotMeta from '@/data/pinot-meta.json';

export const metadata = genPageMetadata({
    title: 'Download',
    description: `Download Apache Pinot ${pinotMeta.latestVersion} - ${pinotMeta.shortDescription}`
});

const Download = () => {
    const downloads = transformAndSortDownloads(allDownloads);

    return (
        <>
            <section>
                <header className="p-8 text-center md:p-0 md:pt-16">
                    <h1 className="mb-6 text-3xl font-bold md:text-5xl">
                        Apache Pinot&trade; Download
                    </h1>
                    <p className="mb-2 text-lg font-medium text-vine-100">
                        Latest release: {pinotMeta.latestVersion} ({pinotMeta.latestReleaseDate})
                    </p>
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
                            href="https://www.apache.org/dyn/closer.lua/pinot/KEYS"
                            className="custom-link"
                        >
                            KEYS
                        </Link>{' '}
                        for any Apache release.
                    </p>
                </header>
                <DownloadInstall />
                <Downloads data={downloads} />
            </section>
        </>
    );
};

export default Download;
