import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import {
  useCategories,
  useItems,
  useStores,
  useUsers,
  useOrders,
} from './contexts';

export default function App() {
  const categoriesCtx = useCategories();
  const itemsCtx = useItems();
  const storesCtx = useStores();
  const usersCtx = useUsers();
  const ordersCtx = useOrders();

  useEffect(() => {
    categoriesCtx.refresh();
    itemsCtx.refresh();
    storesCtx.refresh();
    usersCtx.refresh();
    ordersCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
