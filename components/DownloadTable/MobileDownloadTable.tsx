import React from 'react';
import Link from '../Link';
import { type DownloadData } from '@/data/downloadsData';
import pinotMeta from '@/data/pinot-meta.json';

interface DownloadTableProps {
    data: DownloadData[];
}

const MobileDownloadTable: React.FC<DownloadTableProps> = ({ data }) => {
    return (
        <div className="md:hidden">
            <hr className="my-4 border-neutral-400" />
            {data.map((download, index) => (
                <div key={index} className="mb-8 last:mb-0">
                    <div className="flex w-72 justify-between">
                        <div className="flex flex-col">
                            <div className="font-semibold">Version</div>
                            <div>
                                {download.version}
                                {download.version === pinotMeta.latestVersion && (
                                    <span className="ml-2 inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                                        Latest
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold">Date</div>
                            <div>{download.date}</div>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="font-semibold">Official source</div>
                        <div className="flex space-x-2 font-semibold">
                            <Link
                                href={download.officialSource.download}
                                className="text-green-700 hover:text-green-900"
                            >
                                Download
                            </Link>
                            <span>/</span>
                            <Link
                                href={download.officialSource.sha512}
                                className="text-green-700 hover:text-green-900"
                            >
                                SHA512
                            </Link>
                            <span>/</span>
                            <Link
                                href={download.officialSource.asc}
                                className="text-green-700 hover:text-green-900"
                            >
                                ASC
                            </Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="font-semibold">Binary</div>
                        <div className="flex space-x-2 align-top font-semibold">
                            <Link
                                href={download.binary.download}
                                className="text-green-700 hover:text-green-900"
                            >
                                Download
                            </Link>
                            <span>/</span>
                            <Link
                                href={download.binary.sha512}
                                className="text-green-700 hover:text-green-900"
                            >
                                SHA512
                            </Link>
                            <span>/</span>
                            <Link
                                href={download.binary.asc}
                                className="text-green-700 hover:text-green-900"
                            >
                                ASC
                            </Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="font-semibold">Release notes</div>
                        <p className="leading-relaxed">{download.releaseNotes}</p>
                        <Link
                            href={'#releaseNotes'}
                            className="align-top font-semibold text-green-700 hover:text-green-900"
                        >
                            See all notes
                        </Link>
                    </div>
                    <hr className="my-4 border-neutral-400" />
                </div>
            ))}
        </div>
    );
};

export default MobileDownloadTable;
