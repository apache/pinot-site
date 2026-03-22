import UseCase from './UseCase';
import useCasesData from '@/data/useCasesData';
import pinotMeta from '@/data/pinot-meta.json';

const UseCases: React.FC = () => {
    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[6.5rem]">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Use Cases Powered by Apache Pinot
                </h2>
                <p className="mb-12 text-center text-lg text-gray-600 md:mb-16">
                    From real-time dashboards to personalized recommendations, Pinot powers modern
                    applications that need fast, scalable analytics on petabyte-scale data.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {useCasesData.map((useCase) => (
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
