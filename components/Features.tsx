import Feature from './Feature';
import featuresData from '@/data/featuresData';

const Features: React.FC = () => {
    return (
        <section className="flex px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-[6.5rem]">
            <div className="mx-auto max-w-7xl">
                <h3 className="pb-8 text-center text-[1.75rem] font-semibold md:pb-16 md:text-[2rem]">
                    features
                </h3>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:gap-x-[5.625rem] md:gap-y-24 lg:grid-cols-3">
                    {featuresData.map((feature, index) => (
                        <Feature
                            key={index}
                            imageSrc={feature.imageSrc}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
