import Modal from "@/Components/Modal";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { tabs } from "../../data";

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
                    <Tab.List className="flex flex-col w-1/3 bg-gray-100">
                        {tabs.map((tab, tabIndex) => {
                            const { name, icon: TabIcon } = tab;
                            return (
                                <Tab as={Fragment} key={tabIndex}>
                                    {({ selected }) => (
                                        <button
                                            className={`flex items-center justify-center gap-2 p-4 ${
                                                selected
                                                    ? "bg-indigo-500 text-white"
                                                    : "hover:bg-indigo-200 transition-colors duration-150"
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
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </Modal>
    );
};

export default NewWidgetModal;
