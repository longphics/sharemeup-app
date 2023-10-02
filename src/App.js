import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/Navigation';
import {
  useCategories,
  useItems,
  useStores,
  useUsers,
  useOrders,
  usePosts,
  useGifts,
} from './contexts';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const categoriesCtx = useCategories();
  const itemsCtx = useItems();
  const storesCtx = useStores();
  const usersCtx = useUsers();
  const ordersCtx = useOrders();
  const postsCtx = usePosts();
  const giftsCtx = useGifts();

  useEffect(() => {
    const fetchData = async () => {
      Promise.all([
        categoriesCtx.refresh(),
        itemsCtx.refresh(),
        storesCtx.refresh(),
        usersCtx.refresh(),
        ordersCtx.refresh(),
        postsCtx.refresh(),
        giftsCtx.refresh(),
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
