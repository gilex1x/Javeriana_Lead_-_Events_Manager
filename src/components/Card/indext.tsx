import type { BaseItem, LeadItem } from "../../types";

interface CardItemProps {
    item: BaseItem | LeadItem;
}

export const CardItem = ({ item }: CardItemProps): React.ReactElement => {
    // Type guard function to differentiate between BaseItem and LeadItem
    const isBaseItem = (item: BaseItem | LeadItem): item is BaseItem => {
        return 'descripcion' in item;
    };

    if (isBaseItem(item)) {
        return (
            <div className="flex flex-col h-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {item.imagen ? (
                    <div className="w-full h-48 sm:h-56">
                        <img 
                            src={item.imagen} 
                            alt={item.nombre} 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ) : (
                    <div className="w-full h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Sin imagen</span>
                    </div>
                )}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3 flex-wrap">
                        <span className="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full capitalize">
                            {item.categoria}
                        </span>
                        {item.subcategory && (
                            <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full capitalize">
                                {item.subcategory}
                            </span>
                        )}
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
    }

    // Fallback for LeadItem
    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {item.nombre}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {item.email}
            </p>
            {item.leadInterest && item.leadInterest.length > 0 && (
                <div className="mt-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Intereses:</p>
                    <ul className="flex flex-wrap gap-2">
                        {item.leadInterest.map((interest, idx) => (
                            <li key={idx} className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-md border border-gray-200">
                                {interest.nombre}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};