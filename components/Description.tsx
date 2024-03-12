import { DescriptionContent } from '@/data/featuresData';
import Link from 'next/link';

interface DescriptionProps {
    description: DescriptionContent[];
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <p className="text-center leading-relaxed">
            {description.map((item, index) =>
                typeof item === 'string' ? (
                    item
                ) : (
                    <Link
                        className="text-blue-600 underline hover:text-blue-800"
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.text}
                    </Link>
                )
            )}
        </p>
    );
};

export default Description;
