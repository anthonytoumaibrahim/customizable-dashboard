import { useEffect, useState } from "react";

interface WeatherWidgetProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
    dataset_url?: string;
    widget_data?: object;
}

const WeatherWidget = ({
    className = "",
    color1,
    color2,
    name,
    widget_data,
}: WeatherWidgetProps) => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {}, []);

    return <div>WeatherWidget</div>;
};

export default WeatherWidget;
