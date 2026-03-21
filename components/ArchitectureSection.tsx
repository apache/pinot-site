import React from 'react';

const ArchitectureSection: React.FC = () => {
    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[6.5rem]">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center md:mb-20">
                    <h2 className="mb-4 text-[1.75rem] font-semibold md:text-[2rem]">
                        How Apache Pinot Works
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                        A distributed architecture designed for real-time analytics at scale
                    </p>
                </div>

                <div className="overflow-x-auto rounded-lg border-2 border-amber-800 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 md:p-10">
                    <div className="hidden md:block">
                        <div className="flex min-w-max gap-8">
                            <div className="flex w-32 flex-col items-center gap-4">
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Data Sources
                                </div>
                                <div className="flex flex-col gap-3">
                                    {['Kafka', 'Spark', 'S3'].map((source) => (
                                        <div
                                            key={source}
                                            className="flex h-16 w-28 flex-col items-center justify-center rounded border-2 border-vine-100 bg-green-50 dark:border-green-700 dark:bg-green-900/20"
                                        >
                                            <div className="text-lg">📦</div>
                                            <div className="text-xs font-medium">{source}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-80 flex-col items-center gap-6">
                                <div className="relative w-full">
                                    <div className="rounded-lg border-2 border-amber-800 bg-amber-50 p-8 dark:border-amber-700 dark:bg-amber-900/10">
                                        <div className="mb-6 text-center text-sm font-bold text-amber-900 dark:text-amber-200">
                                            Pinot Cluster
                                        </div>
                                        <div className="grid gap-4">
                                            {[
                                                { icon: '⚙️', name: 'Controller', desc: 'Manages cluster' },
                                                { icon: '🔀', name: 'Broker', desc: 'Routes queries' },
                                                { icon: '💾', name: 'Server', desc: 'Stores segments' },
                                                { icon: '🔧', name: 'Minion', desc: 'Optimization tasks' }
                                            ].map((comp) => (
                                                <div key={comp.name} className="flex items-center gap-3 rounded bg-white p-3 dark:bg-gray-800">
                                                    <div className="text-xl">{comp.icon}</div>
                                                    <div className="flex-1">
                                                        <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                                                            {comp.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600 dark:text-gray-400">
                                                            {comp.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <div className="flex w-64 flex-col items-center gap-2">
                                            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                Deep Store
                                            </div>
                                            <div className="flex gap-2">
                                                {['S3', 'HDFS', 'GCS'].map((store) => (
                                                    <div
                                                        key={store}
                                                        className="flex h-12 w-16 items-center justify-center rounded border-2 border-blue-400 bg-blue-50 text-xs font-medium dark:border-blue-700 dark:bg-blue-900/20"
                                                    >
                                                        {store}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-32 flex-col items-center gap-4">
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Applications
                                </div>
                                <div className="flex flex-col gap-3">
                                    {['Dashboards', 'APIs', 'BI Tools'].map((app) => (
                                        <div
                                            key={app}
                                            className="flex h-16 w-28 flex-col items-center justify-center rounded border-2 border-blue-500 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20"
                                        >
                                            <div className="text-lg">📊</div>
                                            <div className="text-xs font-medium">{app}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-6 flex justify-between px-4 text-center text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex-1">Ingest</div>
                            <div className="flex-1">Query</div>
                            <div className="flex-1">Persist</div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    📥 Data Sources
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Kafka', 'Spark', 'S3'].map((source) => (
                                        <div
                                            key={source}
                                            className="flex flex-col items-center justify-center rounded border-2 border-vine-100 bg-green-50 py-3 dark:border-green-700 dark:bg-green-900/20"
                                        >
                                            <div className="text-lg">📦</div>
                                            <div className="text-xs font-medium">{source}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center text-gray-500">↓</div>
                            <div className="text-center">
                                <div className="mb-3 text-sm font-semibold text-amber-900 dark:text-amber-200">
                                    ⚙️ Pinot Cluster
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { icon: '⚙️', name: 'Controller', desc: 'Manages cluster' },
                                        { icon: '🔀', name: 'Broker', desc: 'Routes queries' },
                                        { icon: '💾', name: 'Server', desc: 'Stores segments' },
                                        { icon: '🔧', name: 'Minion', desc: 'Optimization' }
                                    ].map((comp) => (
                                        <div
                                            key={comp.name}
                                            className="flex items-center gap-2 rounded border border-amber-700 bg-white p-2 dark:border-amber-700/50 dark:bg-gray-800"
                                        >
                                            <span>{comp.icon}</span>
                                            <div className="flex-1 text-left">
                                                <div className="text-xs font-semibold">{comp.name}</div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                                    {comp.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center text-gray-500">↓</div>
                            <div className="text-center">
                                <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    💽 Deep Store
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {['S3', 'HDFS', 'GCS'].map((store) => (
                                        <div
                                            key={store}
                                            className="flex flex-col items-center justify-center rounded border-2 border-blue-400 bg-blue-50 py-2 text-xs font-medium dark:border-blue-700 dark:bg-blue-900/20"
                                        >
                                            {store}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center text-gray-500">↓</div>
                            <div className="text-center">
                                <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    📊 Applications
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Dashboards', 'APIs', 'BI Tools'].map((app) => (
                                        <div
                                            key={app}
                                            className="flex flex-col items-center justify-center rounded border-2 border-blue-500 bg-blue-50 py-3 dark:border-blue-700 dark:bg-blue-900/20"
                                        >
                                            <div className="text-lg">📊</div>
                                            <div className="text-xs font-medium">{app}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
