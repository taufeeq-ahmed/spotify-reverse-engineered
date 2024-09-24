import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties | undefined;
};

function TabCard({ children, className, style }: Props) {
    return (
        <div
            className={twMerge('bg-[#121212] p-6 rounded-lg ', className)}
            style={style}
        >
            {children}
        </div>
    );
}

export default TabCard;
