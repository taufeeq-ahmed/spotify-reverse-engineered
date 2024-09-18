import NowPlayingIcon from '@/assets/icons/NowPlayingIcon';
import IconButton from '../../icon-button';

function NowPlayingButton() {
    return (
        <IconButton icon={NowPlayingIcon} tooltipContent="Now Playing View" />
    );
}

export default NowPlayingButton;
