import Link from 'next/link';

const userFacingPatterns = [
    {
        title: 'Embedded Analytics',
        description:
            'Ship interactive dashboards inside your product — 100K+ concurrent users querying live data with sub-second latency.'
    },
    {
        title: 'Customer Dashboards',
        description:
            'Let customers explore their own data in real time with multitenant isolation, no pre-aggregation required.'
    },
    {
        title: 'Metrics APIs',
        description:
            'Expose low-latency analytics endpoints that power leaderboards, usage meters, and real-time reporting.'
    }
];

const agentFacingPatterns = [
    {
        title: 'RAG on Fresh Events',
        description:
            'Retrieve real-time context from streaming data so LLMs ground answers in facts, not stale snapshots.'
    },
    {
        title: 'Decision Engines',
        description:
            'Feed live signals — ad bids, fraud scores, pricing — to models that act in milliseconds, not minutes.'
    },
    {
        title: 'Agentic Observability',
        description:
            'Let autonomous agents query system metrics and logs in real time to self-diagnose and self-heal.'
    }
];

const DualWorkloadStrip = () => {
    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[4rem]">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-3 text-center text-[1.75rem] font-semibold md:text-[2rem]">
                    Best for
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-400">
                    Pinot powers both human-facing products and autonomous AI systems with the same
                    real-time engine.
                </p>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* User-Facing Apps */}
                    <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-8 dark:border-blue-900 dark:bg-blue-950/30 md:px-8">
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Built for User-Facing Apps
                        </h3>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">
                            Serve interactive analytics to millions of end users with sub-second
                            query latency at any scale.
                        </p>
                        <div className="space-y-4">
                            {userFacingPatterns.map((pattern) => (
                                <div
                                    key={pattern.title}
                                    className="rounded-lg border border-blue-200 bg-white px-5 py-4 dark:border-blue-800 dark:bg-gray-900"
                                >
                                    <h4 className="mb-1 font-semibold">{pattern.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {pattern.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center">
                            <Link
                                href="/use-cases/"
                                className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
                            >
                                Explore use cases &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Agent-Facing AI */}
                    <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-8 dark:border-amber-900 dark:bg-amber-950/30 md:px-8">
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Built for AI Agents
                        </h3>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">
                            Sub-second SQL over fresh data makes Pinot a natural backend for
                            LLM-powered systems that reason on live state.
                        </p>
                        <div className="space-y-4">
                            {agentFacingPatterns.map((pattern) => (
                                <div
                                    key={pattern.title}
                                    className="rounded-lg border border-amber-200 bg-white px-5 py-4 dark:border-amber-800 dark:bg-gray-900"
                                >
                                    <h4 className="mb-1 font-semibold">{pattern.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {pattern.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center">
                            <Link
                                href="/agent-facing-analytics/"
                                className="text-sm font-medium text-amber-800 hover:underline dark:text-amber-500"
                            >
                                Learn about agent-facing analytics &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DualWorkloadStrip;
