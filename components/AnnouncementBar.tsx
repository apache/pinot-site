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
    className = ''
}: AnnouncementBarProps) {
    return (
        <div className={clsx('z-50', backgroundColor, className)}>
            <Link
                href={buttonHref ? buttonHref : '#'}
                target={buttonTarget}
                className={`inline-flex items-center whitespace-nowrap text-base font-semibold hover:opacity-80 md:text-base ${buttonColor}`}
            >
                <div
                    className={clsx(
                        'flex items-center justify-center gap-2 p-4 md:gap-4 md:p-2',
                        className
                    )}
                >
                    <div className="ml-5 flex items-center text-left">
                        {iconSrc && (
                            <img
                                src={iconSrc}
                                alt=""
                                className="mb-2 mr-3 h-6 w-auto md:mb-0 md:mr-6"
                            />
                        )}
                        <span className={`text-base font-semibold md:text-lg ${textColor}`}>
                            {text}
                        </span>
                    </div>

                    <>
                        {buttonText}
                        {showArrowIcon && <ArrowRight className="ml-1 inline-block h-5 w-5" />}
                    </>
                </div>
            </Link>
        </div>
    );
}
