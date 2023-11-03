// import withMDX from '@next/mdx';
// // const withMDX = require('@next/mdx')({
// //   extension: /\.mdx$/
// // });

// const isProd = process.env.NODE_ENV === 'production';
// const mdx = withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
//   basePath: isProd ? '' : '',
//   assetPrefix: isProd ? 'https://cdn.statically.io/gh/deepcase/deepcase.github.io/main/docs/' : '',
//   swcMinify: true,
// });

// export default mdx;


import nextEnv from 'next-env';
import dotenvLoad from 'dotenv-load';
dotenvLoad();
 
const withNextEnv = nextEnv();

 /** @type {import('next').NextConfig}*/
const config =  {
  distDir: 'app',
  
  webpack: (config) => {   
    config.resolve.fallback = {
      "buffer":false,
      "events": false,
      "os": false,
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
    };

    return config;
  },
}

export default withNextEnv(config);