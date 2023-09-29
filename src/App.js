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
  useMe,
} from './contexts';

export default function App() {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();
  const StoresCtx = useStores();
  const UsersCtx = useUsers();
  const OrdersCtx = useOrders();
  const CartCtx = useCart();
  const MeCtx = useMe();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
    StoresCtx.refresh();
    UsersCtx.refresh();
    OrdersCtx.refresh();
    CartCtx.refresh();
    MeCtx.refresh();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
