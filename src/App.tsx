import { useAppContext } from './store';
import { Layout } from './layout';
import { useEffect } from 'react';
import { ItemList } from './components/ItemList';


function App() {
  const context = useAppContext();
  useEffect(() => {
    context.fetchItems();
  }, [])
  return (
    <main className='w-screen h-screen p-4'>
      <Layout >
        <ItemList items={context.items}/>
      </Layout>
    </main>
  )
}

export default App
