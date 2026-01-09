'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/app/lib/utils';
import CustomLink from './Link';

type VideoEmbedProps = {
    src: string;
    title?: string;
    posterSrc?: string;
    className?: string;
    iframeClassName?: string;
    aspectRatioClassName?: string;
    buttonLabel?: string;
    privacyNote?: string;
};

const defaultPrivacyNote = 'Loading this video will connect to YouTube and may set cookies.';

const getYouTubeVideoId = (src: string) => {
    try {
        const url = new URL(src);

        if (url.hostname === 'youtu.be') {
            return url.pathname.replace(/^\/+/, '').replace(/\/+$/, '') || null;
        }

        const queryId = url.searchParams.get('v');
        if (queryId) {
            return queryId;
        }

        const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
        if (embedMatch) {
            return embedMatch[1];
        }
    } catch {
        return null;
    }

    return null;
};

const getYouTubeWatchUrl = (src: string) => {
    const videoId = getYouTubeVideoId(src);
    return videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
};

const getNoCookieEmbedUrl = (src: string) => {
    try {
        const url = new URL(src);
        const youtubeHosts = new Set([
            'youtube.com',
            'www.youtube.com',
            'm.youtube.com',
            'youtube-nocookie.com',
            'www.youtube-nocookie.com'
        ]);

        if (youtubeHosts.has(url.hostname) && url.pathname.startsWith('/embed/')) {
            url.hostname = 'www.youtube-nocookie.com';
            return url.toString();
        }
    } catch {
        return src;
    }

    return src;
};

const VideoEmbed = ({
    src,
    title,
    posterSrc = '/static/images/video_thumbnail.png',
    className,
    iframeClassName,
    aspectRatioClassName = 'aspect-h-9 aspect-w-16',
    buttonLabel = 'Load video',
    privacyNote = defaultPrivacyNote
}: VideoEmbedProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const embedSrc = useMemo(() => getNoCookieEmbedUrl(src), [src]);
    const watchUrl = useMemo(() => getYouTubeWatchUrl(src), [src]);

    return (
        <div className={cn('relative w-full', aspectRatioClassName, className)}>
            {isLoaded ? (
                <iframe
                    className={cn('h-full w-full', iframeClassName)}
                    src={embedSrc}
                    title={title || 'Embedded Video'}
                    allowFullScreen
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            ) : (
                <div
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black/70 bg-cover bg-center px-4 py-6 text-center text-white"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${posterSrc})`
                    }}
                >
                    <p className="text-sm font-semibold sm:text-base">
                        This video is hosted on YouTube.
                    </p>
                    <button
                        type="button"
                        onClick={() => setIsLoaded(true)}
                        className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        {buttonLabel}
                    </button>
                    {privacyNote && <p className="text-xs text-white/90">{privacyNote}</p>}
                    {watchUrl && (
                        <CustomLink
                            href={watchUrl}
                            className="text-xs underline underline-offset-4 hover:text-white"
                        >
                            Open on YouTube
                        </CustomLink>
                    )}
                </div>
            )}
        </div>
    );
};

export default VideoEmbed;
