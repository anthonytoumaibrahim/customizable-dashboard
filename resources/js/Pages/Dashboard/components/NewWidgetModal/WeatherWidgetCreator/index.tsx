import { HandleAddWidgetParams } from "..";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

type OpenWeatherAPIResponseType = Array<{
    name: string;
    lat: number;
    lon: number;
}>;

const WeatherWidgetCreator = ({
    handleAddWidget,
}: {
    handleAddWidget: (params: HandleAddWidgetParams) => void;
}) => {
    const [cityName, setCityName] = useState("");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=99b33992cc4c8b06895afae7be509ff0`
            );
            const data: OpenWeatherAPIResponseType = await response.json();
            if (data?.length === 0) {
                return toast.error(
                    "Sorry, couldn't find a city with this name."
                );
            }
            // City found
            const { name, lat, lon } = data[0];
            handleAddWidget({
                id: 1,
                type: "weather",
                name: `Weather in ${name}`,
                widget_data: JSON.stringify({
                    cityName: name,
                    lat: lat,
                    long: lon,
                }),
            });
        } catch (error) {
            toast.error(
                "Sorry, something went wrong and we couldn't make a request to the API."
            );
        }
    };

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold">Add Weather Widget</h3>
            <form action="" onSubmit={handleFormSubmit} className="space-y-2">
                <TextInput
                    placeholder="City Name, e.g: Beirut, Lebanon"
                    className="w-full"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <PrimaryButton type="submit">Add Weather Widget</PrimaryButton>
            </form>
        </div>
    );
};

export default WeatherWidgetCreator;
