function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

const getCompaniesList = () => {
  var companiesList = [
    {
      name: 'LinkedIn',
      website: 'https://www.linkedin.com',
      logo: '/img/companies/linkedin.svg',
      enable_dark_logo: false
    },
    {
      name: 'Jio Saavn',
      website: 'https://www.jiosaavn.com',
      logo: '/img/companies/saavn.svg',
      enable_dark_logo: false
    },
    {
      name: 'Zoho',
      website: 'https://www.zoho.com',
      logo: '/img/companies/zoho.svg',
      enable_dark_logo: false
    },
    {
      name: '7-Eleven',
      website: 'https://www.7-eleven.com',
      logo: '/img/companies/7-eleven.svg',
      enable_dark_logo: false
    },
    {
      name: 'Kloudfuse',
      website: 'http://www.kloudfuse.com',
      logo: '/img/companies/kloudfuse.svg',
      enable_dark_logo: false
    },
    {
      name: 'Uber',
      website: 'https://www.ubereats.com',
      logo: '/img/companies/uber.svg',
      enable_dark_logo: false
    },
    {
      name: 'Microsoft',
      website: 'https://teams.microsoft.com',
      logo: '/img/companies/MicrosoftTeamPost2018.svg',
      enable_dark_logo: false
    },
    {
      name: 'Slack',
      website: 'https://slack.com',
      logo: '/img/companies/slack.svg',
      enable_dark_logo: false
    },
    {
      name: 'Factual',
      website: 'https://www.factual.com',
      logo: '/img/companies/factual.svg',
      enable_dark_logo: false
    },
    {
      name: 'Weibo',
      website: 'https://www.weibo.com',
      logo: '/img/companies/weibo_light.svg',
      darkLogo: '/img/companies/weibo_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'Tuoagente',
      website: 'https://www.tuoagente.com',
      logo: '/img/companies/tuoagente.svg',
      enable_dark_logo: false
    },
    {
      name: 'Reelevant',
      website: 'https://try.reelevant.com',
      logo: '/img/companies/reelevant.svg',
      enable_dark_logo: false
    },
    {
      name: 'Palmyra Solutions',
      website: 'https://palmyra-it.com',
      logo: '/img/companies/palmyra-solutions.svg',
      enable_dark_logo: false
    },
    {
      name: 'Cricket Wireless',
      website: 'https://www.cricketwireless.com/',
      logo: '/img/companies/cricket-wireless.svg',
      enable_dark_logo: false
    },
    {
      name: 'Amazon eero',
      website: 'https://eero.com',
      logo: '/img/companies/eero_light.svg',
      darkLogo: '/img/companies/eero_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'Defined.ai',
      website: 'https://www.defined.ai',
      logo: '/img/companies/defined-ai.svg',
      enable_dark_logo: false
    },
    {
      name: 'Myntra',
      website: 'https://www.myntra.com',
      logo: '/img/companies/myntra.svg',
      enable_dark_logo: false
    },
    {
      name: 'Constant Contact',
      website: 'https://www.constantcontact.com',
      logo: '/img/companies/constant-contact.svg',
      enable_dark_logo: false
    },
    {
      name: 'Hyundai',
      website: 'https://www.hyundai.com',
      logo: '/img/companies/hyundai.svg',
      enable_dark_logo: false
    },
    {
      name: 'InMobi',
      website: 'https://www.inmobi.com',
      logo: '/img/companies/inmobi.svg',
      enable_dark_logo: false
    },
    {
      name: 'Confluera',
      website: 'https://www.confluera.com',
      logo: '/img/companies/confluera_light.svg',
      darkLogo: '/img/companies/confluera_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'Scale unlimited',
      website: 'https://scaleunlimited.com',
      logo: '/img/companies/scale-unlimited.svg',
      enable_dark_logo: false
    },
    {
      name: 'Bliss Point',
      website: 'https://www.blisspointmedia.com',
      logo: '/img/companies/bliss-point-light.svg',
      darkLogo: '/img/companies/bliss-point-dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'NVIDIA',
      website: 'https://www.nvidia.com',
      logo: '/img/companies/nvidia.svg',
      enable_dark_logo: false
    },
    {
      name: 'StarTree',
      website: 'https://startree.ai',
      logo: '/img/companies/startree_light.svg',
      darkLogo: '/img/companies/startree_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'Stripe',
      website: 'https://stripe.com',
      logo: '/img/companies/stripe.svg',
      enable_dark_logo: false
    },
    {
      name: 'Target',
      website: 'https://www.target.com',
      logo: '/img/companies/target_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Walmart',
      website: 'https://www.walmart.com',
      logo: '/img/companies/walmart_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Publicis Sapient',
      website: 'https://www.publicissapient.com',
      logo: '/img/companies/ps_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'CloudKitchens',
      website: 'https://cloudkitchens.com',
      logo: '/img/companies/cloudkitchens.svg',
      enable_dark_logo: false
    },
    {
      name: 'GuitarCenter',
      website: 'https://www.guitarcenter.com',
      logo: '/img/companies/guitarcenter_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Wepay',
      website: 'https://go.wepay.com',
      logo: '/img/companies/wepay_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Traceable',
      website: 'https://www.traceable.ai',
      logo: '/img/companies/traceableai.svg',
      enable_dark_logo: false
    },
    {
      name: 'Adbeat',
      website: 'https://www.adbeat.com',
      logo: '/img/companies/adbeat.svg',
      enable_dark_logo: false
    },
    {
      name: 'RazorPay',
      website: 'https://razorpay.com',
      logo: '/img/companies/razorpay_light.svg',
      darkLogo: '/img/companies/razorpay_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'MyCujoo',
      website: 'https://elevensports.com',
      logo: '/img/companies/my-cujoo.svg',
      enable_dark_logo: false
    }
  ];
  return companiesList;
  // return sortByKey(companiesList, 'name')
};

exports.getCompaniesList = getCompaniesList;
