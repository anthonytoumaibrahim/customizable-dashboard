import { useState } from "react";
import VerticalBarChart from "../../Widgets/Charts/VerticalBarChart";

const ChartsWidgetCreator = () => {
    const [selectedChart, setSelectedChart] = useState<boolean | null>(null);

    return selectedChart ? (
        "selected!"
    ) : (
        <div className="grid grid-cols-2 gap-4">
            <div></div>
        </div>
    );
};

export default ChartsWidgetCreator;
