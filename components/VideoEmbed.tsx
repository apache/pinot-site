'use client';

import { useState } from 'react';

type VideoEmbedProps = {
    src: string;
    title?: string;
};

const VideoEmbed = ({ src, title }: VideoEmbedProps) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const imagePlaceHolder = '/static/images/video_thumbnail.png';

    const handlePlaceholderClick = () => {
        setIframeLoaded(true);
    };

    const handleKeyPress = (event) => {
        // Check if the key pressed is 'Enter' or 'Space'
        if (event.key === 'Enter' || event.key === ' ') {
            setIframeLoaded(true);
        }
    };

    return (
        <div className="aspect-h-9 aspect-w-16">
            {!iframeLoaded ? (
                <div
                    className="video-placeholder flex h-full cursor-pointer items-center justify-center bg-cover bg-center"
                    onClick={handlePlaceholderClick}
                    onKeyPress={handleKeyPress}
                    role="button"
                    tabIndex={0} // Make it focusable
                    style={{ cursor: 'pointer', backgroundImage: `url(${imagePlaceHolder})` }}
                />
            ) : (
                <iframe
                    className="h-full w-full"
                    src={src}
                    title={title || 'Embedded Video'}
                    allowFullScreen
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            )}
        </div>
    );
};

export default VideoEmbed;
