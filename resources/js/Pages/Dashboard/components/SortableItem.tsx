import { useAppDispatch } from "@/redux/hooks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { WidgetsType } from "..";
import { widgets as widgetsData } from "./Widgets/widgets";

// Icons
import { FaTrash } from "react-icons/fa6";
import { MdDragIndicator } from "react-icons/md";
import { router } from "@inertiajs/react";

interface SortableItemProps {
    widget: WidgetsType;
}

const SortableItem = ({ widget }: SortableItemProps) => {
    const dispatch = useAppDispatch();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isOver,
    } = useSortable({ id: widget.id });

    const wrapperStyle =
        widget.size === "large"
            ? {
                  gridColumnStart: "span 2",
              }
            : "";

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        ...wrapperStyle,
    };

    const { id, name, type, widget_id, color1, color2, size } = widget;

    const selectedWidget = widgetsData?.[type].filter(
        (widget) => widget.id === widget_id
    )?.[0];
    const WidgetComponent = selectedWidget.component;

    const handleDelete = (id: number) => {
        dispatch({
            type: "widgets/removeWidget",
            payload: id,
        });
        router.delete("/widget", {
            data: {
                id: widget.id,
            },
        });
    };

    return (
        <div ref={setNodeRef} style={style} className="w-full">
            <div className="h-80 p-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 grid place-content-center shadow hover:shadow-lg relative group">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex items-center gap-1">
                    <button
                        className="p-2 rounded border dark:border-black shadow-sm bg-red-500 hover:bg-red-400 text-white"
                        onClick={() => handleDelete(id)}
                    >
                        <FaTrash />
                    </button>
                    <button
                        {...attributes}
                        {...listeners}
                        className="p-2 rounded border dark:border-black shadow-sm bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <MdDragIndicator />
                    </button>
                </div>
                <div className="handle" data-dnd-handle></div>
                <WidgetComponent name={name} color1={color1} color2={color2} />
            </div>
        </div>
    );
};

export default SortableItem;
