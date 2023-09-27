import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UsersProvider from './users-context';
import OrdersProvider from './orders-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>
        <StoresProvider>
          <UsersProvider>
            <OrdersProvider>{children}</OrdersProvider>
          </UsersProvider>
        </StoresProvider>
      </ItemsProvider>
    </CategoriesProvider>
  );
}
