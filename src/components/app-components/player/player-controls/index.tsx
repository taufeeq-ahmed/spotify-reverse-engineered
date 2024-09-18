import NowPlayingIcon from '@/assets/icons/NowPlayingIcon';
import IconButton from '../../icon-button';
import MicrophoneIcon from '@/assets/icons/MicrophoneIcon';
import QueueIcon from '@/assets/icons/QueueIcon';
import MiniPlayerIcon from '@/assets/icons/MiniPlayerIcon';
import ExpandIcon from '@/assets/icons/ExpandIcon';

function PlayerControls() {
    return (
        <div className="controls flex gap-0 items-center justify-end ">
            <IconButton
                icon={NowPlayingIcon}
                tooltipContent="Now Playing View"
            />
            <IconButton icon={MicrophoneIcon} tooltipContent="Lyrics" />
            <IconButton icon={QueueIcon} tooltipContent="Queue" />
            <IconButton
                icon={MiniPlayerIcon}
                tooltipContent="Open Mini PLayer"
            />
            <IconButton icon={ExpandIcon} tooltipContent="Full Screen" />
        </div>
    );
}

export default PlayerControls;
