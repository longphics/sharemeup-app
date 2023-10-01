import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  const categoriesCtx = useCategories();
  const itemsCtx = useItems();
  const storesCtx = useStores();
  const usersCtx = useUsers();
  const ordersCtx = useOrders();

  useEffect(() => {
    const fetchData = async () => {
      Promise.all([
        categoriesCtx.refresh(),
        itemsCtx.refresh(),
        storesCtx.refresh(),
        usersCtx.refresh(),
        ordersCtx.refresh(),
      ]).then(() => {
        setIsLoading(false);
      });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
