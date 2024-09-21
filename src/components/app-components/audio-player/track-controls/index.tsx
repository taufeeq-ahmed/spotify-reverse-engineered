import ShuffleButton from '../control-buttons/ShuffleButton';
import PreviousButton from '../control-buttons/PreviousButton';
import NextButton from '../control-buttons/NextButton';
import LoopButton from '../control-buttons/LoopButton';
import PlaybackButton from '../control-buttons/PlaybackButton';
import ProgressBar from './progressbar';

function TrackControls() {
    return (
        <div className="flex flex-col gap-1 h-full justify-center">
            <div className="controls flex gap-3 items-center justify-center ">
                <ShuffleButton />
                <PreviousButton />
                <PlaybackButton />
                <NextButton />
                <LoopButton />
            </div>
            <ProgressBar />
        </div>
    );
}

export default TrackControls;
