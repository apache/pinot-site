import Link from 'next/link';
import { Button } from './ui/button';
import siteMetadata from '@/data/siteMetadata';

const workloadPatterns = [
    {
        title: 'LLM Agent Querying Real-Time Data',
        description:
            'LLM agents translate natural language into Pinot SQL, enabling non-technical users and autonomous systems to query fresh analytics data without writing code.',
        query: `-- Natural language: "How many impressions did campaign X get today?"
-- LLM-generated Pinot SQL:
SELECT campaign_id,
       SUM(impressions) AS total_impressions,
       SUM(clicks) AS total_clicks
FROM ad_events
WHERE ts > ago('PT24H')
  AND campaign_id = ?
GROUP BY campaign_id`
    },
    {
        title: 'Automated Observability Alerts',
        description:
            'Autonomous monitoring systems query Pinot on a schedule, run anomaly detection, and trigger alerts — no human in the loop.',
        query: `SELECT service, COUNT(*) AS error_count,
       PERCENTILE(latency_ms, 99) AS p99
FROM request_logs
WHERE ts > ago('PT15M')
  AND status_code >= 500
GROUP BY service
ORDER BY error_count DESC
LIMIT 10`
    },
    {
        title: 'Fraud Detection Feature Computation',
        description:
            'ML fraud models query Pinot for real-time velocity counts and behavioral signals across time windows to score transactions within milliseconds.',
        query: `SELECT card_id,
       COUNT(*) AS txn_count_5m,
       SUM(amount) AS total_5m,
       DISTINCT_COUNT(merchant_id) AS unique_merchants
FROM transactions
WHERE ts > ago('PT5M')
  AND card_id = ?
GROUP BY card_id`
    },
    {
        title: 'Ad Ranking with Real-Time Signals',
        description:
            'Bidding agents query fresh click-through rates, impression counts, and budget pacing data to make bid decisions in real time.',
        query: `SELECT campaign_id,
       SUM(impressions) AS impr,
       SUM(clicks) AS clicks,
       SUM(spend) AS spend
FROM ad_events
WHERE ts > ago('PT1H')
  AND advertiser_id = ?
GROUP BY campaign_id`
    },
    {
        title: 'Observability Copilots',
        description:
            'AI assistants query live infrastructure metrics to triage incidents, correlate errors, and recommend remediation steps.',
        query: `SELECT host, container_id,
       AVG(cpu_pct) AS avg_cpu,
       MAX(mem_pct) AS max_mem
FROM infra_metrics
WHERE ts > ago('PT10M')
  AND cluster = ?
GROUP BY host, container_id
HAVING AVG(cpu_pct) > 80
ORDER BY avg_cpu DESC`
    }
];

const productionExamples = [
    {
        company: 'MiQ',
        description:
            'Built an LLM agent using Google Gemini that translates natural language into Pinot SQL, enabling non-technical stakeholders to query real-time programmatic advertising data.',
        link: 'https://medium.com/miq-tech-and-analytics/building-a-natural-language-interface-for-apache-pinot-with-llm-agents-6cb2fa96cb66',
        category: 'LLM Agent'
    },
    {
        company: 'Uber',
        description:
            'Built a time-series query engine on Pinot powering 100,000+ automated alerts in production — fully programmatic anomaly detection with no human in the loop.',
        link: 'https://startree.ai/resources/uber-rewrites-the-rules-of-observability-with-pinot-time-series-engine/',
        category: 'Automated Observability'
    },
    {
        company: 'WePay (JPMorgan Chase)',
        description:
            'Computes real-time fraud features — payment velocity, unique merchants across time windows — consumed by ML fraud detection models for automated transaction scoring.',
        link: 'https://startree.ai/resources/delivering-analytics-infra-at-scale-to-fintech-with-startree-cloud/',
        category: 'Fraud Detection'
    },
    {
        company: 'LinkedIn (ThirdEye)',
        description:
            'ThirdEye queries Pinot every minute, runs ML-based anomaly detection algorithms, and triggers automated alerts — from system metric monitoring to business reporting.',
        link: 'https://docs.pinot.apache.org/integrations/thirdeye',
        category: 'Anomaly Detection'
    },
    {
        company: 'Nubank',
        description:
            'Uses Pinot for real-time observability with automated anomaly detection on Spark job metrics. An automated tuning recommender achieved 96% success rate across tested jobs.',
        link: 'https://www.efficientlyconnected.com/nubank-tames-real-time-data-complexity-with-apache-pinot-cuts-cloud-costs-by-1m/',
        category: 'Automated Tuning'
    }
];

