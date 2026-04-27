import { useAppContext } from '../../store';

export const Loader = (): React.ReactElement | null => {
    const { loading } = useAppContext();

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm transition-opacity">
            <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 transform transition-all">
                <svg 
                    className="animate-spin h-10 w-10 text-indigo-600" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                    ></circle>
                    <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                <p className="text-gray-700 font-semibold animate-pulse">
                    Cargando información...
                </p>
            </div>
        </div>
    );
};