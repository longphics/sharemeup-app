import { useContext } from 'react';

import { CategoriesContext } from './categories-context';
import { ItemsContext } from './items-context';
import { StoresContext } from './stores-context';
import { UsersContext } from './users-context';
import { OrdersContext } from './orders-context';
import { CartContext } from './cart-context';
import { MeContext } from './me-context';

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

export function useCart() {
  return useContext(CartContext);
}

export function useMe() {
  return useContext(MeContext);
}
