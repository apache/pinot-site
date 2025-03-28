import siteMetadata from '@/data/siteMetadata';
import AnnouncementBar from './AnnouncementBar';

export default function ReleaseBanner() {
    return (
        <AnnouncementBar
            text="🎉🎉🎉 Announcing the release of Apache Pinot 1.3.0"
            backgroundColor="bg-sky-200"
            textColor="text-black"
            buttonText={siteMetadata.announcement.buttonText}
            buttonHref={siteMetadata.announcement.link}
            buttonColor="text-vine-100"
            showArrowIcon
            className="flex-col md:flex-row"
            buttonTarget="_blank"
        />
    );
}
