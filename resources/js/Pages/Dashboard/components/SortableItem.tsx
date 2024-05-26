import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
    id: number;
    children: React.ReactNode;
    wrapperStyle?: () => React.CSSProperties;
}

const SortableItem = ({ id, children, wrapperStyle }: SortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        ...(wrapperStyle ? wrapperStyle() : {}),
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

export default SortableItem;
