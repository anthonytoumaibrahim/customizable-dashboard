import { useState } from "react";
import { charts } from "./charts";

const ChartsWidgetCreator = () => {
    const [selectedChart, setSelectedChart] = useState<boolean | null>(null);

    return selectedChart ? (
        "selected!"
    ) : (
        <div className="grid grid-cols-2 gap-4">
            {charts.map((chart) => {
                const { id, name, image } = chart;
                return (
                    <div
                        key={id}
                        className="rounded border dark:border-gray-900 shadow-sm overflow-hidden cursor-pointer group hover:border-indigo-500 transition-colors duration-150"
                    >
                        <div className="p-4 dark:bg-gray-900 group-hover:bg-indigo-100 transition-colors duration-150">
                            <img
                                src={image}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-950 text-center group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-150">
                            <h4 className="text-lg font-bold">{name}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChartsWidgetCreator;
