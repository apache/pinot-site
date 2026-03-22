import CommunityPage from '@/components/CommunityPage';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
    title: 'Community',
    description:
        'Join the Apache Pinot community — connect on Slack, contribute on GitHub, attend meetups, and subscribe to mailing lists'
});

export default function Page() {
    return (
        <section>
            <CommunityPage />
        </section>
    );
}
