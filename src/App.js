import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import { useCategories, useItems, useStores } from './contexts';

export default function App() {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
