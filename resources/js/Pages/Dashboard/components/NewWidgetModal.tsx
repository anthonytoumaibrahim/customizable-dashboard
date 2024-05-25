import Modal from "@/Components/Modal";

interface NewWidgetModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

const NewWidgetModal = ({
    isOpen = false,
    handleClose,
}: NewWidgetModalProps) => {
    return (
        <Modal show={isOpen} onClose={handleClose}>
            <div className="p-6">
                <h4 className="text-xl">Add New Widget</h4>
            </div>
        </Modal>
    );
};

export default NewWidgetModal;
