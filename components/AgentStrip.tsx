import Link from 'next/link';

const patterns = [
    {
        title: 'RAG on Fresh Events',
        description:
            'Retrieve real-time context from streaming data so LLMs ground answers in facts, not stale snapshots.'
    },
    {
        title: 'AI Decision Engines',
        description:
            'Feed live signals — ad bids, fraud scores, pricing — to models that act in milliseconds, not minutes.'
    },
    {
        title: 'Agentic Observability',
        description:
            'Let autonomous agents query system metrics and logs in real time to self-diagnose and self-heal.'
    }
];

const AgentStrip = () => {
    return (
        <div className="mx-auto mb-12 max-w-7xl rounded-xl border border-amber-200 bg-amber-50 px-6 py-8 dark:border-amber-900 dark:bg-amber-950/30 md:mb-16 md:px-10 md:py-10">
            <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Built for AI Agents
            </h3>
            <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Pinot&apos;s sub-second SQL over fresh data makes it a natural backend for
                LLM-powered systems that need to reason on live state.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {patterns.map((pattern) => (
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
            <p className="mt-6 text-center text-sm italic text-gray-500 dark:text-gray-400">
                &ldquo;Every AI agent we build eventually needs a real-time data layer. Pinot gives
                us 100K+ QPS at P99 &lt; 100 ms — no caching tier required.&rdquo;
            </p>
            <div className="mt-4 text-center">
                <Link
                    href="/agent-facing-analytics/"
                    className="text-sm font-medium text-amber-800 hover:underline dark:text-amber-500"
                >
                    Learn more about agent-facing analytics &rarr;
                </Link>
            </div>
        </div>
    );
};

export default AgentStrip;
