/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface AnnouncementBarProps {
    text: string;
    iconSrc?: string;
    textColor?: string;
    backgroundColor?: string;
    buttonText?: string;
    buttonHref?: string;
    buttonColor?: string;
    buttonTarget?: string;
    showArrowIcon?: boolean;
    expiresAfter?: string;
    className?: string;
}

export default function AnnouncementBar({
    text,
    iconSrc,
    textColor = 'text-black',
    backgroundColor = 'bg-slate-100',
    buttonText,
    buttonHref,
    buttonColor = 'text-blue-600',
    buttonTarget = '_self',
    showArrowIcon = true,
    expiresAfter,
    className = ''
}: AnnouncementBarProps) {
    if (expiresAfter) {
        const expiryDate = new Date(expiresAfter);
        if (Number.isNaN(expiryDate.getTime())) {
            throw new Error(`Invalid AnnouncementBar expiry date: ${expiresAfter}`);
        }

        if (new Date() > expiryDate) {
            return null;
        }
    }

    return (
        <div className={clsx('z-50 w-full', backgroundColor, className)}>
            <div
                className={clsx(
                    'flex w-full items-center justify-center gap-2 p-4 md:gap-4 md:p-2',
                    className
                )}
            >
                <Link
                    href={buttonHref || '#'}
                    target={buttonTarget}
                    className={`inline-flex max-w-full flex-wrap items-center justify-center text-sm font-semibold hover:opacity-80 sm:text-base ${buttonColor}`}
                >
                    <div className="ml-5 flex max-w-full items-center text-center">
                        {iconSrc && (
                            <img
                                src={iconSrc}
                                alt=""
                                className="mb-2 mr-3 h-6 w-auto md:mb-0 md:mr-6"
                            />
                        )}
                        <span
                            className={`text-sm font-semibold sm:text-base md:text-lg ${textColor}`}
                        >
                            {text}
                        </span>
                    </div>
                    <span className="ml-2">{buttonText}</span>
                    {showArrowIcon && <ArrowRight className="ml-1 inline-block h-5 w-5" />}
                </Link>
            </div>
        </div>
    );
}
