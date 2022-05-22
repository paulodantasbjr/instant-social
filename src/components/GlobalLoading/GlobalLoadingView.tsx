import { FaSpinner } from 'react-icons/fa';

export const GlobalLoadingView = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <FaSpinner className="animate-spin h-5 w-5" />
            <p className="sr-only">Loadind...</p>
        </div>
    );
};
