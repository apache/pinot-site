type Company = {
    name: string;
    logo: string;
    type: string;
};

type CompanyType = {
    name: string;
    value: string;
};

// Companies using Apache Pinot. This array is used to populate the logos in the 'Powered By' page,
// second section "Companies using Apache Pinot".
const companiesUsingPinot: Company[] = [
    // Retail
    {
        name: '7 Eleven',
        logo: '/static/images/companies/retail/seven_eleven.svg',
        type: 'retail'
    },
    {
        name: 'Etsy',
        logo: '/static/images/companies/retail/etsy.svg',
        type: 'retail'
    },
    {
        name: 'Guitar Center',
        logo: '/static/images/companies/retail/guitar_center.svg',
        type: 'retail'
    },
    {
        name: 'Myntra',
        logo: '/static/images/companies/retail/myntra.svg',
        type: 'retail'
    },
    {
        name: 'Target',
        logo: '/static/images/companies/retail/target.svg',
        type: 'retail'
    },
    {
        name: 'Walmart',
        logo: '/static/images/companies/retail/walmart.svg',
        type: 'retail'
    },
    // Media
    {
        name: 'AdBeat',
        logo: '/static/images/companies/media/adbeat.svg',
        type: 'media'
    },
    {
        name: 'LinkedIn',
        logo: '/static/images/companies/media/linkedin.svg',
        type: 'media'
    },
    {
        name: 'Uber',
        logo: '/static/images/companies/food/uber.svg',
        type: 'media'
    },
    {
        name: 'Constant Contact',
        logo: '/static/images/companies/media/constant_contact.svg',
        type: 'media'
    },
    {
        name: 'Cricket',
        logo: '/static/images/companies/media/cricket.svg',
        type: 'media'
    },
    {
        name: 'Inmobi',
        logo: '/static/images/companies/media/inmobi.svg',
        type: 'media'
    },
    {
        name: 'Publicis Sapient',
        logo: '/static/images/companies/media/publicis_sapient.svg',
        type: 'media'
    },
    {
        name: 'Reelevant',
        logo: '/static/images/companies/media/reelevant.svg',
        type: 'media'
    },
    {
        name: 'ConstantScale Unlimited',
        logo: '/static/images/companies/media/scale_unlimited.svg',
        type: 'media'
    },
    {
        name: 'Weibo',
        logo: '/static/images/companies/media/weibo.svg',
        type: 'media'
    },
    {
        name: 'Sovrn',
        logo: '/static/images/companies/media/sorvn.svg',
        type: 'media'
    },
    {
        name: 'Bliss Point Media',
        logo: '/static/images/companies/media/bliss_point_media.svg',
        type: 'media'
    },
    {
        name: 'Webex',
        logo: '/static/images/companies/media/webex.svg',
        type: 'media'
    },
    {
        name: 'Jio Saavn',
        logo: '/static/images/companies/media/jio_saavn.svg',
        type: 'media'
    },
    {
        name: 'DAZN',
        logo: '/static/images/companies/media/dazn.svg',
        type: 'media'
    },
    {
        name: 'roku',
        logo: '/static/images/companies/media/roku.svg',
        type: 'media'
    },
    // Fintech
    {
        name: 'Citi',
        logo: '/static/images/companies/fintech/citibank.svg',
        type: 'fintech'
    },
    {
        name: 'WePay',
        logo: '/static/images/companies/fintech/wepay.svg',
        type: 'fintech'
    },
    {
        name: 'Fi Money',
        logo: '/static/images/companies/fintech/fi_money.svg',
        type: 'fintech'
    },
    {
        name: 'Stripe',
        logo: '/static/images/companies/fintech/stripe.svg',
        type: 'fintech'
    },
    {
        name: 'Synpulse',
        logo: '/static/images/companies/fintech/synpulse.svg',
        type: 'fintech'
    },
    {
        name: 'Cred',
        logo: '/static/images/companies/fintech/cred.svg',
        type: 'fintech'
    },
    {
        name: 'Tradeweb',
        logo: '/static/images/companies/fintech/tradeweb.svg',
        type: 'fintech'
    },
    // Cloud
    {
        name: 'Slack',
        logo: '/static/images/companies/cloud/slack.svg',
        type: 'cloud'
    },
    {
        name: 'Zoho',
        logo: '/static/images/companies/cloud/zoho.svg',
        type: 'cloud'
    },
    {
        name: 'Bettermode',
        logo: '/static/images/companies/cloud/bettermode.svg',
        type: 'cloud'
    },
    {
        name: 'Dialpadai',
        logo: '/static/images/companies/cloud/dialpad.svg',
        type: 'cloud'
    },
    {
        name: 'Wix',
        logo: '/static/images/companies/cloud/wix.svg',
        type: 'cloud'
    },
    {
        name: 'Expedia',
        logo: '/static/images/companies/cloud/expedia.svg',
        type: 'cloud'
    },
    {
        name: 'HRT',
        logo: '/static/images/companies/cloud/hrt.svg',
        type: 'cloud'
    },
    // Food
    {
        name: 'Uber',
        logo: '/static/images/companies/food/uber.svg',
        type: 'food'
    },
    {
        name: 'Just Eat',
        logo: '/static/images/companies/food/just_eat.svg',
        type: 'food'
    },
    {
        name: 'Roadie',
        logo: '/static/images/companies/food/roadie.svg',
        type: 'food'
    },
    {
        name: 'BlinkIt',
        logo: '/static/images/companies/food/blinkit.svg',
        type: 'food'
    },
    {
        name: 'CLoudKitchens',
        logo: '/static/images/companies/food/cloud_kitchens.svg',
        type: 'food'
    },
    {
        name: 'DoorDash',
        logo: '/static/images/companies/food/door_dash.svg',
        type: 'food'
    },
    // Other
    {
        name: 'Eero',
        logo: '/static/images/companies/other/eero.svg',
        type: 'other'
    },
    {
        name: 'confluera',
        logo: '/static/images/companies/other/confluera.svg',
        type: 'other'
    },
    {
        name: 'Hyundai',
        logo: '/static/images/companies/other/hyundai.svg',
        type: 'other'
    },
    {
        name: 'starTree',
        logo: '/static/images/companies/other/startree.svg',
        type: 'other'
    },
    {
        name: 'DefinedAi',
        logo: '/static/images/companies/other/defined_ai.svg',
        type: 'other'
    },
    {
        name: 'Traceable',
        logo: '/static/images/companies/other/traceable.svg',
        type: 'other'
    },
    {
        name: 'Nvidia',
        logo: '/static/images/companies/other/nvidia.svg',
        type: 'other'
    },
    {
        name: 'Kloudfuse',
        logo: '/static/images/companies/other/kloudfuse.svg',
        type: 'other'
    },
    {
        name: 'MixMode',
        logo: '/static/images/companies/other/mixmode.svg',
        type: 'other'
    },
    {
        name: 'Rippling',
        logo: '/static/images/companies/other/rippling.svg',
        type: 'other'
    },
    {
        name: 'Morgan & Morgan',
        logo: '/static/images/companies/other/morgan_morgan.svg',
        type: 'other'
    },
    {
        name: 'Moveworks',
        logo: '/static/images/companies/other/moveworks.svg',
        type: 'other'
    },
    {
        name: 'TuoAgente',
        logo: '/static/images/companies/other/tuoagente.svg',
        type: 'other'
    }
];

// company tipes - eg retail, media, fintech, cloud, food, other

const companyTypes = [
    {
        name: 'All',
        value: 'all'
    },
    {
        name: 'Retail',
        value: 'retail'
    },
    {
        name: 'Media/Comms',
        value: 'media'
    },
    {
        name: 'Fintech',
        value: 'fintech'
    },
    {
        name: 'Cloud Native/SaaS',
        value: 'cloud'
    },
    {
        name: 'Food/Logistics',
        value: 'food'
    },
    {
        name: 'Other',
        value: 'other'
    }
];

export { type Company, type CompanyType, companiesUsingPinot, companyTypes };
