import NowPlaying from './now-playing';
import PlayerControls from './player-controls';
import TrackControls from './track-controls';

function Player() {
    return (
        <div className="player h-[72px]  w-full  flex gap-2 border-[1px] border-white">
            <NowPlaying />
            <div className="track-controls w-[40%]">
                <TrackControls />
            </div>
            <div className="player-controls w-[30%]">
                <PlayerControls />
            </div>
        </div>
    );
}

export default Player;
