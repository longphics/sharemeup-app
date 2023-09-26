import { useContext } from 'react';

import { CategoriesContext } from './categories-context';
import { ItemsContext } from './items-context';
import { StoresContext } from './stores-context';
import { UserContext } from './user-context';

export function useCategories() {
  return useContext(CategoriesContext);
}

export function useItems() {
  return useContext(ItemsContext);
}

export function useStores() {
  return useContext(StoresContext);
}

export function useUser() {
  return useContext(UserContext);
}
