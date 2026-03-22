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
        version: '1.2.0',
        date: '8/20/2024',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.2.0/apache-pinot-1.2.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release comes with several Improvements and Bug Fixes for the Multistage Engine, Upserts and Compaction. There are a ton of other small features and general bug fixes.'
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
    },
    {
        version: '1.0.0',
        date: '9/12/2023',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/1.0.0/apache-pinot-1.0.0-bin.tar.gz.asc'
        },
        releaseNotes: 'Apache Pinot Release 1.0.0'
    },
    {
        version: '0.12.1',
        date: '3/12/2023',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.1/apache-pinot-0.12.1-bin.tar.gz.asc'
        },
        releaseNotes: 'Apache Pinot Release 0.12.1'
    },
    {
        version: '0.12.0',
        date: '1/19/2023',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.12.0/apache-pinot-0.12.0-bin.tar.gz.asc'
        },
        releaseNotes: 'Apache Pinot Release 0.12.0'
    },
    {
        version: '0.11.0',
        date: '9/02/2022',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.11.0/apache-pinot-0.11.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'Apache Pinot 0.11.0 has introduced many new features to extend the query abilities, e.g. the Multi-Stage query engine enables Pinot to do distributed joins, more sql syntax(DML support), query functions and indexes(Text index, Timestamp index) supported for new use cases. And as always, more integrations with other systems(E.g. Spark3, Flink).'
    },
    {
        version: '0.10.0',
        date: '3/19/2022',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.10.0/apache-pinot-0.10.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduces some new great features, performance enhancements, UI improvments, and bug fixes which are described in details in the following sections.'
    },
    {
        version: '0.9.3',
        date: '12/24/2021',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.3/apache-pinot-0.9.3-bin.tar.gz.asc'
        },
        releaseNotes:
            'This is a bug fixing release contains: Update Log4j to 2.17.0 to address CVE-2021-45105 (#7933).'
    },
    {
        version: '0.9.2',
        date: '12/15/2021',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.2/apache-pinot-0.9.2-bin.tar.gz.asc'
        },
        releaseNotes:
            'This is a bug fixing release contains: Upgrade log4j to 2.16.0 to fix CVE-2021-45046 (#7903), upgrade swagger-ui to 3.23.11 to fix CVE-2019-17495 (#7902), fix the bug that RealtimeToOfflineTask failed to progress with large time bucket gaps (#7814).'
    },
    {
        version: '0.9.1',
        date: '12/12/2021',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.1/apache-pinot-0.9.1-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release fixes the major issue of CVE-2021-44228 and a major bug fixing of pinot admin exit code issue #7798.'
    },
    {
        version: '0.9.0',
        date: '11/12/2021',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.9.0/apache-pinot-0.9.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduces a new features: Segment Merge and Rollup to simplify users day to day operational work. A new metrics plugin is added to support dropwizard. As usual, new functionalities and many UI/ Performance improvements.'
    },
    {
        version: '0.8.0',
        date: '8/12/2021',
        href: 'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-bin.tar.gz',
        officialSource: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-src.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-src.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-bin.tar.gz',
            sha512: 'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-bin.tar.gz.sha512',
            asc: 'https://apachepinot.gateway.scarf.sh/pinot/0.8.0/apache-pinot-0.8.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduced several awesome new features, including compatibility tests, enhanced complex type and Json support, partial upsert support, and new stream ingestion plugins (AWS Kinesis, Apache Pulsar).'
    },
    {
        version: '0.7.1',
        date: '4/07/2021',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduced several awesome new features, including JSON index, lookup-based join support, geospatial support, TLS support for pinot connections, and various performance optimizations and improvements.'
    },
    {
        version: '0.6.0',
        date: '11/06/2020',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduced some excellent new features, including upsert, tiered storage, pinot-spark-connector, support of having clause, more validations on table config and schema'
    },
    {
        version: '0.5.0',
        date: '9/03/2020',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release includes many new features on Pinot ingestion and connectors, query capabilities and admin functions.'
    },
    {
        version: '0.4.0',
        date: '6/02/2020',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'This release introduced various new features, including the theta-sketch based distinct count aggregation function, an S3 filesystem plugin, a unified star-tree index implementation, deprecation of TimeFieldSpec in favor of DateTimeFieldSpec, etc.'
    },
    {
        version: '0.3.0',
        date: '3/25/2020',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz.asc'
        },
        releaseNotes:
            'The reason behind the architectural change from the previous release (0.2.0) and this release (0.3.0), is the possibility of extending Apache Pinot.'
    },
    {
        version: '0.2.0',
        date: '11/11/2019',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz.asc'
        },
        releaseNotes: 'Added support for Kafka 2.0'
    },
    {
        version: '0.1.0',
        date: '3/08/2019',
        href: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz',
        officialSource: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz.asc'
        },
        binary: {
            download:
                'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz',
            sha512: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz.sha512',
            asc: 'https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz.asc'
        },
        releaseNotes: 'This is the first official release of Apache Pinot.'
    }
];

export { type DownloadData };

export default downloadData;
