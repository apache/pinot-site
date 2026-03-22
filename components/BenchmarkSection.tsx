import benchmarkData from '@/data/benchmarkData';
import pinotMeta from '@/data/pinot-meta.json';

const BenchmarkSection: React.FC = () => {
    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[6.5rem]">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-[1.75rem] font-bold md:text-[2.25rem] lg:text-[2.5rem]">
                        Built for Performance
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
                        Production-proven at the world's largest internet companies
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {benchmarkData.map((metric, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-lg border-2 border-amber-800 px-6 py-8 text-center transition-all hover:shadow-lg dark:border-gray-700"
                        >
                            <div className="text-4xl font-bold text-vine-100 md:text-5xl">
                                {metric.value}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                {metric.label}
                            </h3>
                            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-lg bg-gray-50 px-6 py-6 text-center dark:bg-gray-900">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Based on production deployments at LinkedIn, Stripe, Uber, and other Pinot
                        users. Your results will vary based on hardware, schema design, and query
                        complexity.
                    </p>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                        Last verified against Apache Pinot {pinotMeta.lastVerifiedVersion} on{' '}
                        {pinotMeta.lastVerified}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BenchmarkSection;
