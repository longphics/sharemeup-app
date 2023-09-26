import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';
import { ManageOrders, ManageStore } from '~/screens';

import { StoreBar, BottomBar } from './components';

const Tab = createBottomTabNavigator();

export default function StoreTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar {...props} />}
      sceneContainerStyle={{
        backgroundColor: GlobalStyles.colors.surface,
      }}
      screenOptions={{
        header: (props) => <StoreBar {...props} />,
      }}
    >
      <Tab.Screen
        name="ManageStore"
        component={ManageStore}
        options={{
          title: 'Manage Store',
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? 'store-fill' : 'store'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ManageOrder"
        component={ManageOrders}
        options={{
          title: 'Manage Orders',
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? 'feed-fill' : 'feed'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
