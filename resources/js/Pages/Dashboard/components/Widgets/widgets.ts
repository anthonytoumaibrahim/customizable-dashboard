// Charts
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import VerticalBarChart from "./Charts/VerticalBarChart";

export const widgets = {
    charts: [
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
            component: DoughnutChart,
        },
        {
            id: 4,
            name: "Line Chart",
            image: "/assets/widgets/line.svg",
            component: LineChart,
        },
    ],
};

export const widgetColors = [
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

export const widgetChartsData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data1: [
        180.23642615348635, 952.6612245220409, 221.36293603615263,
        914.2133152402109, 832.0409095069075, 570.4613537538892,
        631.0396075760935,
    ],
    data2: [
        971.1178587728575, 868.2828554811914, 197.781095509046,
        957.9186559938036, 296.6212688276992, 793.4163165200283,
        143.47358247486096,
    ],
};
