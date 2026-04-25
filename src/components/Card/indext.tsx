import type { BaseItem } from "../../types";

interface CardItemProps {
    item: BaseItem
}

export const CardItem = ({ item }: CardItemProps): React.ReactElement => {
    const chipColor = item.categoria === 'evento' ? ' text-blue-700 bg-blue-100' : ' text-emerald-700 bg-emerald-100';
    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3 flex-wrap">
                    <span className={'px-2 py-1 text-xs font-semibold rounded-full capitalize' + chipColor}>
                        {item.categoria}
                    </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {item.nombre}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                    {item.descripcion}
                </p>
            </div>
        </div>
    );

};