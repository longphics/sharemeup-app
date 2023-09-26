import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>
        <StoresProvider>{children}</StoresProvider>
      </ItemsProvider>
    </CategoriesProvider>
  );
}
