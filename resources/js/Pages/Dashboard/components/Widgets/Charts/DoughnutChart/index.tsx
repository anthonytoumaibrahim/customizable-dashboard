interface DoughnutChartProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
}

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { hexToRgba } from "@/bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
    className = "",
    name = "Doughnut Chart",
    color1 = "#6366f1",
    color2 = "#1f2937",
}: DoughnutChartProps) => {
    const rgbaColor1 = hexToRgba(color1, 0.2);
    const rgbaColor2 = hexToRgba(color2, 0.2);

    const data = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    rgbaColor1,
                    rgbaColor2,
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    color1,
                    color2,
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Doughnut data={data} />;
};

export default DoughnutChart;
