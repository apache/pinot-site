interface BenchmarkMetric {
    value: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
}

const benchmarkData: BenchmarkMetric[] = [
    {
        value: 'P99 < 100ms',
        label: 'Query Latency',
        description: 'Sub-100ms latencies for analytical queries at scale',
        source: 'Stripe case study',
        sourceUrl:
            'https://startree.ai/user-stories/stripe-journey-to-18-b-of-transactions-with-apache-pinot'
    },
    {
        value: '200,000+ QPS',
        label: 'Throughput',
        description: 'Queries per second in production deployments',
        source: 'LinkedIn case study',
        sourceUrl:
            'https://engineering.linkedin.com/blog/2021/real-time-analytics-at-scale-with-pinot'
    },
    {
        value: '< 1 second',
        label: 'Data Freshness',
        description: 'End-to-end latency from Kafka to queryable',
        source: 'Walmart engineering post',
        sourceUrl:
            'https://medium.com/walmartglobaltech/walmarts-real-time-analytics-with-apache-pinot-a9ecf4d76ee'
    },
    {
        value: '1M+ events/sec',
        label: 'Ingest Rate',
        description: 'Data ingestion throughput per second',
        source: 'Razorpay engineering post',
        sourceUrl:
            'https://engineering.razorpay.com/building-real-time-analytics-at-razorpay-with-apache-pinot-b44ad1e2f244'
    }
];

export default benchmarkData;
