export type CommunityResource = {
    name: string;
    icon: string;
    link: string;
    description: string;
    isWide?: boolean;
    target?: string;
};

export type CommunitySection = {
    title: string;
    description: string;
    resources: {
        label: string;
        href: string;
        description: string;
        external?: boolean;
    }[];
};

export const communityChannels: CommunityResource[] = [
    {
        name: 'Slack',
        icon: '/static/images/socials/slack.svg',
        link: 'https://inviter.co/apache-pinot',
        description: 'Chat with the community in real time'
    },
    {
        name: 'GitHub',
        icon: '/static/images/socials/github.svg',
        link: 'https://github.com/apache/pinot',
        description: 'Browse source code, report issues, and contribute'
    },
    {
        name: 'Meetups',
        icon: '/static/images/socials/meetup.svg',
        link: 'https://www.meetup.com/apache-pinot/',
        description: 'Join local and virtual Apache Pinot meetups'
    },
    {
        name: 'RTA Summit',
        icon: '/static/images/socials/rta.svg',
        link: 'https://rtasummit.com',
        description: 'Annual real-time analytics conference',
        isWide: true
    },
    {
        name: 'YouTube',
        icon: '/static/images/socials/youtube.svg',
        link: 'https://www.youtube.com/@Apache_Pinot',
        description: 'Watch talks, tutorials, and deep dives',
        isWide: true
    },
    {
        name: 'Meetup in a Box',
        icon: '/static/images/socials/miab.svg',
        link: 'https://startree.ai/meetupinabox',
        description: 'Everything you need to host your own Pinot meetup'
    }
];

export const contributeSections: CommunitySection[] = [
    {
        title: 'Contribute Code',
        description:
            'Help build Apache Pinot by contributing code, fixing bugs, or adding features.',
        resources: [
            {
                label: 'GitHub Repository',
                href: 'https://github.com/apache/pinot',
                description: 'Clone the repo and start contributing',
                external: true
            },
            {
                label: 'Good First Issues',
                href: 'https://github.com/apache/pinot/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22',
                description: 'Find beginner-friendly issues to get started',
                external: true
            },
            {
                label: 'Contribution Guide',
                href: 'https://docs.pinot.apache.org/developers/developers-and-contributors',
                description: 'Learn how to set up your dev environment and submit PRs',
                external: true
            }
        ]
    },
    {
        title: 'Report Issues & Request Features',
        description:
            'Found a bug or have an idea for improvement? Let us know through our issue tracker.',
        resources: [
            {
                label: 'File an Issue',
                href: 'https://github.com/apache/pinot/issues/new/choose',
                description: 'Report bugs or request new features',
                external: true
            },
            {
                label: 'Open Issues',
                href: 'https://github.com/apache/pinot/issues',
                description: 'Browse and triage existing issues',
                external: true
            }
        ]
    },
    {
        title: 'Improve Documentation',
        description:
            'Good documentation helps everyone. Contribute improvements, fix typos, or write new guides.',
        resources: [
            {
                label: 'Docs Site',
                href: 'https://docs.pinot.apache.org',
                description: 'Read the official Apache Pinot documentation',
                external: true
            },
            {
                label: 'Docs Repository',
                href: 'https://github.com/pinot-contrib/pinot-docs',
                description: 'Contribute to the documentation source',
                external: true
            }
        ]
    }
];

export const mailingLists = [
    {
        name: 'Users',
        email: 'users@pinot.apache.org',
        subscribe: 'mailto:users-subscribe@pinot.apache.org',
        archive: 'https://lists.apache.org/list.html?users@pinot.apache.org',
        description: 'For questions about using Apache Pinot'
    },
    {
        name: 'Dev',
        email: 'dev@pinot.apache.org',
        subscribe: 'mailto:dev-subscribe@pinot.apache.org',
        archive: 'https://lists.apache.org/list.html?dev@pinot.apache.org',
        description: 'For development discussions and proposals'
    },
    {
        name: 'Commits',
        email: 'commits@pinot.apache.org',
        subscribe: 'mailto:commits-subscribe@pinot.apache.org',
        archive: 'https://lists.apache.org/list.html?commits@pinot.apache.org',
        description: 'Automated notifications for code commits'
    }
];
