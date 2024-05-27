import { router } from "@inertiajs/react";
import { useState } from "react";
import { HandleAddWidgetParams } from "..";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";

const StockWidgetCreator = ({
    handleAddWidget,
}: {
    handleAddWidget: (params: HandleAddWidgetParams) => void;
}) => {
    const [large, setLarge] = useState(false);

    const addStockWidget = () => {
        handleAddWidget({
            id: 1,
            type: "stock",
            name: "Stock Market Widget",
            large: large,
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
