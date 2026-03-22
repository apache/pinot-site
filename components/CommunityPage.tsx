import Image from 'next/image';
import {
    communityChannels,
    contributeSections,
    mailingLists,
    type CommunityResource,
    type CommunitySection
} from '@/data/communityData';

const ChannelCard = ({ name, icon, link, description, isWide = false }: CommunityResource) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-lg border-2 border-amber-800 p-6 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
        >
            <div
                className={`${
                    isWide ? 'w-auto' : 'w-16'
                } relative mb-3 flex h-16 items-center justify-center`}
            >
                <Image
                    src={icon}
                    alt={`${name} icon`}
                    width={isWide ? 120 : 44}
                    height={44}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <h3 className="mb-1 text-lg font-semibold">{name}</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </a>
    );
};

const ContributeSection = ({ title, description, resources }: CommunitySection) => {
    return (
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
            <ul className="space-y-3">
                {resources.map((resource) => (
                    <li key={resource.label}>
                        <a
                            href={resource.href}
                            target={resource.external ? '_blank' : undefined}
                            rel={resource.external ? 'noopener noreferrer' : undefined}
                            className="group flex items-start"
                        >
                            <span className="mr-2 text-amber-700">&#8594;</span>
                            <span>
                                <span className="font-medium text-amber-800 group-hover:underline dark:text-amber-500">
                                    {resource.label}
                                </span>
                                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                                    &mdash; {resource.description}
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CommunityPage = () => {
    return (
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
            {/* Hero */}
            <div className="mb-16 text-center">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">Community</h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    Apache Pinot is built by a vibrant open-source community. Whether you&apos;re a
                    user, contributor, or just curious &mdash; there are many ways to get involved.
                </p>
            </div>

            {/* Connect */}
            <section className="mb-16">
                <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Connect with Us</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {communityChannels.map((channel) => (
                        <ChannelCard key={channel.name} {...channel} />
                    ))}
                </div>
            </section>

            {/* Contribute */}
            <section className="mb-16">
                <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Contribute</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {contributeSections.map((section) => (
                        <ContributeSection key={section.title} {...section} />
                    ))}
                </div>
            </section>

            {/* Mailing Lists */}
            <section className="mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Mailing Lists</h2>
                <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
                    Apache Pinot uses mailing lists for project communication. Subscribe to stay
                    informed.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold">List</th>
                                <th className="px-4 py-3 font-semibold">Description</th>
                                <th className="px-4 py-3 font-semibold">Subscribe</th>
                                <th className="px-4 py-3 font-semibold">Archive</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mailingLists.map((list) => (
                                <tr
                                    key={list.name}
                                    className="border-b border-gray-100 dark:border-gray-800"
                                >
                                    <td className="px-4 py-3 font-medium">{list.email}</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {list.description}
                                    </td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={list.subscribe}
                                            className="text-amber-800 hover:underline dark:text-amber-500"
                                        >
                                            Subscribe
                                        </a>
                                    </td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={list.archive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-amber-800 hover:underline dark:text-amber-500"
                                        >
                                            Archive
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default CommunityPage;
