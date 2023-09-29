import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import {
  useCategories,
  useItems,
  useStores,
  useUsers,
  useOrders,
  useCart,
} from './contexts';

export default function App() {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();
  const UsersCtx = useUsers();
  const OrdersCtx = useOrders();
  const CartCtx = useCart();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
    UsersCtx.refresh();
    OrdersCtx.refresh();
    CartCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
