import { Button, ButtonProps } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ButtonProps {
    icon: ({ className }: { className: string }) => JSX.Element;
    tooltipContent: string;
    buttonClassName?: string;
    iconClassName?: string;
}

function IconButton({
    icon: Icon,
    tooltipContent,
    buttonClassName,
    iconClassName,
}: IconButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        className={twMerge(
                            'bg-transparent group enabled:hover:bg-transparent hover:scale-110 p-2',
                            buttonClassName
                        )}
                    >
                        <Icon
                            className={twMerge(
                                'w-4 h-4 text-white opacity-75 group-hover:opacity-100 ',
                                iconClassName
                            )}
                        />
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-[#1f1f1f] border-0 text-white py-1 px-2">
                    <p>{tooltipContent}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default IconButton;
