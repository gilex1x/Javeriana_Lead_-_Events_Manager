import { useContext, useEffect, useState } from 'react';
import type { BaseItem, Item, LeadItem } from "../../types";
import { LeadForm } from "../LeadForm";
import { useAppContext } from '../../store';

interface CardItemProps {
    item: BaseItem
}

export const CardItem = ({ item }: CardItemProps): React.ReactElement => {

    const { leads } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const chipColor = item.categoria === 'evento' ? ' text-blue-700 bg-blue-100' : ' text-emerald-700 bg-emerald-100';
    const leadsCount = leads.filter((lead: LeadItem) => 
        lead.leadInterest?.some((interestItem: Item) => item.id === interestItem.id)
    ).length;
    return (
        <>
            <div className="flex flex-col h-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-2 flex-wrap">
                            <span className={'px-2 py-1 text-xs font-semibold rounded-full capitalize' + chipColor}>
                                {item.categoria}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-gray-500" title="Leads registrados">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">{leadsCount}</span>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 hover cursor-pointer "
                                title="Registrar Lead"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {item.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                        {item.descripcion}
                    </p>
                </div>
            </div>

            <LeadForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={item}
            />
        </>
    );
};