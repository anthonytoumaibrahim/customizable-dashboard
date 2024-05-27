import { FormEvent, useState } from "react";
import { HandleAddWidgetParams } from "..";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";

const SpotifyWidgetCreator = ({
    handleAddWidget,
}: {
    handleAddWidget: (params: HandleAddWidgetParams) => void;
}) => {
    const [url, setUrl] = useState("");
    const [large, setLarge] = useState(false);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        handleAddWidget({
            id: 1,
            type: "spotify",
            name: "Spotify Widget",
            large: large,
            dataset_url: url,
        });
    };

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold">Add Spotify Widget</h3>
            <form action="" onSubmit={handleFormSubmit} className="space-y-2">
                <TextInput
                    placeholder="Spotify Album/Song URL"
                    className="w-full"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={large}
                        onChange={(e) => setLarge(e.target.checked)}
                    />
                    <span className="ms-2 text-gray-600 dark:text-gray-400">
                        Make this widget large
                    </span>
                </label>
                <PrimaryButton type="submit">Add Spotify Widget</PrimaryButton>
            </form>
        </div>
    );
};

export default SpotifyWidgetCreator;
