import NextIcon from '@/assets/icons/NextIcon';
import IconButton from '../../icon-button';
import { useAudioPlayer } from '@/features/audio-player-slice';

function NextButton() {
    const { isNextTrackAvailable, playNextTrack } = useAudioPlayer();
    return (
        <IconButton
            icon={NextIcon}
            tooltipContent="Next"
            onClick={playNextTrack}
            disabled={!isNextTrackAvailable}
        />
    );
}

export default NextButton;
