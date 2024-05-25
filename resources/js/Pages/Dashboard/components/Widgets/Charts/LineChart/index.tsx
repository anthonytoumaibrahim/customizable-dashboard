interface LineChartProps {
    className?: string;
    color1?: string;
    color2: string;
    name?: string;
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const LineChart = ({
    className = "",
    name = "Line Chart",
    color1 = "#6366f1",
    color2 = "#1f2937",
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

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => Math.random() * 1000),
                backgroundColor: color1,
                borderColor: color1,
            },
            {
                label: "Dataset 2",
                data: labels.map(() => Math.random() * 1000),
                backgroundColor: color2,
                borderColor: color2,
            },
        ],
    };

    return <Line options={options} data={data} className={`${className}`} />;
};

export default LineChart;
