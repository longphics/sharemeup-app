import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UsersProvider from './users-context';
import OrdersProvider from './orders-context';
import CartProvider from './cart-context';
import MeProvider from './me-context';

export default function StoreProvider({ children }) {
  return (
    <CategoriesProvider>
      <ItemsProvider>
        <StoresProvider>
          <UsersProvider>
            <OrdersProvider>
              <CartProvider>
                <MeProvider>{children}</MeProvider>
              </CartProvider>
            </OrdersProvider>
          </UsersProvider>
        </StoresProvider>
      </ItemsProvider>
    </CategoriesProvider>
  );
}
