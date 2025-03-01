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
        initializeWidgets: (
            state,
            action: PayloadAction<Array<WidgetsType>>
        ) => {
            state.widgets = action.payload;
        },
        addWidget: (state, action: PayloadAction<WidgetsType>) => {
            state.widgets.push(action.payload);
        },
        removeWidget: (state, action: PayloadAction<number>) => {
            return {
                widgets: state.widgets.filter(
                    (widget) => widget.id !== action.payload
                ),
            };
        },
    },
});

export const { addWidget, initializeWidgets, removeWidget } =
    widgetsSlice.actions;

export default widgetsSlice.reducer;
