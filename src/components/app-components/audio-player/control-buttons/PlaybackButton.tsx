import PlayIcon from '@/assets/icons/PlayIcon';
import IconButton from '../../icon-button';
import { useAudioPlayer } from '@/features/audio-player-slice';
import PauseIcon from '@/assets/icons/PauseIcon';

function PlaybackButton() {
    const { isPlaying, play, pause } = useAudioPlayer();

    return isPlaying ? (
        <IconButton
            icon={PauseIcon}
            iconClassName="text-black opacity-100"
            tooltipContent="Pause"
            buttonClassName="bg-white rounded-full h-fit m-0 p-2 hover:bg-white enabled:hover:bg-white"
            onClick={pause}
        />
    ) : (
        <IconButton
            icon={PlayIcon}
            iconClassName="text-black opacity-100"
            tooltipContent="Play"
            buttonClassName="bg-white rounded-full h-fit m-0 p-2 hover:bg-white enabled:hover:bg-white"
            onClick={play}
        />
    );
}

export default PlaybackButton;
