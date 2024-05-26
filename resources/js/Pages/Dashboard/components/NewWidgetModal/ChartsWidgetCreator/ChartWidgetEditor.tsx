import { useState } from "react";
import TextInput from "@/Components/TextInput";
import Color from "../components/Color";
import { widgetColors } from "../../Widgets/widgets";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";

interface ChartWidgetEditorProps {
    name: string;
    component: any;
    id: number;
    handleGoBack: () => void;
}

const ChartWidgetEditor = ({
    name,
    component: ChartComponent,
    id,
    handleGoBack,
}: ChartWidgetEditorProps) => {
    const [widgetName, setWidgetName] = useState("");
    const [colors, setColors] = useState({
        color1: "",
        color2: "",
    });

    // const widgetOrderSelector = useAppSelector((state) => {
    //     const widgets = state.widgetsSlice.widgets;
    // });

    const addWidget = () => {
        if (widgetName.trim() === "") {
            return toast.error("Please enter a name for this chart.");
        }
        router.post(
            "/add-widget",
            {
                name: widgetName,
                type: "charts",
                widget_id: id,
                color1: colors.color1,
                color2: colors.color2,
            },
            {
                onSuccess: (props) => {
                    console.log(props);
                },
                onError: (errors) => {
                    toast.error("Sorry, something went wrong.");
                },
            }
        );
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
