import { useState, useRef } from 'react';
import { useAppContext } from '../../store';
import type { BaseItem, LeadItem } from '../../types';
import { useClickOutside } from '../../hooks';

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    item: BaseItem;
}

export const LeadForm = ({ isOpen, onClose, item }: LeadFormProps): React.ReactElement | null => {
    const { addLead } = useAppContext();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, onClose);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.toLowerCase().endsWith('@javeriana.edu.co')) {
            setError('El correo debe ser institucional (@javeriana.edu.co)');
            return;
        }

        const newLead: LeadItem = {
            id: Date.now(),
            nombre,
            email: email as `${string}@javeriana.edu.co`,
            leadInterest: [item],
        };

        addLead(newLead);
        // Limpiar formulario
        setNombre('');
        setEmail('');
        setError('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Registrar Lead</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="px-4 py-4">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-4">
                            Interesado en: <span className="font-semibold text-gray-800">{item.nombre}</span>
                        </p>
                        
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                        <input
                            type="text"
                            id="nombre"
                            required
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Ej. Juan Pérez"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Institucional</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) setError('');
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="usuario@javeriana.edu.co"
                        />
                        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};