/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Presentation Project',
  titleTemplate: '%s | Context API',
  description: 'This site is for presentation purposes only',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    site_name: 'Context API',
  },
  twitter: {
    handle: '@contextapi',
    site: '@contextapi',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
  ],
};
