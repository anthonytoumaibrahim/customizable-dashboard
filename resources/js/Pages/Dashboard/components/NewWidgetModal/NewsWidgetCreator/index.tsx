import { FormEvent, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { HandleAddWidgetParams } from "..";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";

const NewsWidgetCreator = ({
    handleAddWidget,
}: {
    handleAddWidget: (params: HandleAddWidgetParams) => void;
}) => {
    const [interests, setInterests] = useState("");
    const [large, setLarge] = useState(false);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleAddWidget({
            id: 1,
            type: "news",
            name: "News Widget",
            large: large,
            widget_data: JSON.stringify({
                interests: interests,
            }),
        });
    };

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold">Add News Widget</h3>
            <form action="" onSubmit={handleFormSubmit} className="space-y-2">
                <TextInput
                    placeholder="News you're interested in, e.g: Business"
                    className="w-full"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
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
                <PrimaryButton type="submit">Add News Widget</PrimaryButton>
            </form>
        </div>
    );
};

export default NewsWidgetCreator;
