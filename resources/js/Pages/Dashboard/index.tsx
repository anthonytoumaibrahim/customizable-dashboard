import { useState } from "react";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "@/Components/Modal";
import NewWidgetModal from "./components/NewWidgetModal";

export default function Dashboard({ auth }: PageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 text-gray-900 dark:text-gray-100">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl">My Widgets</h3>
                            <PrimaryButton onClick={() => setIsOpen(true)}>
                                <FaRegSquarePlus size={18} className="mr-2" />
                                Add New
                            </PrimaryButton>
                            <NewWidgetModal
                                isOpen={isOpen}
                                handleClose={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
