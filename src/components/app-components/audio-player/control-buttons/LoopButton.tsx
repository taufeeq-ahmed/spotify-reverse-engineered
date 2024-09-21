import LoopIcon from '@/assets/icons/LoopIcon';
import IconButton from '../../icon-button';
import { useAudioPlayer } from '@/features/audio-player-slice';
import LoopSingleIcon from '@/assets/icons/LoopSingle';

function LoopButton() {
    const { loopMode, changeLoopMode } = useAudioPlayer();

    return loopMode === 'playlist' ? (
        <IconButton
            icon={LoopIcon}
            tooltipContent="Disable Looping"
            onClick={() => {
                changeLoopMode('track');
            }}
            iconClassName="text-primary opacity-100"
        />
    ) : loopMode === 'track' ? (
        <IconButton
            icon={LoopSingleIcon}
            tooltipContent="Disable Looping"
            onClick={() => {
                changeLoopMode('off');
            }}
            iconClassName="text-primary opacity-100"
        />
    ) : (
        <IconButton
            icon={LoopIcon}
            tooltipContent="Enable Repeat"
            onClick={() => {
                changeLoopMode('playlist');
            }}
        />
    );

    return;
}

export default LoopButton;
