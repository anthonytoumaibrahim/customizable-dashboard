import { useState } from "react";
import type { WidgetsType } from "..";
import { widgets as widgetsData } from "./Widgets/widgets";

interface WidgetsGridProps {
    widgets: WidgetsType;
}

// dnd
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const WidgetsGrid = ({ widgets = [] }: WidgetsGridProps) => {
    const [items, setItems] = useState(widgets);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
                strategy={horizontalListSortingStrategy}
            >
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
                                <div className="h-80 p-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 grid place-content-center">
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
