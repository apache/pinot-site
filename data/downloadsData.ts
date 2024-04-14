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
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    },
    {
        version: '1.1.0',
        date: '3/25/2024',
        href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
        officialSource: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download'
        },
        binary: {
            download:
                'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download',
            sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download',
            asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download'
        },
        releaseNotes:
            'This release includes new multi-stage query engine features, enhancements, and bug fixes.'
    }
];

export { type DownloadData };

export default downloadData;
