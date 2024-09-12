import { createSlice } from '@reduxjs/toolkit';

const audioPlayerInitState = {
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
