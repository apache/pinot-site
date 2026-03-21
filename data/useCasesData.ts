export interface UseCaseExample {
    company: string;
    description: string;
    link: string;
}

export interface UseCase {
    id: string;
    icon: string;
    title: string;
    description: string;
    details: string[];
    example: UseCaseExample;
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
        example: {
            company: 'Stripe',
            description:
                'Stripe uses Pinot to power real-time billing dashboards, serving 10K+ queries/sec with sub-second latency while tracking $18.6B in transactions during Black Friday-Cyber Monday.',
            link: 'https://startree.ai/user-stories/stripe-journey-to-18-b-of-transactions-with-apache-pinot/'
        },
        learnMoreLink:
            'https://startree.ai/user-stories/stripe-journey-to-18-b-of-transactions-with-apache-pinot/'
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
        example: {
            company: 'LinkedIn',
            description:
                'LinkedIn built Pinot to power "Who Viewed Your Profile" and 50+ other user-facing apps, serving 250K+ queries/sec across 700M+ members.',
            link: 'https://engineering.linkedin.com/analytics/real-time-analytics-massive-scale-pinot'
        },
        learnMoreLink:
            'https://engineering.linkedin.com/analytics/real-time-analytics-massive-scale-pinot'
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
        example: {
            company: 'Cisco Webex',
            description:
                'Webex processes 100+ TB of telemetry data daily through Pinot for real-time observability and anomaly detection, replacing Elasticsearch and eliminating 500+ nodes.',
            link: 'https://startree.ai/resources/full-meetup-uber-webex-beaconstac-startree'
        },
        learnMoreLink:
            'https://startree.ai/resources/full-meetup-uber-webex-beaconstac-startree'
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
        example: {
            company: 'Uber',
            description:
                'Uber runs 100+ offline analytics use cases with 500+ production tables in Pinot, serving sub-second queries for inventory, catalog, and business intelligence workloads.',
            link: 'https://www.uber.com/blog/pinot-for-low-latency/'
        },
        learnMoreLink: 'https://www.uber.com/blog/pinot-for-low-latency/'
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
        example: {
            company: 'DoorDash',
            description:
                'DoorDash tracks ad impressions, clicks, and orders across 500+ dimensions in real time using Pinot, reducing query latency from 30-second timeouts to under 100ms.',
            link: 'https://startree.ai/resources/doordash-supporting-multiple-pinot-use-cases-at-scale/'
        },
        learnMoreLink:
            'https://startree.ai/resources/doordash-supporting-multiple-pinot-use-cases-at-scale/'
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
        example: {
            company: 'LinkedIn',
            description:
                'LinkedIn uses Pinot to compute near-real-time features for feed personalization, retrieving member actions with attributes in under 50ms at 20,000+ queries/sec.',
            link: 'https://startree.ai/resources/how-apache-pinot-serves-up-real-time-personalization-at-scale'
        },
        learnMoreLink:
            'https://startree.ai/resources/how-apache-pinot-serves-up-real-time-personalization-at-scale'
    }
];

export default useCasesData;
