import { useEffect } from "react";
import type { WidgetsType } from "..";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";

interface WidgetsGridProps {
    widgets: Array<WidgetsType>;
}

// dnd
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSwappingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const WidgetsGrid = ({ widgets = [] }: WidgetsGridProps) => {
    const widgetsSelector = useAppSelector(
        (state) => state.widgetsSlice.widgets
    );
    const dispatch = useAppDispatch();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        if (active.id !== over.id) {
            const activeIndex = widgetsSelector.findIndex(
                (item) => item.id === active.id
            );
            const overIndex = widgetsSelector.findIndex(
                (item) => item.id === over.id
            );

            const newItems = widgetsSelector.map((item, index) => {
                if (index === activeIndex) {
                    return { ...item, order: widgetsSelector[overIndex].order };
                } else if (index === overIndex) {
                    return {
                        ...item,
                        order: widgetsSelector[activeIndex].order,
                    };
                } else {
                    return item;
                }
            });

            dispatch({
                type: "widgets/initializeWidgets",
                payload: newItems.sort((a, b) => a.order - b.order),
            });

            axios.post("/move-widget", {
                id1: active.id,
                order1: widgetsSelector[overIndex].order,
                id2: over.id,
                order2: widgetsSelector[activeIndex].order,
            });
        }
    }

    useEffect(() => {
        dispatch({
            type: "widgets/initializeWidgets",
            payload: widgets.sort((a, b) => a.order - b.order),
        });
    }, []);

    return (
        widgetsSelector.length > 0 && (
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={widgetsSelector}
                    strategy={rectSwappingStrategy}
                >
                    <div
                        className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                        data-no-dnd="true"
                    >
                        {widgetsSelector.map((data) => (
                            <SortableItem key={data.id} widget={data} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        )
    );
};

export default WidgetsGrid;
