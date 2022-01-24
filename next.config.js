const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/deepcase/deepcase.github.io/main/docs/' : '',

  i18n: {
    locales: ['en-US', 'ru'],
    defaultLocale: 'ru',
    // domains: [
    //   {
    //     domain: 'https://deep.foundation/',
    //     defaultLocale: 'ru',
    //   },
    //   {
    //     domain: 'https://deep.foundation/',
    //     defaultLocale: 'en-US',
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
});
