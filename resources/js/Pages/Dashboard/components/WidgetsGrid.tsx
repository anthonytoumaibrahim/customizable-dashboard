import { useEffect, useState } from "react";
import type { WidgetsType } from "..";
import { widgets as widgetsData } from "./Widgets/widgets";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaTrash } from "react-icons/fa6";

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

    const handleDelete = (id: number) => {
        dispatch({
            type: "widgets/removeWidget",
            payload: id,
        });
    };

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) {
            return;
        }

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
                        className="grid grid-cols-3 gap-6 mt-6"
                        data-no-dnd="true"
                    >
                        {widgetsSelector.map((data) => {
                            const {
                                id,
                                name,
                                type,
                                widget_id,
                                color1,
                                color2,
                                size,
                            } = data;
                            const widget = widgetsData?.[type].filter(
                                (widget) => widget.id === widget_id
                            )?.[0];
                            const WidgetComponent = widget.component;

                            return (
                                <SortableItem
                                    key={id}
                                    id={id}
                                    wrapperStyle={() => {
                                        if (size === "large") {
                                            return {
                                                gridColumnStart: "span 2",
                                            };
                                        }

                                        return {};
                                    }}
                                >
                                    <div className="h-80 p-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 grid place-content-center shadow hover:shadow-lg relative group">
                                        <button
                                            className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 p-2 rounded border shadow-sm bg-red-500 hover:bg-red-400 text-white"
                                            onClick={() => handleDelete(id)}
                                        >
                                            <FaTrash />
                                        </button>
                                        <WidgetComponent
                                            name={name}
                                            color1={color1}
                                            color2={color2}
                                        />
                                    </div>
                                </SortableItem>
                            );
                        })}
                    </div>
                </SortableContext>
            </DndContext>
        )
    );
};

export default WidgetsGrid;
