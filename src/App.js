import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import { useCategories, useItems, useStores, useUser } from './contexts';

export default function App() {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();
  const UserCtx = useUser();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
    UserCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
