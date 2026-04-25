import { useState, useRef } from 'react';
import { useAppContext } from '../../store/AppContext';
import { useClickOutside } from '../../hooks';
import type { Category } from '../../types';

export const Filter = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const { categoryFilter, setCategoryFilter } = useAppContext();
    const dropdownRef = useRef<HTMLDivElement>(null);

   
    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (category: Category | '') => {
        setCategoryFilter(category);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                <span>Filtro {categoryFilter ? `(${categoryFilter === 'evento' ? 'Eventos' : 'Académico'})` : ''}</span>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <button
                            onClick={() => handleSelect('')}
                            className={`block w-full text-left px-4 py-2 text-sm ${categoryFilter === ''
                                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            role="menuitem"
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => handleSelect('evento')}
                            className={`block w-full text-left px-4 py-2 text-sm ${categoryFilter === 'evento'
                                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            role="menuitem"
                        >
                            Eventos
                        </button>
                        <button
                            onClick={() => handleSelect('academico')}
                            className={`block w-full text-left px-4 py-2 text-sm ${categoryFilter === 'academico'
                                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            role="menuitem"
                        >
                            Académico
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
