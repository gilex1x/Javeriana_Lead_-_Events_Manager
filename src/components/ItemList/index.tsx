import type { DatabaseSchema } from "../../types";
import { CardItem } from "../Card/indext";

interface ItemListProps extends DatabaseSchema { }

export const ItemList = ({ items }: ItemListProps): React.ReactElement => {
    return <ul className="flex gap-4">
        {items.map((item) => <li key={item.id}> <CardItem item={item} /></li>)}
    </ul>;
}