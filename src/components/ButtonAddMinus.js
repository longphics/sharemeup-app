import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';

import Icon from './Icon';

export default function ButtonAddMinus({ amount, onPressAdd, onPressMinus }) {
  return (
    <View style={styles.buttonContainer}>
      <IconButton
        icon={({ color, size }) => (
          <Icon name="minus" size={size} color={color} />
        )}
        iconColor={GlobalStyles.colors.primary}
        size={32}
        onPress={onPressMinus}
      />
      <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
        {amount}
      </Text>
      <IconButton
        icon={({ color, size }) => (
          <Icon name="add" size={size} color={color} />
        )}
        iconColor={GlobalStyles.colors.primary}
        size={32}
        onPress={onPressAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
