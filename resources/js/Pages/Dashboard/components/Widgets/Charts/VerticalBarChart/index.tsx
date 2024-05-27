interface VerticalBarChartProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
    dataset_url?: string;
    widget_data?: object;
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
    color2 = "#1f2937",
    dataset_url,
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
                label: "Dataset 1",
                data: widgetChartsData.data1,
                backgroundColor: color1,
            },
            {
                label: "Dataset 2",
                data: widgetChartsData.data2,
                backgroundColor: color2,
            },
        ],
    };

    return <Bar options={options} data={data} className={`${className}`} />;
};

export default VerticalBarChart;
