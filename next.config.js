const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: isProd ? '/store' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/deepcase/deep.foundation/gh-pages/' : '',
});
