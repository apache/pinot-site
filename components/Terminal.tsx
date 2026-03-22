// use client
import React, { FC, useState } from 'react';
import { Button } from './ui/button';

const Terminal: FC = () => {
    const [copied, setCopied] = useState(false);

    const commands = [
        'docker run -p 9000:9000 \\',
        'apachepinot.docker.scarf.sh/apachepinot/pinot:1.4.0 \\',
        'QuickStart -type hybrid'
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(commands.join('\n'));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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
                <div className="table w-full whitespace-pre-wrap p-4 pt-6 font-[Source_Code_Pro] leading-loose">
                    {renderCommandWithNumbers(commands)}
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
