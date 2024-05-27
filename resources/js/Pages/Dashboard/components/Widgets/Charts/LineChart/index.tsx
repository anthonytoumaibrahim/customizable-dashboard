interface LineChartProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
    widget_data?: {
        label1?: string;
        label2?: string;
    };
}

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { widgetChartsData } from "../../widgets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({
    className = "",
    name = "Line Chart",
    color1 = "#6366f1",
    color2 = "#ff3f8c",
    widget_data,
}: LineChartProps) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: name,
            },
        },
    };
    const labels = widgetChartsData.labels;
    const data = {
        labels,
        datasets: [
            {
                label: widget_data?.label1 ?? "Dataset 1",
                data: widgetChartsData.data1,
                backgroundColor: color1 !== "" ? color1 : "#6366f1",
                borderColor: color1 !== "" ? color1 : "#6366f1",
            },
            {
                label: widget_data?.label2 ?? "Dataset 2",
                data: widgetChartsData.data2,
                backgroundColor: color2 !== "" ? color2 : "#ff3f8c",
                borderColor: color2 !== "" ? color2 : "#ff3f8c",
            },
        ],
    };

    return <Line options={options} data={data} className={`${className}`} />;
};

export default LineChart;
