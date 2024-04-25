import { permanentRedirect } from 'next/navigation';

const RedirectPage = () => {
    permanentRedirect('/powered-by');
};

export default RedirectPage;
