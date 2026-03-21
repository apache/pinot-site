interface BenchmarkMetric {
    value: string;
    label: string;
    description: string;
}

const benchmarkData: BenchmarkMetric[] = [
    {
        value: 'P99 < 100ms',
        label: 'Query Latency',
        description: 'Sub-100ms latencies for analytical queries at scale'
    },
    {
        value: '200,000+ QPS',
        label: 'Throughput',
        description: 'Queries per second in production deployments'
    },
    {
        value: '< 1 second',
        label: 'Data Freshness',
        description: 'End-to-end latency from Kafka to queryable'
    },
    {
        value: '1M+ events/sec',
        label: 'Ingest Rate',
        description: 'Data ingestion throughput per second'
    }
];

export default benchmarkData;
