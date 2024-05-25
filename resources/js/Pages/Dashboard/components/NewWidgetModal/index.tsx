import Modal from "@/Components/Modal";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { tabs } from "../../data";
import WeatherWidgetCreator from "./Weather";
import ChartsWidgetCreator from "./ChartsWidgetCreator";

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
                <div className="flex gap-4 min-h-[320px]">
                    <Tab.List className="flex flex-col w-max bg-gray-100 dark:bg-gray-950">
                        {tabs.map((tab, tabIndex) => {
                            const { name, icon: TabIcon } = tab;
                            return (
                                <Tab as={Fragment} key={tabIndex}>
                                    {({ selected }) => (
                                        <button
                                            className={`flex items-center gap-2 py-4 px-10 ${
                                                selected
                                                    ? "bg-indigo-500 text-white"
                                                    : "hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150"
                                            }`}
                                        >
                                            <TabIcon size={24} />
                                            {tab.name}
                                        </button>
                                    )}
                                </Tab>
                            );
                        })}
                    </Tab.List>
                    <Tab.Panels className="p-4">
                        <Tab.Panel>
                            <ChartsWidgetCreator />
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
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
