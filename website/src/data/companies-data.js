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
      name: 'Amazon eero',
      website: 'https://eero.com/',
      logo: '/img/companies/eero_light.svg',
      darkLogo: '/img/companies/eero_dark.svg',
      enable_dark_logo: true
    },
    {
      name: 'Confluera',
      website: 'https://www.confluera.com/',
      logo: '/img/companies/confluera_light.svg',
      darkLogo: '/img/companies/confluera_dark.svg',
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
      website: 'https://www.target.com/',
      logo: '/img/companies/target_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Walmart',
      website: 'https://www.walmart.com/',
      logo: '/img/companies/walmart_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Publicis Sapient',
      website: 'https://www.publicissapient.com/',
      logo: '/img/companies/ps_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Asurion',
      website: 'https://www.asurion.com/',
      logo: '/img/companies/asurion.svg',
      enable_dark_logo: false
    },
    {
      name: 'CloudKitchens',
      website: 'https://cloudkitchens.com/',
      logo: '/img/companies/cloudkitchens.svg',
      enable_dark_logo: false
    },
    {
      name: 'GuitarCenter',
      website: 'https://www.guitarcenter.com/',
      logo: '/img/companies/guitarcenter_logo.svg',
      enable_dark_logo: false
    },
    {
      name: 'Wepay',
      website: 'https://go.wepay.com/',
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
      website: 'https://razorpay.com/',
      logo: '/img/companies/razorpay_light.svg',
      darkLogo: '/img/companies/razorpay_dark.svg',
      enable_dark_logo: true
    }
  ];
  return companiesList;
  // return sortByKey(companiesList, 'name')
};

exports.getCompaniesList = getCompaniesList;
