import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '../components';
import { GlobalStyles } from '../constants';
import { Home, Orders, Community, Messages, Menu } from '../screens';
import { HeaderBar, BottomBar, HomeBar } from './components';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar {...props} />}
      sceneContainerStyle={{
        backgroundColor: GlobalStyles.colors.surface,
      }}
      screenOptions={{
        header: (props) => <HeaderBar {...props} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? 'home-fill' : 'home'}
              color={color}
              size={size}
            />
          ),
          header: (props) => <HomeBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={Orders}
        options={{
          title: 'Orders',
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
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          title: 'Community',
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? 'volunteer-fill' : 'volunteer'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Message',
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? 'chat-fill' : 'chat'}
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name={focused ? 'person-fill' : 'person'}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
