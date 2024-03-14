import React from 'react';
import Image from 'next/image';

type CompanyStoryProps = {
    logo: string;
    title: string;
    description: string;
};

const stories = [
    {
        logo: '/static/images/stories/walmart.svg',
        title: 'Walmart',
        description:
            'Walmart leverages Apache Pinot to power real-time analytics, optimizing inventory management, enhancing customer experiences, and ensuring efficient processing of vast data on their platform, leading to improved operations and customer satisfaction.'
    },
    {
        logo: '/static/images/stories/slack.svg',
        title: 'Slack',
        description:
            'Slack harnesses Apache Pinot for real-time analytics, improving search and discovery features. This empowers users to find information quickly, enhancing collaboration and productivity.'
    },
    {
        logo: '/static/images/stories/linkedin.svg',
        title: 'Linkedin',
        description:
            'LinkedIn utilizes Apache Pinot for real-time analytics, enabling faster, data-driven decisions and delivering personalized content and recommendations to users, enhancing engagement and user experience.'
    },
    {
        logo: '/static/images/stories/stripe.svg',
        title: 'Stripe',
        description:
            'Stripe harnesses Apache Pinot for real-time data analytics, optimizing payment processing, fraud detection, and enhancing user experiences. This ensures secure and efficient transactions on their platform, benefiting both businesses and customers.'
    },
    {
        logo: '/static/images/stories/wix.svg',
        title: 'Wix',
        description:
            'Wix employs Apache Pinot for real-time analytics, improving website performance insights and user engagement tracking. This enhances website building and hosting experiences for millions of users.'
    },
    {
        logo: '/static/images/stories/uber.svg',
        title: 'Uber',
        description:
            'Uber utilizes Apache Pinot for real-time data processing, enabling efficient dispatching, dynamic pricing, and tracking millions of rides. This enhances the overall user experience and operational efficiency.'
    }
];

const CompanyStoryCard: React.FC<CompanyStoryProps> = ({ logo, title, description }) => {
    return (
        <div className="inline-flex flex-col items-start justify-start gap-4 rounded bg-sky-100 px-5 py-8 md:px-8">
            <Image
                src={logo}
                alt={`${title} logo`}
                width={80}
                height={80}
                style={{ width: 'auto', height: 'auto' }}
            />
            <p className="text-base leading-relaxed text-black">{description}</p>
        </div>
    );
};

const CompanyStoriesGrid: React.FC = () => {
    return (
        <div className="container mx-auto md:mb-28 md:px-24">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stories.map((story, index) => (
                    <CompanyStoryCard key={index} {...story} />
                ))}
            </div>
        </div>
    );
};

export default CompanyStoriesGrid;
