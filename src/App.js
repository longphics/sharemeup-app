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
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();
  const UsersCtx = useUsers();
  const OrdersCtx = useOrders();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
    UsersCtx.refresh();
    OrdersCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
