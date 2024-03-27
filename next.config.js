/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/api/:path*'
            : 'https://visionvest.vercel.app/api/',
      },
    ]
  },
  experimental: {
		outputFileTracingExcludes: {
			'/api/': [
				'./node_modules/@next/swc-linux-x64-musl/**/*',
				'./node_modules/@next/swc-linux-x64-gnu/**/*',
			],
		},
	},
}

module.exports = nextConfig
