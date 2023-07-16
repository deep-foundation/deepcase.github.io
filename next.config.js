import withMDX from '@next/mdx';
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/
// });

const isProd = process.env.NODE_ENV === 'production';
const mdx = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/deepcase/deepcase.github.io/main/docs/' : '',
  swcMinify: true,
});

export default mdx;
