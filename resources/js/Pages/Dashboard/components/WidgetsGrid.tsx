import { useState } from "react";
import type { WidgetsType } from "..";
import { widgets as widgetsData } from "./Widgets/widgets";

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
    const [items, setItems] = useState(
        widgets.sort((a, b) => a.order - b.order)
    );
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) {
            return;
        }

        if (active.id !== over.id) {
            setItems((items) => {
                const activeIndex = items.findIndex(
                    (item) => item.id === active.id
                );
                const overIndex = items.findIndex(
                    (item) => item.id === over.id
                );

                const newItems = [...items];
                const tempOrder = newItems[activeIndex].order;
                newItems[activeIndex].order = newItems[overIndex].order;
                newItems[overIndex].order = tempOrder;

                return newItems.sort((a, b) => a.order - b.order);
            });
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items} strategy={rectSwappingStrategy}>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {items.map((data) => {
                        const { id, name, type, widget_id, color1, color2 } =
                            data;
                        const widget = widgetsData?.[type].filter(
                            (widget) => widget.id === widget_id
                        )?.[0];
                        const WidgetComponent = widget.component;

                        return (
                            <SortableItem key={id} id={id}>
                                <div className="h-80 p-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 grid place-content-center shadow hover:shadow-lg">
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
    );
};

export default WidgetsGrid;
