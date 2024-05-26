import { configureStore } from "@reduxjs/toolkit";
import { widgetsSlice } from "./Widgets";

export const store = configureStore({
    reducer: {
        widgetsSlice: widgetsSlice.reducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
