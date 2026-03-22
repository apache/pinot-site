type DownloadData = {
    version: string;
    date: string;
    href: string;
    officialSource: {
        download: string;
        sha512: string;
        asc: string;
    };
    binary: {
        download: string;
        sha512: string;
        asc: string;
    };
    releaseNotes?: string;
};

const downloadData: DownloadData[] = [
    {
        version: '1.4.0',
        date: '9/30/2025',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.4.0/apache-pinot-1.4.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release delivers significant improvements to the Multistage Engine, Pauseless Consumption, Time Series Engine, Logical Table support, Upsert and Deduplication Enhancement, Minion Jobs (including smallSegmentMerger), and Rebalancing capabilities. It also includes numerous smaller features and general bug fixes.'
    },
    {
        version: '1.3.0',
        date: '2/17/2025',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.3.0/apache-pinot-1.3.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release brings significant improvements, including enhancements to the multistage query engine and the introduction of an experimental time series query engine for efficient analysis. Key features include database query quotas, cursor-based pagination for large result sets, multi-stream ingestion, and new function support for URL and GeoJson. Security vulnerabilities and several bug fixes and performance enhancements have been addressed, ensuring a more robust and versatile platform.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    }
];

export { type DownloadData };

export default downloadData;
