/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '0b534b9a35d8bf4fd5552d1c81a31de653f11f10',
    },
    {
      name: 'google-site-verification',
      content: 'yT-oTkk8EeeI-jGAcFWqKKqd1HE6NHOgLQxEDg3ZafQ',
    },
  ],
};
