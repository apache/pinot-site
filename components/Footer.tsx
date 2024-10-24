import Link from './Link';
import Logo from '@/data/logo.svg';
import GitHub from '@/data/github.svg';
import { Slack } from 'lucide-react';
import Newsletter from './Newsletter';

// Links to be used in the footer
const links = [
    {
        title: 'Resources',
        items: [
            {
                label: 'Docs',
                to: 'https://docs.pinot.apache.org/'
            },
            {
                label: 'Getting Started',
                to: 'https://docs.pinot.apache.org/getting-started'
            },
            {
                label: 'ThirdEye',
                to: 'https://docs.pinot.apache.org/integrations/thirdeye'
            },
            {
                label: 'Company Stories',
                to: '/powered-by'
            },
            {
                label: 'Download',
                to: '/download'
            },
            {
                label: 'Blog',
                to: '/blog'
            }
        ]
    },
    {
        title: 'Apache',
        items: [
            {
                label: 'Foundation',
                to: 'https://www.apache.org'
            },
            {
                label: 'License',
                to: 'https://www.apache.org/licenses'
            },
            {
                label: 'Security',
                to: 'https://www.apache.org/security'
            },
            {
                label: 'Sponsorship',
                to: 'https://www.apache.org/foundation/sponsorship.html'
            },
            {
                label: 'Events',
                to: 'https://www.meetup.com/apache-pinot/'
            },
            {
                label: 'Thanks',
                to: 'https://www.apache.org/foundation/thanks.html'
            }
        ]
    }
];

export default function Footer() {
    return (
        <footer className="border-t bg-sky-100 px-5 py-10 md:px-[6.75rem] md:pb-10 md:pt-16">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between">
                <div className="flex-shrink-0">
                    <Logo />
                </div>
                <div className="flex flex-wrap gap-x-16 gap-y-5 py-8 md:pl-24 md:pr-[21.625rem]">
                    {' '}
                    {/* This gap-x-12 sets a fixed horizontal gap */}
                    {links.map((section) => (
                        <div key={section.title}>
                            <h5 className="mb-4 text-lg font-semibold">{section.title}</h5>
                            <div className="flex justify-between gap-x-10">
                                <div className="flex flex-col">
                                    {section.items.slice(0, 3).map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.to}
                                            className="block py-1 text-gray-600 hover:text-gray-900"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    {section.items.slice(3).map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.to}
                                            className="block py-1 text-gray-600 hover:text-gray-900"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-center py-8 md:mt-0">
                    <Link
                        href="https://join.slack.com/t/apache-pinot/shared_invite/zt-2t4m15dl2-SnVmZenainX_bq1_dY6XYg"
                        className="mr-4"
                    >
                        <Slack size={24} className="fill-gray-900" />
                    </Link>
                    <Link href="https://github.com/apache/pinot">
                        <GitHub size={24} />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <Newsletter />
            </div>
            <div className="mt-8 border-t border-neutral-300 pt-4 text-left text-sm text-gray-600">
                Copyright © {new Date().getFullYear()} The Apache Software Foundation. Apache
                Pinot, Pinot, Apache, the Apache feather logo, and the Apache Pinot project logo are
                registered trademarks of The Apache Software Foundation. This page has references to
                third party software - Presto, PrestoDB, ThirdEye, Trino, TrinoDB, that are not part
                of the Apache Software Foundation and are not covered under the Apache License.
            </div>
        </footer>
    );
}
