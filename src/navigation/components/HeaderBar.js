import { StyleSheet } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

export default function HeaderBar({ navigation, options, back }) {
  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Appbar.Header
      style={styles.topBar}
      mode={back ? 'center-aligned' : 'small'}
    >
      {back ? (
        <IconButton
          icon={({ color, size }) => (
            <Icon name="back" color={color} size={size} />
          )}
          onPress={handlePressBack}
          iconColor={GlobalStyles.colors.onSurface}
          style={styles.leftButton}
        />
      ) : null}

      <Appbar.Content
        style={styles.titleContainer}
        titleStyle={styles.titleText}
        title={options.title}
        color={GlobalStyles.colors.onSurface}
      />
      {options.hasCart ? (
        <IconButton
          icon={({ color, size }) => (
            <Icon name="cart" color={color} size={size} />
          )}
          onPress={handlePressCart}
          iconColor={GlobalStyles.colors.onSurface}
          style={styles.rightButton}
        />
      ) : null}
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
