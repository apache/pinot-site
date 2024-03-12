import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { type DownloadData } from '@/data/downloadsData';
import Link from '../Link';

interface DownloadTableProps {
    data: DownloadData[];
}

const DesktopDownloadTable: React.FC<DownloadTableProps> = ({ data }) => {
    return (
        <Table className="hidden w-full md:table">
            <TableHeader className="border-b-2 border-neutral-400 font-semibold">
                <TableRow>
                    <TableHead className="align-middle text-lg font-semibold text-stone-900 dark:text-gray-100">
                        Version
                    </TableHead>
                    <TableHead className="align-middle text-lg font-semibold text-stone-900 dark:text-gray-100">
                        Date
                    </TableHead>
                    <TableHead className="align-middle text-lg font-semibold text-stone-900 dark:text-gray-100">
                        Official source
                    </TableHead>
                    <TableHead className="align-middle text-lg font-semibold text-stone-900 dark:text-gray-100">
                        Binary
                    </TableHead>
                    <TableHead className="align-middle text-lg font-semibold text-stone-900 dark:text-gray-100">
                        Release notes
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((download) => (
                    <TableRow key={download.version} className="border-t border-neutral-400">
                        <TableCell className="align-top text-lg">{download.version}</TableCell>
                        <TableCell className="align-top text-lg">{download.date}</TableCell>
                        <TableCell className="align-top">
                            <div className="flex space-x-2 text-lg font-semibold">
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
                        </TableCell>
                        <TableCell className="align-top">
                            <div className="flex space-x-2 align-top text-lg font-semibold">
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
                        </TableCell>
                        <TableCell>
                            <p className="text-lg">{download.releaseNotes}</p>
                            <Link
                                href="https://github.com/apache/pinot/releases"
                                className="align-top text-lg font-semibold text-green-700 hover:text-green-900"
                            >
                                See all notes
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DesktopDownloadTable;
