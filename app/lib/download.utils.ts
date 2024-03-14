import { pipe, map, sort } from 'ramda';
import { format } from 'date-fns';
import { type Downloads as ContentLayerDownloads } from 'contentlayer/generated';

const sortDownloadsByDateDescending = sort(
    (a: ContentLayerDownloads, b: ContentLayerDownloads) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
);

const formatDownloadDate = map((download: ContentLayerDownloads) => ({
    ...download,
    date: format(new Date(download.date), 'MMMM do, yyyy'), // Format the date for display
    releaseNotes: download.releaseNotes?.raw || ''
}));

const transformAndSortDownloads = pipe(sortDownloadsByDateDescending, formatDownloadDate);

// const transformAndSortDownloads = (
//     contentLayerDownloads: ContentLayerDownloads[]
// ): DownloadData[] => {
//     const sortedDownloads = contentLayerDownloads.sort(
//         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//     );

//     return sortedDownloads.map((download) => ({
//         version: download.version,
//         date: format(new Date(download.date), 'MMMM do, yyyy'), // Format the date for display
//         href: download.href,
//         officialSource: download.officialSource,
//         binary: download.binary,
//         releaseNotes: download.releaseNotes?.raw
//     }));
// };

export { transformAndSortDownloads };
