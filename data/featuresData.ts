export type DescriptionContent = string | { text: string; url: string };
interface Feature {
    imageSrc: string;
    title: string;
    description: DescriptionContent[];
}

const featuresData: Feature[] = [
    {
        imageSrc: '/static/images/features/fast_queries.svg',
        title: 'Fast Queries',
        description: [
            'Filter and aggregate petabyte data sets with P90 latencies in the tens of milliseconds—fast enough to return live results interactively in the UI.'
        ]
    },
    {
        imageSrc: '/static/images/features/high_concurrency.svg',
        title: 'high concurrency',
        description: [
            'With user-facing applications querying Pinot directly, it can serve hundreds of thousands of concurrent queries per second.'
        ]
    },
    {
        imageSrc: '/static/images/features/batch_ingest.svg',
        title: 'batch and streaming ingest',
        description: [
            'Ingest from ',
            { text: 'Apache Kafka', url: 'https://kafka.apache.org/' },
            ', ',
            { text: 'Apache Pulsar', url: 'https://pulsar.apache.org/' },
            ', and ',
            { text: 'AWS Kinesis', url: 'https://aws.amazon.com/kinesis/' },
            ' in real time. Batch ingest from Hadoop, Spark, AWS S3, and more. Combine batch and streaming sources into a single table for querying.'
        ]
    },
    {
        imageSrc: '/static/images/features/upsert.svg',
        title: 'upserts',
        description: [
            'Ingest the same record many times, but see only the latest value at query time. Upserts are built-in and production-tested since version 0.6.'
        ]
    },
    {
        imageSrc: '/static/images/features/versatile_joins.svg',
        title: 'versatile joins',
        description: ['Perform arbitrary fact/dimension and fact/fact joins on petabyte data sets.']
    },
    {
        imageSrc: '/static/images/features/options.svg',
        title: 'rich indexing options',
        description: [
            'Choose from pluggable indexes including ',
            {
                text: 'timestamp',
                url: 'https://docs.pinot.apache.org/basics/indexing/timestamp-index'
            },
            ', ',
            {
                text: 'inverted',
                url: 'https://docs.pinot.apache.org/basics/indexing/inverted-index'
            },
            ', ',
            {
                text: 'StarTree',
                url: 'https://docs.pinot.apache.org/basics/indexing/star-tree-index'
            },
            ', ',
            {
                text: 'Bloom filter',
                url: 'https://docs.pinot.apache.org/basics/indexing/bloom-filter'
            },
            ', ',
            { text: 'range', url: 'https://docs.pinot.apache.org/basics/indexing/range-index' },
            ', ',
            {
                text: 'text',
                url: 'https://docs.pinot.apache.org/basics/indexing/text-search-support'
            },
            ', ',
            { text: 'JSON', url: 'https://docs.pinot.apache.org/basics/indexing/json-index' },
            ', and ',
            {
                text: 'geospatial',
                url: 'https://docs.pinot.apache.org/basics/indexing/geospatial-support'
            },
            ' options.'
        ]
    },
    {
        imageSrc: '/static/images/features/built_scale.svg',
        title: 'built for scale',
        description: [
            'Pinot is horizontally scalable and fault-tolerant, adaptable to workloads across the storage and throughput spectrum.'
        ]
    },
    {
        imageSrc: '/static/images/features/sql_query.svg',
        title: 'SQL query interface',
        description: [
            'The highly standard SQL query interface is accessible through a built-in query editor and a REST API.'
        ]
    },
    {
        imageSrc: '/static/images/features/multitenancy.svg',
        title: 'built-in multitenancy',
        description: [
            'Manage and secure data in isolated logical namespaces for cloud-friendly resource management.'
        ]
    }
];

export default featuresData;
