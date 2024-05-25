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
                <Tab.List className="flex flex-col">
                    {tabs.map((tab, tabIndex) => (
                        <Tab as={Fragment} key={tabIndex}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected
                                            ? "bg-blue-500 text-white"
                                            : "bg-white text-black"
                                    }
                                >
                                    {tab.name}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Modal>
    );
};

export default NewWidgetModal;
