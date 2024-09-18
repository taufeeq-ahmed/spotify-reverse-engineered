import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Track {
    title: string;
    thumbnail?: string;
    src: string;
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
            state.trackList = action.payload;
            state.currentIdx = 0;
            state.currentTrack = state.trackList[0] || null;
            state.isPlaying = false;
        },
        gotoNextTrack: state => {
            state.currentTrack = state.trackList[++state.currentIdx];
        },
        gotoPreviousTrack: state => {
            state.currentTrack = state.trackList[--state.currentIdx];
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

    const trackList = useTypedSelector(state => state.audioPlayer.trackList);

    const currentTrack = useTypedSelector(
        state => state.audioPlayer.currentTrack
    );

    const currentIdx = useTypedSelector(state => state.audioPlayer.currentIdx);

    const isPlaying = useTypedSelector(state => state.audioPlayer.isPlaying);

    const playNextTrack = () => {
        if (currentIdx < trackList.length - 1) {
            dispatch(gotoNextTrack());
        }
    };

    const playPreviousTrack = () => {
        if (currentIdx > 0) {
            dispatch(gotoPreviousTrack());
        }
    };

    const updateTrackList = (tracks: Track[]) => {
        dispatch(setTrackList(tracks));
    };

    const play = () => {
        dispatch(playTrack());
    };

    const pause = () => {
        dispatch(pauseTrack());
    };

    return {
        trackList,
        currentTrack,
        currentIdx,
        playNextTrack,
        playPreviousTrack,
        updateTrackList,
        isPlaying,
        play,
        pause,
    };
};
