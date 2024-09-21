import ShuffleIcon from '@/assets/icons/ShuffleIcon';
import IconButton from '../../icon-button';
import { useAudioPlayer } from '@/features/audio-player-slice';

function ShuffleButton() {
    const { isShuffling, turnOnShuffle, turnOffShuffle } = useAudioPlayer();

    return isShuffling ? (
        <div className="flex flex-col justify-center items-center relative">
            <IconButton
                icon={ShuffleIcon}
                tooltipContent="Disable Shuffle"
                onClick={turnOffShuffle}
                iconClassName="text-primary opacity-100"
            />
            <div className="w-[4px] h-[4px] bg-primary rounded-full relative top-[-4px]"></div>
        </div>
    ) : (
        <IconButton
            icon={ShuffleIcon}
            tooltipContent="Enable Shuffle"
            onClick={turnOnShuffle}
        />
    );
}

export default ShuffleButton;
