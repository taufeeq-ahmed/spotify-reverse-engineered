import { Progress } from '@/components/ui/progress';

function ProgressBar() {
    return (
        <div className="progress-bar flex gap-4 items-center ">
            <div className="text-xs opacity-75">{'0:00'}</div>
            <Progress
                className="max-w-full h-[4px] bg-[#ffffff4d] group"
                indicatorClassName="bg-white group-hover:bg-primary"
                value={50}
            />
            <div className="text-xs opacity-75">{'4:32'}</div>
        </div>
    );
}

export default ProgressBar;
