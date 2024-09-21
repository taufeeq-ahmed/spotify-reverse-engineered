import { Slider } from '@/components/ui/slider';
import { useAudioPlayer } from '@/features/audio-player-slice';

const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

function ProgressBar() {
    const { progressDetails, updateTrackPosition } = useAudioPlayer();
    const { currentTime, progressLevel, totalDuration } = progressDetails;

    const handleSliderChange = (value: number[]) => {
        updateTrackPosition(value[0]);
    };

    return (
        <div className="progress-bar flex gap-4 items-center">
            <div className="text-xs opacity-75">{formatTime(currentTime)}</div>
            <Slider
                value={[progressLevel]}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
            />
            <div className="text-xs opacity-75">
                {formatTime(totalDuration)}
            </div>
        </div>
    );
}

export default ProgressBar;
