import audioPLayerReducer from '@/features/audio-player-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        audioPlayer: audioPLayerReducer,
    },
});

export default store;
