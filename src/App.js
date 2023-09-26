import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import {
  useCategories,
  useItems,
  useStores,
  useUser,
  useOrders,
} from './contexts';

export default function App() {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();
  const UserCtx = useUser();
  const OrdersCtx = useOrders();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
    UserCtx.refresh();
    OrdersCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
