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
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.0.0',
        date: '9/20/2023',
        href: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://downloads.apache.org/pinot/apache-pinot-1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    }
];

export { type DownloadData };

export default downloadData;
