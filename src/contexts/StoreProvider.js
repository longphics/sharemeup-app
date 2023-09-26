import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UserProvider from './user-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>
        <StoresProvider>
          <UserProvider>{children}</UserProvider>
        </StoresProvider>
      </ItemsProvider>
    </CategoriesProvider>
  );
}
