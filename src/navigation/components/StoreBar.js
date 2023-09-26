import { StyleSheet } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

export default function StoreBar({ navigation, options }) {
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header style={styles.topBar} mode="center-aligned">
      <IconButton
        icon={({ color, size }) => (
          <Icon name="back" color={color} size={size} />
        )}
        onPress={handlePressBack}
        iconColor={GlobalStyles.colors.onSurface}
        style={styles.leftButton}
      />

      <Appbar.Content
        style={styles.titleContainer}
        titleStyle={styles.titleText}
        title={options.title}
        color={GlobalStyles.colors.onSurface}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: GlobalStyles.colors.surface,
    paddingHorizontal: 0,
  },
  titleContainer: {
    marginLeft: 16,
  },
  titleText: {
    color: GlobalStyles.colors.onSurface,
  },
  leftButton: {
    marginHorizontal: 12,
  },
  rightButton: {
    marginLeft: 2,
    marginRight: 12,
  },
});
