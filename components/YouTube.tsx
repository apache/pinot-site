// Simple YouTube embed for the blgo

type YouTubeProps = {
    id: string;
    title?: string;
};

export function YouTube({ id, title = 'YouTube video' }: YouTubeProps) {
    return (
        <div
            style={{
                width: '100%',
                aspectRatio: '16 / 9',
                marginBlock: '2rem',
                overflow: 'hidden',
                borderRadius: '0.5rem'
            }}
        >
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    border: 0
                }}
            />
        </div>
    );
}

export default YouTube;
