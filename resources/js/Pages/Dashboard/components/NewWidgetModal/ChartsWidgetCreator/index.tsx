import { useState } from "react";
import { charts } from "./charts";
import ChartWidgetEditor from "./Editor";

const ChartsWidgetCreator = () => {
    const [selectedChart, setSelectedChart] = useState<number | null>(null);
    const selected = charts.filter((chart) => chart.id === selectedChart);

    return selectedChart ? (
        <ChartWidgetEditor
            name={selected?.[0]?.name}
            component={selected?.[0]?.component}
        />
    ) : (
        <div className="grid grid-cols-2 gap-4">
            {charts.map((chart) => {
                const { id, name, image } = chart;
                return (
                    <div
                        key={id}
                        className="rounded border dark:border-gray-900 shadow-sm overflow-hidden cursor-pointer group hover:border-indigo-500 transition-colors duration-150 flex flex-col justify-between"
                        onClick={() => setSelectedChart(id)}
                    >
                        <div className="p-4 dark:bg-gray-900 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/30 transition-colors duration-150 h-full">
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
