import { useAudioPlayer } from '@/features/audio-player-slice';

function NowPlaying() {
    const { currentTrack } = useAudioPlayer();

    return (
        <div className="track-details flex gap-4 justify-start items-center w-[30%] pl-2">
            <img
                src={currentTrack?.thumbnail}
                alt="now-playing"
                className="thumbnail w-[56px] rounded-sm aspect-square object-cover"
            />
            <div className="details">
                <p className="text-sm">{currentTrack?.title}</p>
                <p className="text-xs text-[#B3B3B3]">{currentTrack?.artist}</p>
            </div>
        </div>
    );
}

export default NowPlaying;
