import { useMemo } from 'react';
import type { BaseItem, Category } from '../types';

export const useFilteredItems = (
  items: BaseItem[],
  categoryFilter: Category | '',
  searchQuery: string
): BaseItem[] => {
  return useMemo(() => {
    let result = items;

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
