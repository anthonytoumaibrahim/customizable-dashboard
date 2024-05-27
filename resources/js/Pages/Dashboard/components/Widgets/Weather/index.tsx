import { useEffect, useState } from "react";
import LoadError from "./LoadError";
import axios from "axios";

interface WeatherWidgetProps {
    className?: string;
    color1?: string;
    color2?: string;
    name?: string;
    dataset_url?: string;
    widget_data?: {
        cityName?: string;
        long?: string | number;
        lat?: string | number;
    };
}

type OpenWeatherDataType = {
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
};

const WeatherWidget = ({
    className = "",
    color1,
    color2,
    name,
    widget_data,
}: WeatherWidgetProps) => {
    const [weatherData, setWeatherData] = useState<OpenWeatherDataType>();
    const [loadError, setLoadError] = useState(false);

    const getWeatherBackground = () => {
        const weatherId = weatherData?.weather?.[0]?.id;
        if (weatherId === 800) {
            return "from-sky-700 to-sky-500";
        }

        const weatherIdRange = Math.floor((weatherId ?? 200) / 100);
        switch (weatherIdRange) {
            case 2:
                return "from-gray-800 to-gray-700";
            case 3:
                return "from-gray-700 to-gray-600";
            case 5:
                return "from-sky-950 to-sky-800";
            case 6:
                return "from-gray-200 to-white text-black";
            case 7:
                return "from-gray-400 to-gray-300";
            case 8:
                return "from-slate-600 to-slate-500";
            default:
                return "from-sky-700 to-sky-500";
        }
    };

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${widget_data?.lat}&lon=${widget_data?.long}&appid=99b33992cc4c8b06895afae7be509ff0&units=metric`,
                {
                    withCredentials: false,
                }
            )
            .then((response) => {
                const data: OpenWeatherDataType = response.data;
                setWeatherData(data);
            })
            .catch((error) => setLoadError(true));
    }, []);

    return loadError ? (
        <LoadError />
    ) : (
        <div
            className={`w-full h-full rounded-md bg-gradient-to-t text-white p-6 flex flex-col items-center ${getWeatherBackground()}`}
        >
            <h3 className="text-xl font-bold text-center">
                {widget_data?.cityName}
            </h3>
            <img
                src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
            />
            <div className="text-center">
                <h2 className="text-2xl font-bold">
                    {Math.round(weatherData?.main?.temp ?? 1)}°C
                </h2>
                <p className="capitalize">
                    {weatherData?.weather?.[0]?.description}
                </p>
            </div>

            <div className="flex justify-between w-full text-sm mt-2">
                <div className="text-center">
                    <p>Feels Like</p>
                    <p className="font-bold">
                        {Math.round(weatherData?.main?.feels_like ?? 1)}°C
                    </p>
                </div>
                <div className="text-center">
                    <p>Humidity</p>
                    <p className="font-bold">{weatherData?.main?.humidity}%</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
