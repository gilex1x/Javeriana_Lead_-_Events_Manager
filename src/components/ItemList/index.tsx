import { useEffect } from "react";
import type { BaseItem } from "../../types";
import { CardItem } from "../Card/indext";

interface ItemListProps {
    items: BaseItem[];
}

export const ItemList = ({ items }: ItemListProps): React.ReactElement => {
    useEffect(() => { }, [items])
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 w-full max-w-7xl mx-auto min-h-screen">
            {items.map((item) => (
                <li key={item.id} className="h-full">
                    <CardItem item={item} />
                </li>
            ))}
        </ul>
    );
}