import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';
import { useCallback, useEffect, useRef } from 'react';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Track {
    title: string;
    thumbnail?: string;
    src: string;
    artist: string;
}

interface AudioPlayerState {
    trackList: Track[];
    currentTrack: Track | null;
    currentIdx: number;
    isPlaying: boolean;
}

const audioPlayerInitState: AudioPlayerState = {
    trackList: [],
    currentTrack: null,
    currentIdx: 0,
    isPlaying: false,
};

const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState: audioPlayerInitState,
    reducers: {
        setTrackList: (state, action: PayloadAction<Track[]>) => {
            if (action.payload !== state.trackList) {
                state.trackList = action.payload;
                state.currentIdx = 0;
                state.currentTrack = state.trackList[0] || null;
            }
        },
        gotoNextTrack: state => {
            if (state.currentIdx < state.trackList.length - 1) {
                state.currentIdx += 1;
                state.currentTrack = state.trackList[state.currentIdx];
            }
        },
        gotoPreviousTrack: state => {
            if (state.currentIdx > 0) {
                state.currentIdx--;
                state.currentTrack = state.trackList[state.currentIdx];
            }
        },
        playTrack: state => {
            state.isPlaying = true;
        },
        pauseTrack: state => {
            state.isPlaying = false;
        },
    },
});

export const {
    gotoNextTrack,
    gotoPreviousTrack,
    setTrackList,
    playTrack,
    pauseTrack,
} = audioPlayerSlice.actions;

const audioPLayerReducer = audioPlayerSlice.reducer;

export default audioPLayerReducer;

// custom hook to interact with audioPlayerState
export const useAudioPlayer = () => {
    const dispatch = useDispatch();

    const playlist = useTypedSelector(state => state.audioPlayer.trackList);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = useTypedSelector(
        state => state.audioPlayer.currentTrack
    );

    const currentIdx = useTypedSelector(state => state.audioPlayer.currentIdx);

    const isPlaying = useTypedSelector(state => state.audioPlayer.isPlaying);

    const isNextTrackAvailable = currentIdx < playlist.length - 1;

    const isPreviousTrackAvailable = currentIdx > 0;

    // Play or pause the audio whenever isPlaying state changes
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    const playNextTrack = () => {
        if (isNextTrackAvailable) {
            dispatch(gotoNextTrack());
        }
    };

    const playPreviousTrack = () => {
        if (isPreviousTrackAvailable) {
            dispatch(gotoPreviousTrack());
        }
    };

    const setPlayList = useCallback(
        (tracks: Track[]) => {
            dispatch(setTrackList(tracks));
        },
        [dispatch]
    );

    const play = () => {
        dispatch(playTrack());
    };

    const pause = () => {
        dispatch(pauseTrack());
    };

    return {
        playlist,
        currentTrack,
        currentIdx,
        playNextTrack,
        playPreviousTrack,
        setPlayList,
        isPlaying,
        play,
        pause,
        audioRef,
        isNextTrackAvailable,
        isPreviousTrackAvailable,
    };
};
