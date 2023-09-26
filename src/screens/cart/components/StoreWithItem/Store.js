import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';
import { Text } from 'react-native-paper';

export default function Store({ id, name, onPressSelect }) {
  return (
    <View style={styles.container}>
      <Icon
        name="store"
        size={20}
        color={GlobalStyles.colors.onSurface}
        style={{ marginRight: 6 }}
      />
      <Text variant="bodyLarge" style={[styles.text, { fontWeight: 'bold' }]}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
