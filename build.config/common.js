const rewritesConfig = require('./rewrites/index');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesConfig;
  },
  images: {
    // loader: 'akamai',
    // path: '',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecoearn-test.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ecoearn.s3.ap-northeast-1.amazonaws.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
};
