import { FaCircleExclamation } from "react-icons/fa6";

const LoadError = () => {
    return (
        <div className="text-center items-center">
            <FaCircleExclamation className="text-red-500 mx-auto" size={32} />
            <h4 className="text-red-500 font-bold text-lg">
                Something went wrong!
            </h4>
            <p>Sorry, the Weather Widget couldn't be loaded.</p>
        </div>
    );
};

export default LoadError;
