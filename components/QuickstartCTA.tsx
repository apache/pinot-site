'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';

const dockerCommand =
    'docker run -p 9000:9000 apachepinot.docker.scarf.sh/apachepinot/pinot:1.4.0 QuickStart -type hybrid';

const QuickstartCTA: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(dockerCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <section className="px-6 py-10 md:mx-auto md:max-w-screen-outerLiveArea md:px-[6.75rem] md:py-14">
            <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-gray-50 px-6 py-8 text-center dark:border-gray-700 dark:bg-gray-900 md:px-10">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Run Pinot locally in 60 seconds
                </h3>
                <div
                    className="group mx-auto mt-4 flex max-w-2xl cursor-pointer items-center justify-between gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm dark:border-gray-600 dark:bg-gray-800"
                    onClick={handleCopy}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
                >
                    <code className="truncate text-left text-gray-700 dark:text-gray-300">
                        <span className="select-none text-gray-400">$ </span>
                        {dockerCommand}
                    </code>
                    <span className="shrink-0 text-xs text-gray-400 transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        {copied ? 'copied!' : 'copy'}
                    </span>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Then open{' '}
                    <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-700">
                        localhost:9000
                    </code>{' '}
                    to explore the query console.{' '}
                    <Link
                        href={siteMetadata.cta.getStarted}
                        target="_blank"
                        className="font-medium text-vine-100 hover:underline"
                    >
                        Full getting started guide &rarr;
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default QuickstartCTA;
