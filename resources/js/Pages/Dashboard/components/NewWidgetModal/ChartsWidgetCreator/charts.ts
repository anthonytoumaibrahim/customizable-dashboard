import LineChart from "../../Widgets/Charts/LineChart";
import VerticalBarChart from "../../Widgets/Charts/VerticalBarChart";

export const charts = [
    {
        id: 1,
        name: "Vertical Bar Chart",
        image: "/assets/widgets/vertical.svg",
        component: VerticalBarChart,
    },
    {
        id: 2,
        name: "Pie Chart",
        image: "/assets/widgets/pie.svg",
    },
    {
        id: 3,
        name: "Doughnut Chart",
        image: "/assets/widgets/doughnut.svg",
    },
    {
        id: 4,
        name: "Line Chart",
        image: "/assets/widgets/line.svg",
        component: LineChart,
    },
];

export const chartColors = [
    ["#003d5c", "#0069ab"],
    ["#5c0059", "#6450af"],
    ["#6c3600", "#b23f7b"],
    ["#046c00", "#008fa5"],
    ["#32006c", "#364fb8"],
    ["#6c0000", "#a03586"],
    ["#caaf00", "#ff6498"],
    ["#00ca14", "#00c0e0"],
    ["#00cab6", "#00b7ec"],
    ["#5e00ca", "#2b60ef"],
    ["#ca0051", "#b654be"],
    ["#222222", "#385788"],
    ["#f2ffc6", "#00dbdc"],
];
