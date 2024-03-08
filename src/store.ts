import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./features/events/eventsSlice";
import metrosReducer from "./features/metros/metrosSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        metros: metrosReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;