/** @type {import("pliny/config").PlinyConfig } */
// create type
// type SiteMetadata = typeof siteMetadata;
const siteMetadata = {
    title: 'Apache Pinot™',
    author: 'Apache Pinot™',
    headerTitle: '',
    description: 'Realtime distributed OLAP datastore',
    language: 'en-us',
    // theme: 'system', // system, dark or light
    theme: 'light', // system, dark or light
    siteUrl: 'https://pinot.apache.org',
    siteRepo: 'https://github.com/apache/pinot-site/tree/dev/website',
    siteLogo: '/static/images/logo.png',
    socialBanner: '/static/images/twitter-card.png',
    mastodon: 'https://mastodon.social/explore',
    email: 'address@example.com',
    github: 'https://github.com/apache/pinot',
    twitter: 'https://twitter.com/Twitter',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://www.linkedin.com',
    locale: 'en-US',
    video: {
        videoUrl: 'https://www.youtube.com/embed/_lqdfq2c9cQ',
        title: 'What is Apache Pinot?',
        description: 'Apache Pinot'
    },
    cta: {
        getStarted: 'https://docs.pinot.apache.org/basics/getting-started',
        learnMore: 'https://docs.pinot.apache.org/',
        slackInvite:
            'https://apache-pinot.slack.com/join/shared_invite/zt-5z7pav2f-yYtjZdVA~EDmrGkho87Vzw#/shared-invite/email'
    },
    codeSection: {
        header: 'Start your real-time analytics journey.'
    },
    analytics: {
        // To use an analytics provider, add it to the
        // content security policy in the `next.config.js` file.
        // I've setted this to support Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
        // umamiAnalytics: {
        //     // We can use env variables for privacy
        //     umamiWebsiteId: process.env.NEXT_UMAMI_ID // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        // plausibleAnalytics: {
        //     plausibleDataDomain: '' // e.g. apache-pinot-nextjs-blog.vercel.app
        // },
        // simpleAnalytics: {},
        // posthogAnalytics: {
        //     posthogProjectApiKey: '' // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        googleAnalytics: {
            // googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS // e.g. G-XXXXXXX
            googleAnalyticsId: 'G-ZXG79NJEBY'
        }
    },
    newsletter: {
        // It supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
        // Please add your .env file and modify it according to your selection
        provider: 'buttondown'
    },
    comments: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        // provider: 'giscus', // supported providers: giscus, utterances, disqus
        provider: '', // disable comments by default
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname', // supported options: pathname, url, title
            reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: '0',
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: 'light',
            // theme when dark mode
            darkTheme: 'transparent_dark',
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: '',
            // This corresponds to the `data-lang="en"` in giscus's configurations
            lang: 'en'
        }
    },
    search: {
        // provider: 'kbar', // kbar or algolia
        // kbarConfig: {
        //     searchDocumentsPath: 'search.json' // path to load documents to search
        // },
        provider: 'algolia',
        algoliaConfig: {
            // The application ID provided by Algolia
            appId: 'CKRA00L2X9',
            // Public API key: it is safe to commit it
            apiKey: '6531f8f7783a88d76629190843f1801e', // This is a public key but we can always use env vars
            indexName: 'prod_apache_pinot_docs'
        }
    },
    announcement: {
        buttonText: 'learn more',
        link: 'https://github.com/apache/pinot/releases/tag/release-1.1.0'
    },
    communityLinks: [
        {
            name: 'Slack',
            icon: '/static/images/socials/slack.svg',
            link: 'https://join.slack.com/t/apache-pinot/shared_invite/zt-5z7pav2f-yYtjZdVA~EDmrGkho87Vzw'
        },
        {
            name: 'GitHub',
            icon: '/static/images/socials/github.svg',
            link: 'https://github.com/apache/pinot'
        },
        {
            name: 'Meetups',
            icon: '/static/images/socials/meetup.svg',
            link: 'https://www.meetup.com/apache-pinot/'
        },
        {
            name: 'RTA Summit',
            icon: '/static/images/socials/rta.svg',
            link: 'https://rtasummit.com',
            isWide: true
        }
    ],
    shareStory: {
        // link: process.env.SHARE_STORY_LINK
        link: 'https://forms.gle/75MbXyz7BztNQ78k9'
    }
};

// export default siteMetadata;
module.exports = siteMetadata;
