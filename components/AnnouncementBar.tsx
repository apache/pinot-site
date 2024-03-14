import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export type AnnouncementBarProps =
    | {
          children: React.ReactNode;
          buttonText: string;
          link: string;
      }
    | {
          children: React.ReactNode;
          buttonText?: never;
          link?: never;
      };

const AnnouncementBar = ({ children, buttonText, link }: AnnouncementBarProps) => {
    return (
        <div className="inset-x-0 top-0 z-50 flex text-center text-base sm:text-left">
            <div className="flex w-full flex-col items-center justify-center bg-sky-200 pt-1 md:flex-row md:pt-0">
                <div className="flex flex-wrap items-center justify-center md:justify-start">
                    {children}
                </div>
                <div className="flex items-center justify-center">
                    {buttonText && (
                        <Button
                            variant="link"
                            asChild
                            className="mr-2 text-base font-semibold leading-tight text-vine-100"
                        >
                            <a href={link} target="_blank">
                                {buttonText}
                                <ArrowRight className="mr-2 h-5 w-5" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
