import NowPlayingButton from '../control-buttons/NowPlayingButton';
import LyricsButton from '../control-buttons/LyricsButton';
import QueueButton from '../control-buttons/QueueButton';
import MiniPlayerButton from '../control-buttons/MiniPlayerButton';
import FullScreenButton from '../control-buttons/FullScreenButton';

function PlayerControls() {
    return (
        <div className="controls flex gap-0 items-center justify-end h-full">
            <NowPlayingButton />
            <LyricsButton />
            <QueueButton />
            <MiniPlayerButton />
            <FullScreenButton />
        </div>
    );
}

export default PlayerControls;
