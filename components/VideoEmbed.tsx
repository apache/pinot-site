'use client';

type VideoEmbedProps = {
    src: string;
    title?: string;
};

const VideoEmbed = ({ src, title }: VideoEmbedProps) => {
    return (
        <div className="aspect-h-9 aspect-w-16">
            <iframe
                className="h-full w-full"
                src={src}
                title={title || 'Embedded Video'}
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
