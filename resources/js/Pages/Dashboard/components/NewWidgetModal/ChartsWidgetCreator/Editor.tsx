import { useState } from "react";
import TextInput from "@/Components/TextInput";
import Color from "../components/Color";
import { widgetColors } from "../../Widgets/widgets";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";

interface ChartWidgetEditorProps {
    name: string;
    component: any;
    id: number;
}

const ChartWidgetEditor = ({
    name,
    component: ChartComponent,
    id,
}: ChartWidgetEditorProps) => {
    const [widgetName, setWidgetName] = useState("");
    const [colors, setColors] = useState({
        color1: "",
        color2: "",
    });

    const addWidget = () => {
        router.post("/add-widget", {
            name: widgetName,
            widget_id: id,
            color1: colors.color1,
            color2: colors.color2,
        });
    };

    return (
        <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <ChartComponent
                name={widgetName}
                color1={colors.color1}
                color2={colors.color2}
            />

            <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2 flex-wrap">
                    {widgetColors.map((colArray) => {
                        const [col1, col2] = colArray;
                        return (
                            <Color
                                key={col1}
                                color1={col1}
                                color2={col2}
                                handleColorUpdate={() =>
                                    setColors({
                                        color1: col1,
                                        color2: col2,
                                    })
                                }
                            />
                        );
                    })}
                </div>

                <TextInput
                    placeholder="Chart Name"
                    className="w-full"
                    value={widgetName}
                    onChange={(e) => setWidgetName(e.target.value)}
                />

                <div className="flex items-center justify-between">
                    <SecondaryButton>Back</SecondaryButton>
                    <PrimaryButton onClick={() => addWidget()}>
                        Add Widget
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ChartWidgetEditor;
