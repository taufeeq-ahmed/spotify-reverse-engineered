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

interface ProgressDetails {
    currentTime: number; // current play time in seconds
    totalDuration: number; // total duration in seconds
    progressLevel: number; // progress as a percentage
}

interface AudioPlayerState {
    trackList: Track[];
    shuffledTrackList: Track[];
    currentTrack: Track | null;
    currentIdx: number;
    isPlaying: boolean;
    isShuffling: boolean;
    loopMode: 'off' | 'track' | 'playlist'; // New loop mode state
    progressDetails: ProgressDetails;
}

const audioPlayerInitState: AudioPlayerState = {
    trackList: [],
    shuffledTrackList: [],
    currentTrack: null,
    currentIdx: 0,
    isPlaying: false,
    isShuffling: false,
    loopMode: 'off', // Initialize loop mode as 'off'
    progressDetails: {
        currentTime: 0,
        totalDuration: 0,
        progressLevel: 0,
    },
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
            } else if (state.loopMode === 'playlist') {
                state.currentIdx = 0;
                state.currentTrack = playlist[0];
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
            state.shuffledTrackList = shuffleArray(state.trackList);
            state.currentIdx = 0;
            state.currentTrack = state.shuffledTrackList[0];
        },
        deactivateShuffle: state => {
            state.isShuffling = false;
            state.currentIdx = 0;
            state.currentTrack = state.trackList[0];
        },
        setLoopMode: (
            state,
            action: PayloadAction<'off' | 'track' | 'playlist'>
        ) => {
            state.loopMode = action.payload;
        },
        updateProgress: (state, action: PayloadAction<ProgressDetails>) => {
            state.progressDetails = action.payload;
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
    setLoopMode,
    updateProgress,
} = audioPlayerSlice.actions;

const audioPLayerReducer = audioPlayerSlice.reducer;

export default audioPLayerReducer;

// Custom hook to interact with audioPlayerState
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
    const loopMode = useTypedSelector(state => state.audioPlayer.loopMode); // Loop mode

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const isNextTrackAvailable =
        loopMode === 'playlist' ||
        currentIdx <
            (isShuffling ? shuffledPlaylist.length : playlist.length) - 1;

    const isPreviousTrackAvailable = loopMode === 'playlist' || currentIdx > 0;

    const progressDetails = useTypedSelector(
        state => state.audioPlayer.progressDetails
    );

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
            audioRef.current.load(); // Ensure the new track loads
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

    const updateAudioProgress = useCallback(() => {
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const totalDuration = audioRef.current.duration;
            const progressLevel = totalDuration
                ? (currentTime / totalDuration) * 100
                : 0;

            dispatch(
                updateProgress({
                    currentTime,
                    totalDuration,
                    progressLevel: Math.min(100, progressLevel),
                })
            );
        }
    }, [dispatch]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener(
                'loadedmetadata',
                updateAudioProgress
            );
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener(
                    'loadedmetadata',
                    updateAudioProgress
                );
            }
        };
    }, [audioRef, dispatch, updateAudioProgress]);

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

    const changeLoopMode = useCallback(
        (mode: 'off' | 'track' | 'playlist') => {
            dispatch(setLoopMode(mode));
        },
        [dispatch]
    );

    // Handle time updates and dispatch to Redux
    const handleTimeUpdate = useCallback(() => {
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const totalDuration = audioRef.current.duration;
            const progressLevel = totalDuration
                ? (currentTime / totalDuration) * 100
                : 0;

            dispatch(
                updateProgress({
                    currentTime,
                    totalDuration,
                    progressLevel: Math.min(100, progressLevel),
                })
            );
        }
    }, [dispatch]);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
            audioElement.load();
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener(
                    'timeupdate',
                    handleTimeUpdate
                );
                console.log('Event listener removed for timeupdate.');
            }
        };
    }, [handleTimeUpdate]);

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
        changeLoopMode,
        loopMode,
        isShuffling,
        progressDetails,
    };
};
