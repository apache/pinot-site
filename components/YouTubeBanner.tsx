import siteMetadata from '@/data/siteMetadata';
import AnnouncementBar from './AnnouncementBar';

export default function YouTubeBanner() {
    return (
        <AnnouncementBar
            text={siteMetadata.youtubeShare.buttonText}
            iconSrc="/static/images/youtube_red.svg"
            backgroundColor="bg-[#C7154A]"
            textColor="text-white"
            buttonHref={siteMetadata.youtubeShare.link}
            buttonColor="text-white"
        />
    );
}
