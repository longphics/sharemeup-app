import AuthProvider from './auth-context';
import CategoriesProvider from './categories-context';
import ItemsProvider from './items-context';
import StoresProvider from './stores-context';
import UsersProvider from './users-context';
import OrdersProvider from './orders-context';
import MeProvider from './me-context';
import PostsProvider from './posts-context';
import GiftsProvider from './gifts-context';

export default function StoreProvider({ children }) {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ItemsProvider>
          <StoresProvider>
            <UsersProvider>
              <OrdersProvider>
                <MeProvider>
                  <PostsProvider>
                    <GiftsProvider>{children}</GiftsProvider>
                  </PostsProvider>
                </MeProvider>
              </OrdersProvider>
            </UsersProvider>
          </StoresProvider>
        </ItemsProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}
