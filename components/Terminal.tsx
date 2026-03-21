// use client
import React, { FC, useState } from 'react';
import { Button } from './ui/button';

interface Step {
    id: string;
    title: string;
    content: string[];
}

const Terminal: FC = () => {
    const [activeStep, setActiveStep] = useState<string>('step-1');
    const [activeArch, setActiveArch] = useState<'x86' | 'ARM64'>('x86');
    const [copied, setCopied] = useState(false);

    const steps: Step[] = [
        {
            id: 'step-1',
            title: 'Start Pinot',
            content: activeArch === 'x86'
                ? [
                    'docker run -p 9000:9000 \\',
                    'apachepinot.docker.scarf.sh/apachepinot/pinot:1.4.0 \\',
                    'QuickStart -type hybrid'
                ]
                : [
                    'docker run -p 9000:9000 \\',
                    'apachepinot.docker.scarf.sh/apachepinot/pinot:1.4.0-arm64 \\',
                    'QuickStart -type hybrid'
                ]
        },
        {
            id: 'step-2',
            title: 'Create Table',
            content: [
                'curl -X POST http://localhost:9000/schemas \\',
                "  -H 'Content-Type: application/json' \\",
                '  -d @examples/batch/airlineStats/airlineStats_schema.json'
            ]
        },
        {
            id: 'step-3',
            title: 'Query Data',
            content: [
                'SELECT carrier, count(*) AS flights,',
                '       avg(arrDelay) AS avg_delay',
                'FROM airlineStats',
                "WHERE destState = 'CA'",
                'GROUP BY carrier',
                'ORDER BY flights DESC',
                'LIMIT 10;'
            ]
        },
        {
            id: 'step-4',
            title: 'See Results',
            content: [
                '[',
                '  {"carrier":"WN","flights":3214,"avg_delay":5.2},',
                '  {"carrier":"UA","flights":2104,"avg_delay":8.7},',
                '  {"carrier":"AA","flights":1893,"avg_delay":6.1}',
                ']'
            ]
        }
    ];

    const currentStep = steps.find(s => s.id === activeStep) || steps[0];

    const handleCopy = async () => {
        try {
            const textToCopy = currentStep.content.join('\n');
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleArchChange = (arch: 'x86' | 'ARM64') => {
        setActiveArch(arch);
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

                {/* Step tabs */}
                <div className="mb-2 ml-8 flex flex-wrap space-x-1 border-b-2">
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            className={`border-b-4 px-4 py-2 pt-5 font-[Source_Code_Pro] text-sm transition-all
                            ${
                                activeStep === step.id
                                    ? 'border-rose-700 text-base font-semibold'
                                    : 'border-transparent opacity-30 hover:opacity-60'
                            }`}
                            onClick={() => setActiveStep(step.id)}
                        >
                            {step.id.split('-')[1]}. {step.title}
                        </button>
                    ))}
                </div>

                {/* Architecture selector - only shown for step 1 */}
                {activeStep === 'step-1' && (
                    <div className="ml-8 flex space-x-2 border-b border-gray-200 pb-2">
                        {(['x86', 'ARM64'] as const).map((arch) => (
                            <button
                                key={arch}
                                className={`px-3 py-1 text-xs font-[Source_Code_Pro] transition-colors
                                ${
                                    activeArch === arch
                                        ? 'bg-vine-100 text-gray-900'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                                onClick={() => handleArchChange(arch)}
                            >
                                {arch}
                            </button>
                        ))}
                    </div>
                )}

                {/* Command content */}
                <div className="table w-full whitespace-pre-wrap p-4 font-[Source_Code_Pro] leading-loose text-gray-100">
                    {renderCommandWithNumbers(currentStep.content)}
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