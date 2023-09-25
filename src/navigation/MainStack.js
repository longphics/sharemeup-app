import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ItemDetails, Cart } from '~/screens';
import { GlobalStyles } from '~/constants';

import { HeaderBar } from './components';
import HomeTab from './HomeTab';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: GlobalStyles.colors.surface,
        },
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        header: (props) => <HeaderBar {...props} />,
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
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
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
        }}
      />
    </Stack.Navigator>
  );
}
