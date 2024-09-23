'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { sleep } from '@/app/lib/api.utils';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const baseUrl = 'https://api.hsforms.com/submissions/v3/integration/submit';
    const portalId = '8658213';
    const formId = '807be7ee-68cc-448e-9332-f9430d7caa77';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        const data = {
            fields: [
                {
                    objectTypeId: '0-1',
                    name: 'email',
                    value: email
                }
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        };

        try {
            const response = await fetch(`${baseUrl}/${portalId}/${formId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
            await sleep(12000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="w-full max-w-[459px] shrink-0">
            <h3 className="mb-5 text-2xl font-normal leading-tight tracking-tight text-gray-900 dark:text-gray-100 md:mb-7">
                Join our newsletter
            </h3>
            <form
                onSubmit={handleSubmit}
                className="flex w-full items-center gap-x-4 rounded-full border border-gray-200 bg-white px-5 py-3.5 dark:border-gray-700 md:px-6 md:py-3.5"
            >
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-0 bg-transparent p-0 text-sm leading-tight tracking-tight text-gray-900 outline-0 ring-0 placeholder:text-gray-400 focus:ring-0 dark:text-gray-100 dark:placeholder:text-gray-500"
                    placeholder="Your email address"
                    disabled={status === 'loading'}
                />
                <Button type="submit" variant="ghost" size="icon" className="h-6 w-6 p-0">
                    {status === 'loading' ? (
                        <span className="loading loading-spinner loading-xs" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    )}
                    <span className="sr-only">Subscribe</span>
                </Button>
            </form>
            {status === 'success' && (
                <p className="mt-2 text-green-600">Thank you for subscribing!</p>
            )}
            {status === 'error' && (
                <p className="mt-2 text-red-600">An error occurred. Please try again.</p>
            )}
        </div>
    );
};

export default Newsletter;
