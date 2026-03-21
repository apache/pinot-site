const companyLogos = [
    // Media
    { name: 'LinkedIn', logo: '/static/images/companies/media/linkedin.svg', alt: 'LinkedIn' },
    { name: 'Roku', logo: '/static/images/companies/media/roku.svg', alt: 'Roku' },
    { name: 'Webex', logo: '/static/images/companies/media/webex.svg', alt: 'Webex' },
    { name: 'DAZN', logo: '/static/images/companies/media/dazn.svg', alt: 'DAZN' },
    { name: 'Weibo', logo: '/static/images/companies/media/weibo.svg', alt: 'Weibo' },
    { name: 'InMobi', logo: '/static/images/companies/media/inmobi.svg', alt: 'InMobi' },
    { name: 'Adbeat', logo: '/static/images/companies/media/adbeat.svg', alt: 'Adbeat' },
    {
        name: 'Bliss Point Media',
        logo: '/static/images/companies/media/bliss_point_media.svg',
        alt: 'Bliss Point Media'
    },
    {
        name: 'Constant Contact',
        logo: '/static/images/companies/media/constant_contact.svg',
        alt: 'Constant Contact'
    },
    { name: 'Cricket', logo: '/static/images/companies/media/cricket.svg', alt: 'Cricket' },
    { name: 'JioSaavn', logo: '/static/images/companies/media/jio_saavn.svg', alt: 'JioSaavn' },
    { name: 'Media.net', logo: '/static/images/companies/media/media_net.svg', alt: 'Media.net' },
    {
        name: 'Promoted.ai',
        logo: '/static/images/companies/media/promoted_ai.svg',
        alt: 'Promoted.ai'
    },
    {
        name: 'Publicis Sapient',
        logo: '/static/images/companies/media/publicis_sapient.svg',
        alt: 'Publicis Sapient'
    },
    { name: 'Reelevant', logo: '/static/images/companies/media/reelevant.svg', alt: 'Reelevant' },
    {
        name: 'Scale Unlimited',
        logo: '/static/images/companies/media/scale_unlimited.svg',
        alt: 'Scale Unlimited'
    },
    { name: 'Sovrn', logo: '/static/images/companies/media/sorvn.svg', alt: 'Sovrn' },
    // Fintech
    { name: 'Stripe', logo: '/static/images/companies/fintech/stripe.svg', alt: 'Stripe' },
    {
        name: 'Goldman Sachs',
        logo: '/static/images/companies/fintech/goldman_sachs.svg',
        alt: 'Goldman Sachs'
    },
    { name: 'Citibank', logo: '/static/images/companies/fintech/citibank.svg', alt: 'Citibank' },
    { name: 'Robinhood', logo: '/static/images/companies/fintech/robinhood.svg', alt: 'Robinhood' },
    { name: 'Razorpay', logo: '/static/images/companies/fintech/razorpay.svg', alt: 'Razorpay' },
    { name: 'WePay', logo: '/static/images/companies/fintech/wepay.svg', alt: 'WePay' },
    {
        name: '10x Banking',
        logo: '/static/images/companies/fintech/10x_banking.svg',
        alt: '10x Banking'
    },
    { name: 'CRED', logo: '/static/images/companies/fintech/cred.svg', alt: 'CRED' },
    { name: 'Fi Money', logo: '/static/images/companies/fintech/fi_money.svg', alt: 'Fi Money' },
    { name: 'PhonePe', logo: '/static/images/companies/fintech/phone_pe.svg', alt: 'PhonePe' },
    { name: 'Pine Labs', logo: '/static/images/companies/fintech/pine_labs.svg', alt: 'Pine Labs' },
    { name: 'Synpulse', logo: '/static/images/companies/fintech/synpulse.svg', alt: 'Synpulse' },
    { name: 'Tradeweb', logo: '/static/images/companies/fintech/tradeweb.svg', alt: 'Tradeweb' },
    // Food & Delivery
    { name: 'Uber', logo: '/static/images/companies/food/uber.svg', alt: 'Uber' },
    { name: 'DoorDash', logo: '/static/images/companies/food/door_dash.svg', alt: 'DoorDash' },
    { name: 'Just Eat', logo: '/static/images/companies/food/just_eat.svg', alt: 'Just Eat' },
    { name: 'Blinkit', logo: '/static/images/companies/food/blinkit.svg', alt: 'Blinkit' },
    { name: 'Careem', logo: '/static/images/companies/food/careem.svg', alt: 'Careem' },
    {
        name: 'CloudKitchens',
        logo: '/static/images/companies/food/cloud_kitchens.svg',
        alt: 'CloudKitchens'
    },
    { name: 'Ola', logo: '/static/images/companies/food/ola.svg', alt: 'Ola' },
    { name: 'Roadie', logo: '/static/images/companies/food/roadie.svg', alt: 'Roadie' },
    // Retail
    { name: 'Walmart', logo: '/static/images/companies/retail/walmart.svg', alt: 'Walmart' },
    { name: 'Target', logo: '/static/images/companies/retail/target.svg', alt: 'Target' },
    { name: 'Etsy', logo: '/static/images/companies/retail/etsy.svg', alt: 'Etsy' },
    { name: '7-Eleven', logo: '/static/images/companies/retail/seven_eleven.svg', alt: '7-Eleven' },
    { name: 'Cora', logo: '/static/images/companies/retail/cora.svg', alt: 'Cora' },
    {
        name: 'Guitar Center',
        logo: '/static/images/companies/retail/guitar_center.svg',
        alt: 'Guitar Center'
    },
    { name: 'Myntra', logo: '/static/images/companies/retail/myntra.svg', alt: 'Myntra' },
    // Cloud
    { name: 'Slack', logo: '/static/images/companies/cloud/slack.svg', alt: 'Slack' },
    { name: 'Expedia', logo: '/static/images/companies/cloud/expedia.svg', alt: 'Expedia' },
    { name: 'HubSpot', logo: '/static/images/companies/cloud/hubspot.svg', alt: 'HubSpot' },
    { name: 'Wix', logo: '/static/images/companies/cloud/wix.svg', alt: 'Wix' },
    { name: 'Zoho', logo: '/static/images/companies/cloud/zoho.svg', alt: 'Zoho' },
    { name: 'Dialpad', logo: '/static/images/companies/cloud/dialpad.svg', alt: 'Dialpad' },
    {
        name: 'Bettermode',
        logo: '/static/images/companies/cloud/bettermode.svg',
        alt: 'Bettermode'
    },
    { name: 'HRT', logo: '/static/images/companies/cloud/hrt.svg', alt: 'HRT' },
    { name: 'Momentive', logo: '/static/images/companies/cloud/momentive.svg', alt: 'Momentive' },
    { name: 'Phenom', logo: '/static/images/companies/cloud/phenom.svg', alt: 'Phenom' },
    { name: 'Zuora', logo: '/static/images/companies/cloud/zuora.svg', alt: 'Zuora' },
    // Other
    { name: 'NVIDIA', logo: '/static/images/companies/other/nvidia.svg', alt: 'NVIDIA' },
    { name: 'Broadcom', logo: '/static/images/companies/other/broadcom.svg', alt: 'Broadcom' },
    { name: 'Hyundai', logo: '/static/images/companies/other/hyundai.svg', alt: 'Hyundai' },
    { name: 'Rippling', logo: '/static/images/companies/other/rippling.svg', alt: 'Rippling' },
    { name: 'StartTree', logo: '/static/images/companies/other/startree.svg', alt: 'StartTree' },
    {
        name: 'Boond Manager',
        logo: '/static/images/companies/other/boond_manager.svg',
        alt: 'Boond Manager'
    },
    { name: 'Confluera', logo: '/static/images/companies/other/confluera.svg', alt: 'Confluera' },
    {
        name: 'Defined.ai',
        logo: '/static/images/companies/other/defined_ai.svg',
        alt: 'Defined.ai'
    },
    { name: 'eero', logo: '/static/images/companies/other/eero.svg', alt: 'eero' },
    { name: 'Factual', logo: '/static/images/companies/other/factual.svg', alt: 'Factual' },
    { name: 'HireEZ', logo: '/static/images/companies/other/hire_ez.svg', alt: 'HireEZ' },
    { name: 'Kloudfuse', logo: '/static/images/companies/other/kloudfuse.svg', alt: 'Kloudfuse' },
    { name: 'Link Labs', logo: '/static/images/companies/other/link_labs.svg', alt: 'Link Labs' },
    { name: 'MixMode', logo: '/static/images/companies/other/mixmode.svg', alt: 'MixMode' },
    { name: 'Mobileum', logo: '/static/images/companies/other/mobileum.svg', alt: 'Mobileum' },
    {
        name: 'Morgan & Morgan',
        logo: '/static/images/companies/other/morgan_morgan.svg',
        alt: 'Morgan & Morgan'
    },
    { name: 'Moveworks', logo: '/static/images/companies/other/moveworks.svg', alt: 'Moveworks' },
    {
        name: 'Palmyra Solutions',
        logo: '/static/images/companies/other/palmyra_solutions.svg',
        alt: 'Palmyra Solutions'
    },
    { name: 'Rapid1', logo: '/static/images/companies/other/rapid_1.svg', alt: 'Rapid1' },
    { name: 'SimSoft', logo: '/static/images/companies/other/sim_soft.svg', alt: 'SimSoft' },
    { name: 'Traceable', logo: '/static/images/companies/other/traceable.svg', alt: 'Traceable' },
    { name: 'TuoAgente', logo: '/static/images/companies/other/tuoagente.svg', alt: 'TuoAgente' },
    { name: 'Vedantu', logo: '/static/images/companies/other/vedantu.svg', alt: 'Vedantu' },
    { name: 'YouGov', logo: '/static/images/companies/other/you_gov.svg', alt: 'YouGov' }
];

export default companyLogos;
