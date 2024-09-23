import { twMerge } from 'tailwind-merge';

type Props = {
    children: React.ReactNode;
    className?: string;
};

function TabCard({ children, className }: Props) {
    return (
        <div className={twMerge('bg-[#121212] p-6 rounded-lg ', className)}>
            {children}
        </div>
    );
}

export default TabCard;
