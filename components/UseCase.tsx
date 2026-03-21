import Image from 'next/image';
import Link from 'next/link';
import { UseCase as UseCaseType } from '@/data/useCasesData';

interface UseCaseProps extends UseCaseType {}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, details, learnMoreLink }) => {
    return (
        <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="bg-vine-50 mb-4 flex h-16 w-16 items-center justify-center rounded-md">
                <Image src={icon} alt={title} width={40} height={40} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mb-4 text-base text-gray-600">{description}</p>
            <ul className="mb-6 flex-grow space-y-2">
                {details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="mr-2 text-vine-100">•</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
            <Link
                href={learnMoreLink}
                className="hover:text-vine-200 inline-flex text-base font-semibold text-vine-100 transition-colors"
            >
                Learn more →
            </Link>
        </div>
    );
};

export default UseCase;
