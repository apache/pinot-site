'use client';

import React, { useState } from 'react';
import pinotMeta from '@/data/pinot-meta.json';

type Tab = 'docker' | 'k8s';
type Arch = 'x86' | 'ARM64';

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-100"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};

const CodeBlock: React.FC<{ lines: string[] }> = ({ lines }) => {
    const text = lines.join('\n');
    return (
        <div className="relative rounded-lg bg-gray-900 p-4 pr-16">
            <CopyButton text={text} />
            <pre className="overflow-x-auto text-sm font-[Source_Code_Pro] leading-relaxed text-gray-100">
                <code>{text}</code>
            </pre>
        </div>
    );
};

const version = pinotMeta.latestVersion;

const dockerCommands: Record<Arch, string[]> = {
    x86: [
        `# Pull and run Apache Pinot ${version}`,
        `docker run -p 2123:2123 -p 9000:9000 -p 8000:8000 \\`,
        `  apachepinot.docker.scarf.sh/apachepinot/pinot:${version} \\`,
        `  QuickStart -type hybrid`
    ],
    ARM64: [
        `# Pull and run Apache Pinot ${version} (ARM64)`,
        `docker run -p 2123:2123 -p 9000:9000 -p 8000:8000 \\`,
        `  apachepinot.docker.scarf.sh/apachepinot/pinot:${version}-arm64 \\`,
        `  QuickStart -type hybrid`
    ]
};

const nightlyCommands: Record<Arch, string[]> = {
    x86: [`# Pull the latest nightly build`, `docker pull apachepinot/pinot:latest`],
    ARM64: [`# Pull the latest nightly build (ARM64)`, `docker pull apachepinot/pinot:latest-arm64`]
};

const k8sCommands = [
    `# Add the Pinot Helm repository`,
    `helm repo add pinot https://raw.githubusercontent.com/apache/pinot/master/helm`,
    `helm repo update`,
    ``,
    `# Install Apache Pinot`,
    `helm install pinot pinot/pinot \\`,
    `  -n pinot --create-namespace`
];

const DownloadInstall: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('docker');
    const [arch, setArch] = useState<Arch>('x86');

    return (
        <section className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-16">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">Quick Install</h2>
            <p className="mb-8 text-gray-600">
                Get Apache Pinot running locally with Docker or deploy to Kubernetes with Helm.
            </p>

            {/* Tab selector */}
            <div className="mb-6 flex space-x-1 border-b border-gray-200">
                {(
                    [
                        { key: 'docker', label: 'Docker' },
                        { key: 'k8s', label: 'Kubernetes (Helm)' }
                    ] as const
                ).map(({ key, label }) => (
                    <button
                        key={key}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                            activeTab === key
                                ? 'border-b-2 border-vine-100 text-vine-100'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {activeTab === 'docker' && (
                <div>
                    {/* Arch toggle */}
                    <div className="mb-4 flex space-x-2">
                        {(['x86', 'ARM64'] as const).map((a) => (
                            <button
                                key={a}
                                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                                    arch === a
                                        ? 'bg-vine-100 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                                onClick={() => setArch(a)}
                            >
                                {a}
                            </button>
                        ))}
                    </div>

                    {/* Stable release */}
                    <h3 className="mb-3 text-lg font-semibold">Stable Release ({version})</h3>
                    <CodeBlock lines={dockerCommands[arch]} />
                    <p className="mt-3 text-sm text-gray-500">
                        This starts a standalone Pinot cluster with the controller UI at{' '}
                        <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                            http://localhost:9000
                        </code>
                        .
                    </p>

                    {/* Nightly */}
                    <h3 className="mb-3 mt-8 text-lg font-semibold">Nightly Build</h3>
                    <p className="mb-3 text-sm text-gray-600">
                        The <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">latest</code>{' '}
                        tag points to the most recent nightly build from the main branch. Use it to
                        test unreleased features — not recommended for production.
                    </p>
                    <CodeBlock lines={nightlyCommands[arch]} />
                </div>
            )}

            {activeTab === 'k8s' && (
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Deploy with Helm</h3>
                    <CodeBlock lines={k8sCommands} />
                    <p className="mt-3 text-sm text-gray-500">
                        See the{' '}
                        <a
                            href="https://docs.pinot.apache.org/basics/getting-started/kubernetes-quickstart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="custom-link"
                        >
                            Kubernetes quickstart guide
                        </a>{' '}
                        for configuration options, resource tuning, and production deployment.
                    </p>
                </div>
            )}
        </section>
    );
};

export default DownloadInstall;
