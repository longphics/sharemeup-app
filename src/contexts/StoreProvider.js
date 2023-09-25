import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>{children}</ItemsProvider>
    </CategoriesProvider>
  );
}
