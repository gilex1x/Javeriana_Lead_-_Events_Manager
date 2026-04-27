import { useAppContext } from './store';
import { Layout } from './layout';
import { useEffect } from 'react';
import { ItemList } from './components/ItemList';
import { Loader } from './components/Loader';
import { useFilteredItems, useDebounce } from './hooks';

function App() {
  const { fetchItems, items, categoryFilter, searchQuery } = useAppContext();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const filteredItems = useFilteredItems(items, categoryFilter, debouncedSearchQuery);

  return (
    <main className='bg-gray-50 relative'>
      <Layout>
        <ItemList items={filteredItems} />
      </Layout>
      <Loader />
    </main>
  );
}

export default App;

