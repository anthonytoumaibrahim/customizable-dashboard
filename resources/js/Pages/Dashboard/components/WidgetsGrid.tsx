import { useState } from "react";
import type { WidgetsType } from "..";
import { widgets } from "./Widgets/widgets";

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
                <div className="grid grid-cols-3">
                    {items.map((widgetData) => {
                        const { id, type, widget_id, color1, color2 } =
                            widgetData;
                        const widget = widgets?.type?.filter(
                            (widget) => widget.id === widget_id
                        );
                        return (
                            <SortableItem key={id} id={id}>
                                {widget?.[0]?.component}
                            </SortableItem>
                        );
                    })}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default WidgetsGrid;
