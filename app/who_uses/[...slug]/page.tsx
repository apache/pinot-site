import { permanentRedirect } from 'next/navigation';

export const generateStaticParams = async () => {
    const paths = [{ slug: ['index'] }];

    return paths;
};

export default async function Page() {
    permanentRedirect('/powered-by');
}
