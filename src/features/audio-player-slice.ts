import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Track {
    title: string;
    thumbnail: string;
    src: string;
}

interface AudioPlayerState {
    trackList: Track[];
    currentTrack: Track | null;
    currentIdx: number;
}

const audioPlayerInitState: AudioPlayerState = {
    trackList: [],
    currentTrack: null,
    currentIdx: 0,
};

const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState: audioPlayerInitState,
    reducers: {
        gotoNextTrack: state => {
            state.currentTrack = state.trackList[++state.currentIdx];
        },
        gotoPreviousTrack: state => {
            state.currentTrack = state.trackList[--state.currentIdx];
        },
    },
});

export const { gotoNextTrack, gotoPreviousTrack } = audioPlayerSlice.actions;

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

    return {
        trackList,
        currentTrack,
        currentIdx,
        playNextTrack,
        playPreviousTrack,
    };
};
