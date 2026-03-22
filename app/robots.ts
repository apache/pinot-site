import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                // Allow actual blog posts (4 segments: /blog/YYYY/MM/DD/title/)
                // These are more specific than the disallow rules below, so they
                // take precedence in compliant crawlers.
                '/blog/2015/*/*/*/',
                '/blog/2016/*/*/*/',
                '/blog/2017/*/*/*/',
                '/blog/2018/*/*/*/',
                '/blog/2019/*/*/*/',
                '/blog/2020/*/*/*/',
                '/blog/2021/*/*/*/',
                '/blog/2022/*/*/*/',
                '/blog/2023/*/*/*/',
                '/blog/2024/*/*/*/',
                '/blog/2025/*/*/*/',
                '/blog/2026/*/*/*/'
            ],
            disallow: [
                // Block intermediate date-based directory listings under /blog/
                // (year, year/month, year/month/day directories without a post title).
                // The more-specific Allow rules above re-enable actual blog post URLs.
                '/blog/2015/',
                '/blog/2016/',
                '/blog/2017/',
                '/blog/2018/',
                '/blog/2019/',
                '/blog/2020/',
                '/blog/2021/',
                '/blog/2022/',
                '/blog/2023/',
                '/blog/2024/',
                '/blog/2025/',
                '/blog/2026/'
            ]
        },
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        host: siteMetadata.siteUrl
    };
}
