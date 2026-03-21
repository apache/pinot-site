export interface UseCase {
    id: string;
    icon: string;
    title: string;
    description: string;
    details: string[];
    learnMoreLink: string;
}

const useCasesData: UseCase[] = [
    {
        id: 'real-time-dashboards',
        icon: '/static/images/use-cases/dashboards.svg',
        title: 'Real-Time Dashboards',
        description:
            'Power internal and external dashboards with sub-second query latency on fresh data. Serve dynamic, interactive visualizations to teams and customers.',
        details: [
            'Sub-second query latency for interactive dashboard updates',
            'Fresh data ingested in real-time from streaming sources',
            'Support for complex aggregations and filters'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/getting-started'
    },
    {
        id: 'user-facing-analytics',
        icon: '/static/images/use-cases/analytics.svg',
        title: 'User-Facing Analytics',
        description:
            'Embed analytics directly in your product, serving hundreds of thousands of concurrent queries. Enable your users to explore data in real-time.',
        details: [
            'Handle hundreds of thousands of concurrent queries per second',
            'Horizontally scalable architecture for growing demand',
            'Built-in multitenancy for product isolation'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/architecture'
    },
    {
        id: 'anomaly-detection',
        icon: '/static/images/use-cases/anomaly.svg',
        title: 'Anomaly Detection',
        description:
            'Detect anomalies in real-time across metrics from streaming sources like Kafka. Build proactive alerting systems and catch issues as they happen.',
        details: [
            'Ingest data in real-time from Kafka, Pulsar, and Kinesis',
            'Query freshly ingested data immediately for anomaly detection',
            'High-concurrency support for continuous monitoring systems'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/data-ingestion'
    },
    {
        id: 'adhoc-olap',
        icon: '/static/images/use-cases/olap.svg',
        title: 'Ad-Hoc OLAP Queries',
        description:
            'Run flexible, exploratory analytical queries on petabyte-scale datasets. Support data exploration and business intelligence workloads.',
        details: [
            'Query petabyte-scale datasets with millisecond latencies',
            'SQL interface for flexible analytical queries',
            'Rich indexing options for optimized query performance'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/indexing'
    },
    {
        id: 'event-analytics',
        icon: '/static/images/use-cases/events.svg',
        title: 'Event Analytics',
        description:
            'Analyze clickstreams, app events, and IoT data in real time. Understand user behavior and system performance with immediate insights.',
        details: [
            'Batch and streaming ingestion from diverse sources',
            'Efficient storage and querying of high-volume events',
            'Support for time-series analysis and windowing'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/getting-started'
    },
    {
        id: 'personalization',
        icon: '/static/images/use-cases/personalization.svg',
        title: 'Personalization & Recommendations',
        description:
            'Power real-time recommendation engines with millisecond lookup times. Deliver personalized experiences based on fresh user behavior data.',
        details: [
            'Millisecond-latency lookups for real-time personalization',
            'Support for complex joins between user and behavioral data',
            'Upserts for real-time profile updates'
        ],
        learnMoreLink: 'https://docs.pinot.apache.org/basics/getting-started'
    }
];

export default useCasesData;
