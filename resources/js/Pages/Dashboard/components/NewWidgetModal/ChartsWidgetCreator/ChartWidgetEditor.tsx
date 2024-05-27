import { useState } from "react";
import { widgetColors } from "../../Widgets/widgets";
import { WidgetsType } from "@/Pages/Dashboard";
import { HandleAddWidgetParams } from "..";
import axios from "axios";

// Components
import TextInput from "@/Components/TextInput";
import Color from "../components/Color";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import toast from "react-hot-toast";
import Checkbox from "@/Components/Checkbox";

interface ChartWidgetEditorProps {
    name: string;
    component: any;
    id: number;
    handleGoBack: () => void;
    handleAddWidget: (params: HandleAddWidgetParams) => void;
}

const ChartWidgetEditor = ({
    name,
    component: ChartComponent,
    id,
    handleGoBack,
    handleAddWidget,
}: ChartWidgetEditorProps) => {
    const [widgetName, setWidgetName] = useState("");
    const [colors, setColors] = useState({
        color1: "",
        color2: "",
    });
    const [labels, setLabels] = useState({
        label1: "Dataset 1",
        label2: "Dataset 2",
    });
    const [large, setLarge] = useState(false);

    const addWidget = () => {
        if (widgetName.trim() === "") {
            return toast.error("Please enter a name for this chart.");
        }
        handleAddWidget({
            id: id,
            name: widgetName,
            large: large,
            colors: colors,
            widget_data: JSON.stringify({
                label1: labels.label1,
                label2: labels.label2,
            }),
        });
    };

    return (
        <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <ChartComponent
                name={widgetName}
                color1={colors.color1}
                color2={colors.color2}
                widget_data={labels}
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

                <div className="grid grid-cols-2 gap-2">
                    <TextInput
                        placeholder="Label 1"
                        className="w-full"
                        value={labels.label1}
                        onChange={(e) =>
                            setLabels({
                                ...labels,
                                label1: e.target.value,
                            })
                        }
                    />
                    <TextInput
                        placeholder="Label 2"
                        className="w-full"
                        value={labels.label2}
                        onChange={(e) =>
                            setLabels({
                                ...labels,
                                label2: e.target.value,
                            })
                        }
                    />
                </div>

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

                <div className="flex items-center justify-between">
                    <SecondaryButton onClick={() => handleGoBack()}>
                        Back
                    </SecondaryButton>
                    <PrimaryButton onClick={() => addWidget()}>
                        Add Widget
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ChartWidgetEditor;