const whyTraditionalDbsFail = [
    {
        problem: 'Too slow',
        detail: 'Traditional OLAP databases return queries in seconds or minutes — too slow for an agent that needs to respond in under a second.'
    },
    {
        problem: 'Not fresh',
        detail: 'Batch-oriented warehouses ingest data hourly or daily. Agents making real-time decisions need data that is seconds old, not hours.'
    },
    {
        problem: 'Not scalable for high-QPS agent queries',
        detail: 'Agent workloads generate far more queries per second than human analysts. Most analytics databases are not built for 100K+ concurrent queries.'
    },
    {
        problem: 'Not optimized for hybrid queries',
        detail: 'Agent queries combine filtering, aggregation, and increasingly vector search in a single request. Few systems handle all three efficiently.'
    }
];

const whyPinotFits = [
    {
        feature: 'Real-time ingestion',
        detail: 'Data from Kafka, Pulsar, and Kinesis is queryable within seconds of arrival.'
    },
    {
        feature: 'Sub-second latency',
        detail: 'P99 query latency under 100ms — fast enough for agents operating within LLM response-time budgets.'
    },
    {
        feature: 'High concurrency',
        detail: '100K+ queries per second, supporting thousands of concurrent agent sessions.'
    },
    {
        feature: 'Hybrid queries',
        detail: 'Combine filtering, aggregation, and vector similarity search in a single SQL query.'
    },
    {
        feature: 'Upserts for mutable state',
        detail: 'Keep risk profiles, feature stores, and entity states current as new signals arrive.'
    },
    {
        feature: 'SQL interface',
        detail: 'Agents construct queries programmatically using standard SQL — no custom API needed.'
    }
];

