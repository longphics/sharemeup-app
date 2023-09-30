import AuthProvider from './auth-context';
import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UsersProvider from './users-context';
import OrdersProvider from './orders-context';
import MeProvider from './me-context';

export default function StoreProvider({ children }) {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ItemsProvider>
          <StoresProvider>
            <UsersProvider>
              <OrdersProvider>
                <MeProvider>{children}</MeProvider>
              </OrdersProvider>
            </UsersProvider>
          </StoresProvider>
        </ItemsProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}
