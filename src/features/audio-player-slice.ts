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
    shuffledTrackList: Track[]; // New state for shuffled playlist
    currentTrack: Track | null;
    currentIdx: number;
    isPlaying: boolean;
    isShuffling: boolean;
}

const audioPlayerInitState: AudioPlayerState = {
    trackList: [],
    shuffledTrackList: [],
    currentTrack: null,
    currentIdx: 0,
    isPlaying: false,
    isShuffling: false,
};

// Function to shuffle an array
const shuffleArray = (array: Track[]): Track[] => {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState: audioPlayerInitState,
    reducers: {
        setTrackList: (state, action: PayloadAction<Track[]>) => {
            state.trackList = action.payload;
            state.shuffledTrackList = [];
            state.currentIdx = 0;
            state.currentTrack = state.trackList[0] || null;
        },
        gotoNextTrack: state => {
            const playlist = state.isShuffling
                ? state.shuffledTrackList
                : state.trackList;
            if (state.currentIdx < playlist.length - 1) {
                state.currentIdx += 1;
                state.currentTrack = playlist[state.currentIdx];
            }
        },
        gotoPreviousTrack: state => {
            const playlist = state.isShuffling
                ? state.shuffledTrackList
                : state.trackList;
            if (state.currentIdx > 0) {
                state.currentIdx--;
                state.currentTrack = playlist[state.currentIdx];
            }
        },
        playTrack: state => {
            state.isPlaying = true;
        },
        pauseTrack: state => {
            state.isPlaying = false;
        },
        activateShuffle: state => {
            state.isShuffling = true;
            state.shuffledTrackList = shuffleArray(state.trackList); // Shuffle the track list
            state.currentIdx = 0; // Reset index to start from the beginning
            state.currentTrack = state.shuffledTrackList[0]; // Set the first shuffled track
        },
        deactivateShuffle: state => {
            state.isShuffling = false;
            state.currentIdx = 0; // Reset index to original playlist
            state.currentTrack = state.trackList[0]; // Set the first track from original playlist
        },
    },
});

export const {
    gotoNextTrack,
    gotoPreviousTrack,
    setTrackList,
    playTrack,
    pauseTrack,
    activateShuffle,
    deactivateShuffle,
} = audioPlayerSlice.actions;

const audioPLayerReducer = audioPlayerSlice.reducer;

export default audioPLayerReducer;

// custom hook to interact with audioPlayerState
export const useAudioPlayer = () => {
    const dispatch = useDispatch();

    const playlist = useTypedSelector(state => state.audioPlayer.trackList);
    const shuffledPlaylist = useTypedSelector(
        state => state.audioPlayer.shuffledTrackList
    );
    const currentTrack = useTypedSelector(
        state => state.audioPlayer.currentTrack
    );
    const currentIdx = useTypedSelector(state => state.audioPlayer.currentIdx);
    const isPlaying = useTypedSelector(state => state.audioPlayer.isPlaying);
    const isShuffling = useTypedSelector(
        state => state.audioPlayer.isShuffling
    );

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const isNextTrackAvailable =
        currentIdx <
        (isShuffling ? shuffledPlaylist.length : playlist.length) - 1;
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
    }, [isPlaying]);

    // Update the audio source whenever the current track changes
    useEffect(() => {
        if (audioRef.current && currentTrack) {
            audioRef.current.src = currentTrack.src;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack, isPlaying]);

    // Cleanup the audio element when the component unmounts
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
            }
        };
    }, []);

    const playNextTrack = useCallback(() => {
        if (isNextTrackAvailable) {
            dispatch(gotoNextTrack());
        }
    }, [dispatch, isNextTrackAvailable]);

    const playPreviousTrack = useCallback(() => {
        if (isPreviousTrackAvailable) {
            dispatch(gotoPreviousTrack());
        }
    }, [dispatch, isPreviousTrackAvailable]);

    const setPlayList = useCallback(
        (tracks: Track[]) => {
            dispatch(setTrackList(tracks));
        },
        [dispatch]
    );

    const play = useCallback(() => {
        dispatch(playTrack());
    }, [dispatch]);

    const pause = useCallback(() => {
        dispatch(pauseTrack());
    }, [dispatch]);

    const turnOnShuffle = useCallback(() => {
        dispatch(activateShuffle());
    }, [dispatch]);

    const turnOffShuffle = useCallback(() => {
        dispatch(deactivateShuffle());
    }, [dispatch]);

    return {
        playlist,
        shuffledPlaylist,
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
        turnOnShuffle,
        turnOffShuffle,
        isShuffling,
    };
};
