import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import {
  ItemDetails,
  StoreDetails,
  OrderDetails,
  Cart,
  Checkout,
  CreateItem,
  Login,
} from '~/screens';
import { GlobalStyles } from '~/constants';
import { listener } from '~/utils';
import { useAuth } from '~/contexts';

import { HeaderBar } from './components';
import HomeTab from './HomeTab';
import StoreTab from './StoreTab';

const Stack = createStackNavigator();

export default function MainStack() {
  const authCtx = useAuth();

  return (
    <Stack.Navigator
      screenListeners={listener}
      screenOptions={{
        cardStyle: {
          backgroundColor: GlobalStyles.colors.surface,
        },
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        header: (props) => <HeaderBar {...props} />,
      }}
    >
      {!authCtx.token ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="StoreTab"
            component={StoreTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{
              title: 'Item Details',
            }}
          />
          <Stack.Screen
            name="StoreDetails"
            component={StoreDetails}
            options={{
              title: 'Store Details',
            }}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{
              title: 'Order Details',
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: 'Cart',
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              title: 'Checkout',
            }}
          />
          <Stack.Screen
            name="CreateItem"
            component={CreateItem}
            options={{
              title: 'New Item',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
