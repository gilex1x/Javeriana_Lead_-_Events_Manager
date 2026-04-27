import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { BaseItem, LeadItem, Category, Subcategory } from '../types';
import { getAllItems } from '../services';
import { useLocalStorage } from '../hooks';

interface AppState {
  items: BaseItem[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  categoryFilter: Category | '';
  subcategoryFilter: Subcategory | '';
  leads: LeadItem[];
}

interface AppActions {
  setSearchQuery: (query: string) => void;
  setCategoryFilter: (category: Category | '') => void;
  setSubcategoryFilter: (subcategory: Subcategory | '') => void;
  addLead: (lead: LeadItem) => void;
  fetchItems: () => Promise<void>;
}

interface AppContextType extends AppState, AppActions { }

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BaseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<Category | ''>('');
  const [subcategoryFilter, setSubcategoryFilter] = useState<Subcategory | ''>('');

  const [leads, setLeads] = useLocalStorage<LeadItem[]>('javeriana_leads', []);

  const addLead = useCallback((lead: LeadItem) => {

    const normalizeName = (name: string) => {
      return name
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    };

    const normalizedLead: LeadItem = {
      ...lead,
      nombre: normalizeName(lead.nombre),
      email: lead.email.trim().toLowerCase() as `${string}@javeriana.edu.co`,
    };

    setLeads((prev) => [...prev, normalizedLead]);
  }, []);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    const [data, err] = await getAllItems();

    if (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar los datos');
    } else if (data) {
      setItems(data);
    }

    setLoading(false);
  }, []);

  const value = useMemo(() => ({
    items,
    loading,
    error,
    searchQuery,
    categoryFilter,
    subcategoryFilter,
    leads,
    setSearchQuery,
    setCategoryFilter,
    setSubcategoryFilter,
    addLead,
    fetchItems,
  }), [items, loading, error, searchQuery, categoryFilter, subcategoryFilter, leads, addLead, fetchItems]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
};
