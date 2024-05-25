interface VerticalBarChartProps {
    className?: string;
    color1?: string;
    color2: string;
    name?: string;
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const VerticalBarChart = ({
    className = "",
    name = "Vertical Bar Chart",
    color1 = "#6366f1",
    color2 = "#1f2937",
}: VerticalBarChartProps) => {
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
            },
            {
                label: "Dataset 2",
                data: labels.map(() => Math.random() * 1000),
                backgroundColor: color2,
            },
        ],
    };

    return <Bar options={options} data={data} className={`${className}`} />;
};

export default VerticalBarChart;
