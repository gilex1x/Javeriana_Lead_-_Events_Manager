
import { Filter } from "../Filter";
import { Search } from "../Search";

export const Header = (): React.ReactElement => {
    return (
        <nav className="border-b border-gray-200 flex items-center justify-between p-4 bg-white shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                Leads System
            </h1>
            <Search />
            <Filter />
        </nav>
    );
};



