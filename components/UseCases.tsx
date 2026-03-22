import UseCase from './UseCase';
import useCasesData from '@/data/useCasesData';
import pinotMeta from '@/data/pinot-meta.json';

const UseCases: React.FC = () => {
    const userFacing = useCasesData.filter((uc) => uc.category === 'user-facing');
    const agentFacing = useCasesData.filter((uc) => uc.category === 'agent-facing');

    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[6.5rem]">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Use Cases Powered by Apache Pinot
                </h2>
                <p className="mb-12 text-center text-lg text-gray-600 md:mb-16">
                    From real-time dashboards to AI-driven decision engines, Pinot powers
                    applications and intelligent systems that need fresh data, sub-second queries,
                    and high concurrency.
                </p>

                {/* User-Facing Analytics */}
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 md:text-2xl">
                    User-Facing Analytics
                </h3>
                <p className="mb-8 text-base text-gray-500">
                    Dashboards, product analytics, embedded analytics, and customer-facing UIs.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {userFacing.map((useCase) => (
                        <UseCase key={useCase.id} {...useCase} />
                    ))}
                </div>

                {/* Agent-Facing Analytics */}
                <h3 className="mb-2 mt-16 text-2xl font-semibold text-gray-900 md:text-2xl">
                    Agent-Facing Analytics
                </h3>
                <p className="mb-8 text-base text-gray-500">
                    AI agents querying live metrics, LLM/RAG retrieval over fresh data, and
                    autonomous decision systems.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {agentFacing.map((useCase) => (
                        <UseCase key={useCase.id} {...useCase} />
                    ))}
                </div>

                <p className="mt-12 text-center text-xs text-gray-500 dark:text-gray-500">
                    Last verified against Apache Pinot {pinotMeta.lastVerifiedVersion} on{' '}
                    {pinotMeta.lastVerified}
                </p>
            </div>
        </section>
    );
};

export default UseCases;
