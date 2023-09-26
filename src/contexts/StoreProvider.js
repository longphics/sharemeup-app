import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UserProvider from './user-context';
import OrdersProvider from './orders-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>
        <StoresProvider>
          <UserProvider>
            <OrdersProvider>{children}</OrdersProvider>
          </UserProvider>
        </StoresProvider>
      </ItemsProvider>
    </CategoriesProvider>
  );
}
