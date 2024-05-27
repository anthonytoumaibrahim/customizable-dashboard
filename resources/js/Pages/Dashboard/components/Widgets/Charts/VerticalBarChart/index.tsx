interface VerticalBarChartProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
    dataset_url?: string;
    widget_data?: {
        label1?: string;
        label2?: string;
    };
}

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { widgetChartsData } from "../../widgets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChart = ({
    className = "",
    name = "Vertical Bar Chart",
    color1 = "#6366f1",
    color2 = "#ff3f8c",
    dataset_url,
    widget_data,
}: VerticalBarChartProps) => {
    const labels = widgetChartsData.labels;
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

    const data = {
        labels,
        datasets: [
            {
                label: widget_data?.label1 ?? "Dataset 1",
                data: widgetChartsData.data1,
                backgroundColor: color1 !== "" ? color1 : "#6366f1",
            },
            {
                label: widget_data?.label2 ?? "Dataset 2",
                data: widgetChartsData.data2,
                backgroundColor: color2 !== "" ? color2 : "#ff3f8c",
            },
        ],
    };

    return <Bar options={options} data={data} className={`${className}`} />;
};

export default VerticalBarChart;
