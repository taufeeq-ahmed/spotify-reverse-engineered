import LoopIcon from '@/assets/icons/LoopIcon';
import NextIcon from '@/assets/icons/NextIcon';
import PlayIcon from '@/assets/icons/PlayIcon';
import PreviousIcon from '@/assets/icons/PreviousIcon';
import ShuffleIcon from '@/assets/icons/ShuffleIcon';
import IconButton from '../../icon-button';

function TrackControls() {
    return (
        <div className="controls flex gap-4 items-center justify-center ">
            <IconButton icon={ShuffleIcon} tooltipContent="Enable Shuffle" />
            <IconButton icon={PreviousIcon} tooltipContent="Previous" />

            <IconButton
                icon={PlayIcon}
                iconClassName="text-black opacity-100"
                tooltipContent="Play"
                buttonClassName="bg-white rounded-full h-fit m-0 p-2 hover:bg-white enabled:hover:bg-white"
            />

            <IconButton icon={NextIcon} tooltipContent="Next" />
            <IconButton icon={LoopIcon} tooltipContent="Enable Repeat" />
        </div>
    );
}

export default TrackControls;
