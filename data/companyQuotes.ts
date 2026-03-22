export interface CompanyQuote {
    logo: string;
    company: string;
    text: string;
    author: string;
    metric?: {
        value: string;
        label: string;
    };
    sourceLabel: string;
    sourceUrl: string;
}

const quotes: CompanyQuote[] = [
    {
        logo: '/static/images/stories/linkedin.svg',
        company: 'LinkedIn',
        text: 'Apache Pinot powers over 50 user-facing applications at LinkedIn, serving 250,000+ queries per second with millisecond latency across hundreds of billions of records.',
        author: 'LinkedIn Engineering',
        metric: {
            value: '250K+ QPS',
            label: 'across 50+ user-facing applications'
        },
        sourceLabel: 'Engineering post',
        sourceUrl:
            'https://engineering.linkedin.com/blog/2021/real-time-analytics-at-scale-with-pinot'
    },
    {
        logo: '/static/images/carousel/stripe.svg',
        company: 'Stripe',
        text: 'Pinot enables us to execute sub-second, petabyte-scale aggregation queries over fresh financial events. During Black Friday-Cyber Monday, Pinot helped us track over $18.6B in transaction volume across 300M+ transactions with P99 latency of 70ms.',
        author: 'Peter Bakkum, Stripe',
        metric: {
            value: '200K QPS',
            label: 'at P99 latency of 70ms across 3PB'
        },
        sourceLabel: 'Case study',
        sourceUrl:
            'https://startree.ai/user-stories/stripe-journey-to-18-b-of-transactions-with-apache-pinot'
    },
    {
        logo: '/static/images/stories/uber.svg',
        company: 'Uber',
        text: 'Uber relies on Apache Pinot for 100+ real-time analytics use cases across the marketplace. Our Neutrino service alone serves 500+ million Pinot queries daily, powering everything from ride tracking to catalog search over 10 billion+ row tables.',
        author: 'Uber Engineering',
        metric: {
            value: '500M+',
            label: 'queries served daily via Neutrino'
        },
        sourceLabel: 'Engineering post',
        sourceUrl: 'https://www.uber.com/blog/engineering/real-time-analytics/'
    },
    {
        logo: '/static/images/carousel/webex.svg',
        company: 'Cisco Webex',
        text: 'Apache Pinot replaced Elasticsearch for our real-time observability, delivering 5x to 150x better query performance. We shrank our cluster by 500+ nodes while handling 100+ TB of telemetry data per day with sub-second latency.',
        author: 'Cisco Webex Engineering',
        metric: {
            value: '500 nodes',
            label: 'eliminated vs. Elasticsearch'
        },
        sourceLabel: 'Case study',
        sourceUrl: 'https://pinot.apache.org/powered-by/'
    },
    {
        logo: '/static/images/companies/food/door_dash.svg',
        company: 'DoorDash',
        text: 'We migrated our metrics and alerting platform to Apache Pinot, reducing query latency from 30-second timeouts down to under 100ms. Pinot now powers real-time analytics across 500+ dimensions for our risk and ads platforms.',
        author: 'DoorDash Engineering',
        metric: {
            value: '<100ms',
            label: 'latency, down from 30s timeouts'
        },
        sourceLabel: 'Engineering post',
        sourceUrl:
            'https://doordash.engineering/2024/01/09/from-elasticsearch-to-apache-pinot-at-doordash/'
    },
    {
        logo: '/static/images/stories/walmart.svg',
        company: 'Walmart',
        text: 'Every order on walmart.com flows through Apache Pinot. We ingest 14 million events per minute from Kafka with under 900ms lag, enabling real-time order monitoring and dramatically reducing our Mean Time to Detect and Recover.',
        author: 'Walmart Global Tech',
        metric: {
            value: '14M',
            label: 'events/min ingested with <900ms lag'
        },
        sourceLabel: 'Engineering post',
        sourceUrl:
            'https://medium.com/walmartglobaltech/walmarts-real-time-analytics-with-apache-pinot-a9ecf4d76ee'
    },
    {
        logo: '/static/images/carousel/razorpay.svg',
        company: 'Razorpay',
        text: 'Apache Pinot transformed our payment monitoring from 15-20 minute batch delays to under 1 second data freshness. At peak, we ingest 1 million events per second while tracking 60 billion transactions per year across our platform.',
        author: 'Razorpay Engineering',
        metric: {
            value: '1M events/sec',
            label: 'at peak, 60B transactions/year'
        },
        sourceLabel: 'Engineering post',
        sourceUrl:
            'https://engineering.razorpay.com/building-real-time-analytics-at-razorpay-with-apache-pinot-b44ad1e2f244'
    }
];

export default quotes;
