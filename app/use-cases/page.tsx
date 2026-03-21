import UseCases from '@/components/UseCases';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
    title: 'Use Cases',
    description: 'Explore how Apache Pinot powers real-time analytics across various use cases'
});

const UseCasesPage = () => {
    return (
        <section>
            <header className="p-8 text-center md:p-0 md:pt-16">
                <h1 className="mb-6 text-3xl font-bold md:text-5xl">
                    Apache Pinot Use Cases
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 md:mb-12">
                    Discover how teams at leading companies use Apache Pinot to power
                    real-time analytics, dashboards, and intelligent applications at scale.
                </p>
            </header>
            <UseCases />
        </section>
    );
};

export default UseCasesPage;
