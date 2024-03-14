import React from 'react';
import { type DownloadData } from '@/data/downloadsData';
import MobileDownloadTable from './MobileDownloadTable';
import DesktopDownloadTable from './DesktopDownloadTable';

interface DownloadsProps {
    data: DownloadData[];
}

const Downloads: React.FC<DownloadsProps> = ({ data }) => {
    return (
        <div className="p-4 pt-0 md:px-16 md:pb-16">
            <MobileDownloadTable data={data} />
            <DesktopDownloadTable data={data} />
        </div>
    );
};

export default Downloads;
