import ExpandIcon from '@/assets/icons/ExpandIcon';
import HighVolumeSpeaker from '@/assets/icons/HighVolumeSpeaker';
import LoopIcon from '@/assets/icons/LoopIcon';
import LoopSingleIcon from '@/assets/icons/LoopSingle';
import MicrophoneIcon from '@/assets/icons/MicrophoneIcon';
import MidVolumeSpeaker from '@/assets/icons/MidVolumeSpeaker';
import MinimiseIcon from '@/assets/icons/MinimiseIcon';
import MiniPlayerIcon from '@/assets/icons/MiniPlayerIcon';
import MutedSpeaker from '@/assets/icons/MutedSpeaker';
import NextIcon from '@/assets/icons/NextIcon';
import NowPlayingIcon from '@/assets/icons/NowPlayingIcon';
import PauseIcon from '@/assets/icons/PauseIcon';
import PlayIcon from '@/assets/icons/PlayIcon';
import PreviousIcon from '@/assets/icons/PreviousIcon';
import QueueIcon from '@/assets/icons/QueueIcon';
import ShuffleIcon from '@/assets/icons/ShuffleIcon';

function Player() {
    const imageSource =
        'https://mainbalti.s3.ap-south-1.amazonaws.com/image_movies/7200/435949125.jpg';

    return (
        <div className="player h-[72px]  fixed bottom-2 left-0 w-full p-4 flex gap-2">
            <div className="track-details flex gap-4 justify-center items-center">
                <img
                    src={imageSource}
                    alt=""
                    className="thumbnail h-[56px] w-[56px] rounded-sm"
                />
                <div className="details">
                    <p className="text-sm">Matarghashti</p>
                    <p className="text-xs text-[#B3B3B3]">Mohit Chauhan</p>
                </div>
            </div>
            <div className="track-controls"></div>
            <div className="player-controls flex gap-2">
                <ShuffleIcon className="w-4 h-4" />
                <PreviousIcon className="w-4 h-4" />
                <PlayIcon className="w-4 h-4" />
                <PauseIcon className="w-4 h-4" />
                <NextIcon className="w-4 h-4" />
                <LoopIcon className="w-4 h-4" />
                <LoopSingleIcon className="w-4 h-4" />
                <NowPlayingIcon className="w-4 h-4" />
                <MicrophoneIcon className="w-4 h-4" />
                <QueueIcon className="w-4 h-4" />
                <HighVolumeSpeaker className="w-4 h-4" />
                <MidVolumeSpeaker className="w-4 h-4" />
                <MutedSpeaker className="w-4 h-4" />
                <MiniPlayerIcon className="w-4 h-4" />
                <ExpandIcon className="w-4 h-4" />
                <MinimiseIcon className="w-4 h-4" />
            </div>
        </div>
    );
}

export default Player;
