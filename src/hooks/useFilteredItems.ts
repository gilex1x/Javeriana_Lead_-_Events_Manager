import { useMemo } from 'react';
import type { Item, BaseItem, Category } from '../types';

export const useFilteredItems = (
  items: Item[],
  categoryFilter: Category | '',
  searchQuery: string
): BaseItem[] => {
  return useMemo(() => {
    let result = items.filter((item): item is BaseItem => 'categoria' in item);

    if (categoryFilter) {
      result = result.filter(item => item.categoria === categoryFilter);
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(item => item.nombre.toLowerCase().includes(lowerQuery));
    }

    return result;
  }, [items, categoryFilter, searchQuery]);
};
