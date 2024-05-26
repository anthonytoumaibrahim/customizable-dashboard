import Modal from "@/Components/Modal";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { tabs } from "../../data";
import WeatherWidgetCreator from "./WeatherWidgetCreator";
import ChartsWidgetCreator from "./ChartsWidgetCreator";
import SpotifyWidgetCreator from "./SpotifyWidgetCreator";

interface NewWidgetModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

const NewWidgetModal = ({
    isOpen = false,
    handleClose,
}: NewWidgetModalProps) => {
    return (
        <Modal show={isOpen} onClose={handleClose} maxWidth="2xl">
            <Tab.Group vertical>
                <div className="flex max-md:flex-col gap-4 md:min-h-[320px]">
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
                            <ChartsWidgetCreator />
                        </Tab.Panel>
                        <Tab.Panel>
                            <SpotifyWidgetCreator />
                        </Tab.Panel>
                        <Tab.Panel>
                            <WeatherWidgetCreator />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </Modal>
    );
};

export default NewWidgetModal;