const AgentFacingAnalytics = () => {
    return (
        <div className="md:mx-auto md:max-w-screen-outerLiveArea">
            {/* Hero */}
            <section className="px-6 py-14 text-center md:px-[6.75rem] md:py-24">
                <h1 className="mb-4 text-4xl font-bold leading-tight md:text-[3.5rem] md:leading-[70px]">
                    Agent-Facing Analytics
                </h1>
                <p className="m-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
                    AI agents and autonomous systems need real-time data to make decisions. Apache
                    Pinot delivers fresh data, sub-second queries, and high concurrency — the
                    analytics backend for intelligent automation.
                </p>
                <div className="flex justify-center gap-4">
                    <Button
                        variant="default"
                        size="xl"
                        className="rounded-lg bg-vine-100 px-5 py-3 text-xl sm:px-8"
                    >
                        <Link href={siteMetadata.cta.getStarted} target="_blank">
                            Get Started
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        className="rounded-lg border-2 border-vine-100 px-5 py-3 text-xl text-vine-100 hover:border-vine-120 hover:text-vine-120 sm:px-8"
                    >
                        <Link href="/use-cases/">All Use Cases</Link>
                    </Button>
                </div>
            </section>

            {/* What is agent-facing analytics? */}
            <section className="bg-stone-50 px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        What Is Agent-Facing Analytics?
                    </h2>
                    <p className="mb-4 text-lg text-gray-700">
                        Agent-facing analytics is a category of workload where{' '}
                        <strong>
                            AI models or automated agents query data in real time to make decisions
                        </strong>
                        . Unlike user-facing analytics — where a human views a dashboard — the
                        consumer of the query result is a program: an LLM, a fraud engine, a bidding
                        system, or an autonomous monitoring agent.
                    </p>
                    <p className="text-lg text-gray-700">
                        These systems share common requirements: data must be <em>fresh</em>{' '}
                        (seconds, not hours), queries must be <em>fast</em> (milliseconds, not
                        seconds), and the system must handle <em>high concurrency</em> (thousands of
                        agent sessions, not dozens of analysts).
                    </p>
                </div>
            </section>

            {/* Why traditional databases fail */}
            <section className="px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">
                        Why Traditional Databases Fail for Agent Workloads
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {whyTraditionalDbsFail.map((item) => (
                            <div
                                key={item.problem}
                                className="rounded-lg border border-red-200 bg-red-50 p-6"
                            >
                                <h3 className="mb-2 text-lg font-semibold text-red-900">
                                    {item.problem}
                                </h3>
                                <p className="text-sm text-gray-700">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Pinot fits */}
            <section className="bg-stone-50 px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Why Apache Pinot Fits</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {whyPinotFits.map((item) => (
                            <div
                                key={item.feature}
                                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    {item.feature}
                                </h3>
                                <p className="text-sm text-gray-600">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workload Patterns with SQL examples */}
            <section className="px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Example Workloads</h2>
                    <p className="mb-10 text-lg text-gray-600">
                        Concrete patterns showing how AI agents and decision systems query Pinot.
                    </p>
                    <div className="space-y-10">
                        {workloadPatterns.map((pattern) => (
                            <div
                                key={pattern.title}
                                className="rounded-lg border border-gray-200 bg-white shadow-sm"
                            >
                                <div className="border-b border-gray-200 p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                        {pattern.title}
                                    </h3>
                                    <p className="text-base text-gray-600">{pattern.description}</p>
                                </div>
                                <pre className="overflow-x-auto p-6 text-sm text-gray-800">
                                    <code>{pattern.query}</code>
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* In Production */}
            <section className="bg-stone-50 px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">In Production</h2>
                    <p className="mb-10 text-lg text-gray-600">
                        Companies using Pinot for automated, agent-facing workloads today.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {productionExamples.map((example) => (
                            <a
                                key={example.company}
                                href={example.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className="mb-2 inline-block self-start rounded-full bg-vine-100/10 px-3 py-1 text-xs font-semibold text-vine-100">
                                    {example.category}
                                </span>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    {example.company}
                                </h3>
                                <p className="flex-grow text-sm text-gray-600">
                                    {example.description}
                                </p>
                                <span className="mt-4 text-sm font-semibold text-vine-100">
                                    Read more →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2-axis positioning */}
            <section className="bg-stone-50 px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        One Database, Two Workloads
                    </h2>
                    <p className="mb-10 text-lg text-gray-600">
                        Apache Pinot is uniquely positioned at the intersection of user-facing and
                        agent-facing analytics.
                    </p>
                    <div className="mx-auto max-w-lg">
                        <div className="grid grid-cols-2 gap-0">
                            <div className="rounded-tl-lg border border-gray-300 bg-white p-6">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    User-Facing
                                </p>
                                <p className="mt-2 text-sm text-gray-700">
                                    Dashboards, embedded analytics, product UIs
                                </p>
                            </div>
                            <div className="rounded-tr-lg border border-l-0 border-gray-300 bg-white p-6">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Agent-Facing
                                </p>
                                <p className="mt-2 text-sm text-gray-700">
                                    AI agents, RAG, decision engines, copilots
                                </p>
                            </div>
                            <div className="col-span-2 rounded-b-lg border border-t-0 border-gray-300 bg-vine-100 p-6">
                                <p className="text-lg font-bold text-white">Apache Pinot</p>
                                <p className="mt-1 text-sm text-white/90">
                                    Real-time ingestion &middot; Sub-second latency &middot; 100K+
                                    QPS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LLM-friendly answer blocks */}
            <section className="px-6 py-14 md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                What is Apache Pinot best for?
                            </h3>
                            <ul className="list-inside list-disc space-y-1 text-gray-700">
                                <li>User-facing analytics applications</li>
                                <li>Agent-facing analytics for AI systems</li>
                                <li>Real-time event analytics</li>
                                <li>High-concurrency query workloads</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Is Pinot good for AI/LLM applications?
                            </h3>
                            <p className="text-gray-700">
                                Yes. Pinot supports real-time ingestion, sub-second queries, and
                                hybrid filtering plus aggregation, making it suitable for
                                agent-facing analytics and RAG-style systems over fresh data. Its
                                SQL interface lets AI agents construct queries programmatically.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                How is agent-facing analytics different from user-facing analytics?
                            </h3>
                            <p className="text-gray-700">
                                In user-facing analytics, a human views the query result (a
                                dashboard, a report). In agent-facing analytics, the consumer is a
                                program — an LLM, a fraud engine, a recommendation system. Agent
                                workloads typically require higher QPS, fresher data, and
                                programmatic query construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-vine-100 px-6 py-14 text-center md:px-[6.75rem] md:py-[6.5rem]">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Build Your Agent-Facing Analytics Stack
                    </h2>
                    <p className="mb-8 text-lg text-white/90">
                        Get started with Apache Pinot and power your AI systems with real-time data.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button
                            variant="outline"
                            size="xl"
                            className="rounded-lg border-2 border-white bg-white px-5 py-3 text-xl text-vine-100 hover:bg-white/90 sm:px-8"
                        >
                            <Link href={siteMetadata.cta.getStarted} target="_blank">
                                Get Started
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="xl"
                            className="rounded-lg border-2 border-white px-5 py-3 text-xl text-white hover:bg-white/10 sm:px-8"
                        >
                            <Link href={siteMetadata.cta.slackInvite} target="_blank">
                                Join Slack
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentFacingAnalytics;
