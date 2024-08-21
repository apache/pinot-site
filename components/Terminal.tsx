// use client
import React, { FC, useState } from 'react';
import { Button } from './ui/button';

const Terminal: FC = () => {
    const [activeTab, setActiveTab] = useState<'x86' | 'ARM64'>('x86');
    const [copied, setCopied] = useState(false);

    const commands = {
        x86: [
            'docker run -p 9000:9000 \\',
            'apachepinot/pinot:1.2.0 \\',
            'QuickStart -type hybrid'
        ],
        ARM64: [
            'docker run -p 9000:9000 \\',
            'apachepinot/pinot:1.2.0-arm64 \\',
            'QuickStart -type hybrid'
        ]
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(commands[activeTab].join('\n'));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Show copied status for 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const renderCommandWithNumbers = (commandLines: string[]) => {
        return commandLines.map((line, index) => (
            <div className="table-row" key={index}>
                <span className="table-cell select-none pr-1 text-gray-400">{index + 1}</span>
                <span className="table-cell">{line}</span>
            </div>
        ));
    };

    return (
        <div className="my-4 rounded-lg border-2 border-amber-800">
            {/* Terminal output */}
            <div className="overflow-hidden rounded-lg">
                <div className="flex items-center justify-between border-b border-amber-800 p-4">
                    <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                {/* Tab buttons */}
                <div className="mb-2 ml-8 flex space-x-1 border-b-2">
                    {(['x86', 'ARM64'] as const).map((arch) => (
                        <button
                            key={arch}
                            className={`border-b-4 px-4 py-2
                                        pt-5 font-[Source_Code_Pro]
                            ${
                                activeTab === arch
                                    ? 'border-rose-700 text-base font-semibold'
                                    : 'border-transparent opacity-30'
                            }`}
                            onClick={() => setActiveTab(arch)}
                        >
                            {arch}
                        </button>
                    ))}
                </div>
                <div className="table w-full whitespace-pre-wrap p-4 font-[Source_Code_Pro] leading-loose">
                    {renderCommandWithNumbers(commands[activeTab])}
                </div>
            </div>

            {/* Copy button */}
            <Button
                variant="outline"
                size="sm"
                className="m-7 w-16 border-2 border-vine-100 text-vine-100"
                onClick={handleCopy}
            >
                {copied ? 'copied!' : 'copy'}
            </Button>
        </div>
    );
};

export default Terminal;
