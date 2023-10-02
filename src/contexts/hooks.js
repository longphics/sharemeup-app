import { useContext } from 'react';

import { CategoriesContext } from './categories-context';
import { ItemsContext } from './items-context';
import { StoresContext } from './stores-context';
import { UsersContext } from './users-context';
import { OrdersContext } from './orders-context';
import { MeContext } from './me-context';
import { AuthContext } from './auth-context';
import { PostsContext } from './posts-context';
import { GiftsContext } from './gifts-context';

export function useCategories() {
  return useContext(CategoriesContext);
}

export function useItems() {
  return useContext(ItemsContext);
}

export function useStores() {
  return useContext(StoresContext);
}

export function useUsers() {
  return useContext(UsersContext);
}

export function useOrders() {
  return useContext(OrdersContext);
}

export function useMe() {
  return useContext(MeContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

export function usePosts() {
  return useContext(PostsContext);
}

export function useGifts() {
  return useContext(GiftsContext);
}
