import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WidgetsType } from "@/Pages/Dashboard";

interface WidgetsState {
    widgets: Array<WidgetsType>;
}

const initialState: WidgetsState = {
    widgets: [],
};

export const widgetsSlice = createSlice({
    name: "widgets",
    initialState,
    reducers: {
        addWidget: (state, action: PayloadAction<WidgetsType>) => {
            state.widgets.push(action.payload);
        },
    },
});

export const { addWidget } = widgetsSlice.actions;

export default widgetsSlice.reducer;
