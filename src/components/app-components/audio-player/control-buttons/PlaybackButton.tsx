import PlayIcon from '@/assets/icons/PlayIcon';
import IconButton from '../../icon-button';

function PlaybackButton() {
    return (
        <IconButton
            icon={PlayIcon}
            iconClassName="text-black opacity-100"
            tooltipContent="Play"
            buttonClassName="bg-white rounded-full h-fit m-0 p-2 hover:bg-white enabled:hover:bg-white"
        />
    );
}

export default PlaybackButton;
