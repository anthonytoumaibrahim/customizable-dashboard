import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { useWidgetOrder } from "@/hooks/useWidgetOrder";
import { router } from "@inertiajs/react";
import { useState } from "react";

const StockWidgetCreator = () => {
    const widgetOrderSelector = useWidgetOrder();
    const [large, setLarge] = useState(false);

    const addStockWidget = () => {
        router.post("/add-widget", {
            name: "Stock Market Widget",
            type: "stock",
            widget_id: 1,
            order: widgetOrderSelector,
            size: large ? "large" : "small",
        });
    };

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold">Add Stock Market Widget</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={large}
                        onChange={(e) => setLarge(e.target.checked)}
                    />
                    <span className="ms-2 text-gray-600 dark:text-gray-400">
                        Make this widget large
                    </span>
                </label>
                <PrimaryButton onClick={() => addStockWidget()}>
                    Add Stock Market Widget
                </PrimaryButton>
            </div>
        </div>
    );
};

export default StockWidgetCreator;
