import { useAppSelector } from "@/redux/hooks";

export const useWidgetOrder = () => {
    const widgetOrderSelector = useAppSelector((state) => {
        const widgets = state.widgetsSlice.widgets;
        if (widgets.length === 0) return 1;
        const lastWidget = widgets[widgets.length - 1];
        return lastWidget.order + 1;
    });

    return widgetOrderSelector;
};
