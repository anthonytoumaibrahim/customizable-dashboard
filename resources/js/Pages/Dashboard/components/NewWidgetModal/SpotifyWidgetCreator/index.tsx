import { useState } from "react";
import { useWidgetOrder } from "@/hooks/useWidgetOrder";
import { router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const SpotifyWidgetCreator = () => {
    const widgetOrderSelector = useWidgetOrder();
    const [url, setUrl] = useState("");

    const handleFormSubmit = () => {
        router.post("/add-widget", {
            name: "Spotify Album",
            type: "spotify",
            widget_id: 1,
            order: widgetOrderSelector,
            dataset_url: url,
        });
    };

    return (
        <div>
            <h3 className="text-xl font-bold">Add Spotify Widget</h3>
            <form action="" onSubmit={handleFormSubmit} className="space-y-2">
                <TextInput
                    placeholder="Spotify Album/Song URL"
                    className="w-full"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <PrimaryButton type="submit">Add Spotify Widget</PrimaryButton>
            </form>
        </div>
    );
};

export default SpotifyWidgetCreator;
