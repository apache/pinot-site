import { format } from 'date-fns';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Blog } from '@/.contentlayer/generated';
import Link from './Link';
import { CoreContent } from 'pliny/utils/contentlayer';
import { getAuthorsFromBlogPost } from '@/app/lib/authors.utils';

const BlogCard: React.FC<{ post: CoreContent<Blog> }> = ({ post }) => {
    const { slug, title, authors, date, readingTime, customSlug } = post;
    const authorDetails = getAuthorsFromBlogPost(slug);

    return (
        <Link href={`/blog/${slug}`} aria-label={title} className="px-5 sm:px-0">
            <Card className="h-full border-neutral-500 p-5">
                <CardHeader className="h-full justify-between p-0">
                    <div>
                        <CardTitle className="pb-2 text-xl font-semibold leading-8 text-stone-900">
                            {title}
                        </CardTitle>
                        {/* <CardDescription>{authors?.map((author) => `${author}`)}</CardDescription> */}
                        <CardDescription className="leading-[1.1rem] text-stone-900">
                            {authorDetails.map((author) => author.name).join(', ')}
                        </CardDescription>
                    </div>
                    <CardDescription className="leading-[1.1rem]">
                        {format(date, 'MMMM do, yyyy')} • {readingTime.text}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
};

export default BlogCard;
