import { useEffect } from "react";

interface NewsWidgetProps {
    widget_data?: { interests: string };
}

const NewsWidget = ({ widget_data }: NewsWidgetProps) => {
    useEffect(() => {}, []);

    return (
        <div>
            <h3 className="text-lg font-bold">
                Latest {widget_data?.interests} News
            </h3>
        </div>
    );
};

export default NewsWidget;
