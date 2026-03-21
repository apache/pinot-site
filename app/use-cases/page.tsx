import UseCases from '@/components/UseCases';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
    title: 'Use Cases',
    description: 'Explore how Apache Pinot powers real-time analytics across various use cases'
});

const UseCasesPage = () => {
    return (
        <section>
            <UseCases />
        </section>
    );
};

export default UseCasesPage;
