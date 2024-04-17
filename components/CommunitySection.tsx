import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';

type CommunityBoxProps = {
    name: string;
    icon: string;
    link: string;
    isWide?: boolean;
};

type CommunityLink = {
    name: string;
    icon: string;
    link: string;
    isWide?: boolean;
};

// Create a single box component
const CommunityBox: React.FC<CommunityBoxProps> = ({ name, icon, link, isWide = false }) => {
    const iconContainerClass = isWide ? 'w-auto h-16 flex' : 'w-16 h-16 flex';

    return (
        <a
            href={link}
            className="flex h-36 w-40 flex-col items-center justify-center rounded-lg border-2 border-amber-800 transition-colors hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            target="_blank"
        >
            <div className={`${iconContainerClass} relative mb-2 items-center justify-center`}>
                <Image
                    src={icon}
                    alt={`${name} icon`}
                    width={isWide ? 120 : 44}
                    height={44}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <span className="mt-2 text-lg">{name}</span>
        </a>
    );
};

// The main section component
const CommunitySection: React.FC = () => {
    return (
        <section className="px-6 py-14 md:mx-auto md:max-w-screen-outerLiveArea md:px-[13.5rem] md:py-[6.5rem]">
            <h3 className="pb-8 text-center text-[2rem] font-bold md:pb-14">Join our Community</h3>
            <div className="flex flex-wrap justify-center gap-x-[1.375rem] gap-y-6 lg:gap-[6.75rem]">
                {siteMetadata.communityLinks.map((community: CommunityLink) => (
                    <CommunityBox
                        key={community.name}
                        name={community.name}
                        icon={community.icon}
                        link={community.link}
                        isWide={community.isWide}
                    />
                ))}
            </div>
        </section>
    );
};

export default CommunitySection;
