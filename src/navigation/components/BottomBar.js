import { StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

import { GlobalStyles } from '../../constants';

export default function HomeTabBar({ navigation, state, descriptors, insets }) {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.title;

        return label;
      }}
      style={styles.bottomBarContainer}
      activeColor={GlobalStyles.colors.onSecondaryContainer}
      inactiveColor={GlobalStyles.colors.onSurfaceVariant}
    />
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    backgroundColor: GlobalStyles.colors.surfaceContainer,
  },
});
