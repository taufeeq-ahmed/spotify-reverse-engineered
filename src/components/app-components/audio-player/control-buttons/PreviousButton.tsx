import PreviousIcon from '@/assets/icons/PreviousIcon';
import IconButton from '../../icon-button';
import { useAudioPlayer } from '@/features/audio-player-slice';

function PreviousButton() {
    const { isPreviousTrackAvailable, playPreviousTrack } = useAudioPlayer();
    return (
        <IconButton
            icon={PreviousIcon}
            tooltipContent="Previous"
            onClick={playPreviousTrack}
            disabled={!isPreviousTrackAvailable}
        />
    );
}

export default PreviousButton;
