export interface CompanyQuote {
    logo: string;
    company: string;
    text: string;
    author: string;
    metric?: {
        value: string;
        label: string;
    };
}

const quotes: CompanyQuote[] = [
    {
        logo: '/static/images/carousel/razorpay.svg',
        company: 'Razopay',
        text: "Apache Pinot has truly played a fundamental role in Razorpay's monitoring journey!",
        author: 'Prashant Pandey'
    },
    {
        logo: '/static/images/carousel/stripe.svg',
        company: 'Stripe',
        text: 'Pinot enables us to execute sub-second, petabyte-scale aggregation queries over fresh financial events in our internal ledger. We chose Pinot because of its rich feature set and scalability, which has enabled better performance than our previous solution — at a lower cost.',
        author: 'Peter Bakkum',
        metric: {
            value: 'Petabyte-scale',
            label: 'aggregation queries with sub-second latency'
        }
    },
    {
        logo: '/static/images/carousel/webex.svg',
        company: 'Webex',
        text: 'Forget sluggish queries!! Apache Pinot whipped our runtime aggregates, with sub-second latencies on all but the most complex queries. On top of the speed boost, Pinot slashed our storage footprint by 10x, letting us shrink the cluster by a whopping 500 nodes',
        author: 'WEBEX',
        metric: {
            value: '10x',
            label: 'storage reduction, 500 nodes eliminated'
        }
    },
    {
        logo: '/static/images/companies/media/linkedin.svg',
        company: 'LinkedIn',
        text: 'Apache Pinot powers over 50+ user-facing applications at LinkedIn, serving hundreds of thousands of queries per second with millisecond latency across our analytics products.',
        author: 'LinkedIn Engineering',
        metric: {
            value: '50+',
            label: 'user-facing apps powered by Pinot'
        }
    },
    {
        logo: '/static/images/companies/food/uber.svg',
        company: 'Uber',
        text: 'We use Apache Pinot to power real-time analytics across our marketplace, enabling data-driven decisions for millions of trips every day.',
        author: 'Uber Engineering',
        metric: {
            value: 'Millions',
            label: 'of trips analyzed daily in real time'
        }
    },
    {
        logo: '/static/images/companies/retail/walmart.svg',
        company: 'Walmart',
        text: "Apache Pinot helps us deliver real-time insights across Walmart's e-commerce and retail operations at massive scale.",
        author: 'Walmart Global Tech',
        metric: {
            value: 'Massive scale',
            label: 'real-time retail analytics'
        }
    }
];

export default quotes;
