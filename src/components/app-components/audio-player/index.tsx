import { useAudioPlayer } from '@/features/audio-player-slice';
import { trackData } from '../audio-player/test-data';
import { useEffect, useRef } from 'react';

function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const { updateTrackList, play, pause, currentTrack, isPlaying } =
        useAudioPlayer();

    useEffect(() => {
        updateTrackList(trackData);
    }, []);

    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        console.log('hello', isPlaying);
    }, [isPlaying]);

    if (!currentTrack) return;

    return (
        <>
            <div className="">
                <button onClick={() => play()}>Play</button>
            </div>
            <div className="">
                <button onClick={() => pause()}>pause</button>
            </div>
            <div className="player hidden">
                <audio src={currentTrack?.src} controls ref={audioRef} />
            </div>
        </>
    );
}

export default AudioPlayer;
