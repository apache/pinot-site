import Image from 'next/image';
import Description from './Description';
import { DescriptionContent } from '@/data/featuresData';

interface FeatureProps {
    imageSrc: string;
    title: string;
    description: DescriptionContent[];
}

const Feature: React.FC<FeatureProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex flex-col items-center md:w-[20.875rem]">
            <Image src={imageSrc} alt={title} className="mb-4 md:mb-5" width={80} height={80} />
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <Description description={description} />
        </div>
    );
};

export default Feature;
