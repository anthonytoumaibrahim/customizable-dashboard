import axios from "axios";
import toast from "react-hot-toast";
import { useWidgetOrder } from "@/hooks/useWidgetOrder";
import { useAppDispatch } from "@/redux/hooks";
import { WidgetsType } from "../..";
import Modal from "@/Components/Modal";
import { Tab } from "@headlessui/react";
import { tabs } from "../../data";
import { Fragment } from "react";

// Components
import WeatherWidgetCreator from "./WeatherWidgetCreator";
import ChartsWidgetCreator from "./ChartsWidgetCreator";
import SpotifyWidgetCreator from "./SpotifyWidgetCreator";
import StockWidgetCreator from "./StockWidgetCreator";

interface NewWidgetModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

export interface HandleAddWidgetParams {
    name: string;
    type: string;
    id: number;
    large?: boolean;
    colors?: { color1: string; color2: string };
    widget_data?: string;
    dataset_url?: string;
}

const NewWidgetModal = ({
    isOpen = false,
    handleClose,
}: NewWidgetModalProps) => {
    const dispatch = useAppDispatch();
    const widgetOrderSelector = useWidgetOrder();

    const handleAddWidget = ({
        name,
        id,
        large = false,
        colors,
        widget_data,
        type,
        dataset_url,
    }: HandleAddWidgetParams) => {
        axios
            .post("/add-widget", {
                name: name,
                type: type,
                widget_id: id,
                order: widgetOrderSelector,
                size: large ? "large" : "small",
                color1: colors?.color1 ?? "",
                color2: colors?.color2 ?? "",
                widget_data: widget_data,
                dataset_url: dataset_url,
            })
            .then((res) => {
                const data: { success: boolean; widget: WidgetsType } =
                    res.data;
                dispatch({
                    type: "widgets/addWidget",
                    payload: data.widget,
                });
                handleClose();
            })
            .catch((err) =>
                toast.error("Sorry, this widget couldn't be added.")
            );
    };

    return (
        <Modal show={isOpen} onClose={handleClose} maxWidth="2xl">
            <Tab.Group vertical>
                <div className="flex max-md:flex-col md:gap-4 md:min-h-[320px]">
                    <Tab.List className="flex md:flex-col w-full md:w-max bg-gray-100 dark:bg-gray-950 max-md:overflow-auto">
                        {tabs.map((tab, tabIndex) => {
                            const { name, icon: TabIcon } = tab;
                            return (
                                <Tab as={Fragment} key={tabIndex}>
                                    {({ selected }) => (
                                        <button
                                            className={`flex items-center gap-2 p-4 md:py-4 md:px-10 ${
                                                selected
                                                    ? "bg-indigo-500 text-white"
                                                    : "hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150"
                                            }`}
                                        >
                                            <TabIcon
                                                size={24}
                                                className="shrink-0"
                                            />
                                            {tab.name}
                                        </button>
                                    )}
                                </Tab>
                            );
                        })}
                    </Tab.List>
                    <Tab.Panels className="p-4 w-full">
                        <Tab.Panel>
                            <ChartsWidgetCreator
                                handleAddWidget={handleAddWidget}
                            />
                        </Tab.Panel>
                        <Tab.Panel>
                            <SpotifyWidgetCreator
                                handleAddWidget={handleAddWidget}
                            />
                        </Tab.Panel>
                        <Tab.Panel>
                            <WeatherWidgetCreator
                                handleAddWidget={handleAddWidget}
                            />
                        </Tab.Panel>
                        <Tab.Panel>
                            <StockWidgetCreator
                                handleAddWidget={handleAddWidget}
                            />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </Modal>
    );
};

export default NewWidgetModal;
