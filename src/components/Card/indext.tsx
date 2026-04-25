import type { BaseItem, LeadItem } from "../../types"

interface CardItemProps {
    item: BaseItem | LeadItem;
}

export const CardItem = ({ item }: CardItemProps): React.ReactElement => {
    return <div className="flex">
        <span>{item.nombre}</span>
    </div>
};