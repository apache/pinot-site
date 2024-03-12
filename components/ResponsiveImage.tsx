import Image from 'next/image';

const ResponsiveImage = () => {
    return (
        <div>
            {/* Mobile Image */}
            <div className="block sm:hidden">
                <Image
                    src="/static/images/hero_diagram_mobile.svg"
                    alt="Apache Pinot"
                    width={500}
                    height={300}
                    priority={true}
                    className="m-auto pb-14"
                />
            </div>

            {/* Desktop Image */}
            <div className="hidden sm:block">
                <Image
                    src="/static/images/hero_diagram.svg"
                    alt="Apache Pinot"
                    width={1224}
                    height={500}
                    priority={true}
                    className="m-auto pb-14"
                />
            </div>
        </div>
    );
};

export default ResponsiveImage;
