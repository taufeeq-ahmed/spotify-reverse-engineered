import { useAudioPlayer } from '@/features/audio-player-slice';
import NowPlaying from './now-playing';
import PlayerControls from './player-controls';
import TrackControls from './track-controls';
import { useEffect } from 'react';
import { testingPlayList } from '@/testing-playlist';

function Player() {
    const { setPlayList, audioRef, currentTrack } = useAudioPlayer();

    useEffect(() => {
        setPlayList(testingPlayList);
    }, [setPlayList]);

    return (
        <div className="player h-[72px]  w-full  flex gap-2">
            <NowPlaying />
            <div className="track-controls w-[40%]">
                <TrackControls />
            </div>
            <div className="player-controls w-[30%]">
                <PlayerControls />
            </div>
            {currentTrack && <audio ref={audioRef} src={currentTrack?.src} />}
        </div>
    );
}

export default Player;
