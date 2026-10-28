/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
          destination: '/index.md'
        },
        {
          source: '/',
          has: [{ type: 'header', key: 'user-agent', value: '(?:curl|HTTPie|xh)/.*' }],
          destination: '/index.txt'
        }
      ]
    };
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ];
  },
}

module.exports = nextConfig