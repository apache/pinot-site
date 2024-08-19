const { withContentlayer } = require('next-contentlayer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
    const plugins = [withContentlayer, withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        output: 'export',
        trailingSlash: true,
        reactStrictMode: true,
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
        eslint: {
            dirs: ['app', 'components', 'layouts', 'scripts']
        },
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'picsum.photos'
                }
            ]
        },
        webpack: (config) => {
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack']
            });

            return config;
        }
    });
};
