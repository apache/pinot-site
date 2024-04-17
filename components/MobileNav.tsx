'use client';

import { useState, useRef, useEffect } from 'react';
import headerNavLinks from '@/data/headerNavLinks';
import siteMetadata from '@/data/siteMetadata';
import GitHub from '@/data/github.svg';
import Close from '@/data/assets/close.svg';
import Menu from '@/data/assets/menu.svg';
import { Button } from './ui/button';
import Link from './Link';

const MobileNav = () => {
    const [navShow, setNavShow] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const onToggleNav = () => {
        setNavShow((status) => {
            document.body.style.overflow = status ? 'auto' : 'hidden';
            return !status;
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setNavShow(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                onToggleNav();
            }
        };

        if (navShow) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navShow]);

    return (
        <>
            <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
                <Menu />
            </button>

            {navShow && (
                <>
                    <div
                        className="fixed inset-0 z-10 bg-black opacity-10"
                        onClick={onToggleNav}
                        onKeyDown={handleKeyDown}
                        role="button"
                        tabIndex={0}
                        aria-label="Close navigation menu"
                    />

                    <div
                        ref={navRef}
                        className={`fixed left-0 top-0 z-10 h-full max-h-96 w-screen transform bg-white shadow-xl duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
                            navShow ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="flex justify-end">
                            <button
                                className="mr-4 mt-24 h-8 w-8"
                                aria-label="Toggle Menu"
                                onClick={onToggleNav}
                            >
                                <Close />
                            </button>
                        </div>
                        <nav className="fixed w-full">
                            {headerNavLinks
                                .filter((link) => link.href !== '/')
                                .map((link) => (
                                    <div key={link.title} className="px-12 py-1">
                                        <Link
                                            href={link.href}
                                            className="text-lg font-medium leading-9 text-gray-900 dark:text-gray-100"
                                            onClick={onToggleNav}
                                        >
                                            {link.title}
                                        </Link>
                                    </div>
                                ))}
                            <div className="flex gap-x-5 px-12 py-4">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="bg-vine-100 px-6 py-2 text-base"
                                >
                                    <Link href={siteMetadata.cta.getStarted} target="_blank">
                                        Get Started
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="px-3 py-2 text-base"
                                >
                                    <Link href={siteMetadata.github} target="_blank">
                                        <GitHub className="mr-2" />
                                        3.5k
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default MobileNav;
