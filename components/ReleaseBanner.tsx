import siteMetadata from '@/data/siteMetadata';
import pinotMeta from '@/data/pinot-meta.json';
import AnnouncementBar from './AnnouncementBar';

export default function ReleaseBanner() {
    return (
        <AnnouncementBar
            text={`Announcing the release of Apache Pinot ${pinotMeta.latestVersion}`}
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
