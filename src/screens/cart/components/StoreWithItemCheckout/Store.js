import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';

export default function Store({ name }) {
  return (
    <View style={styles.container}>
      <Icon
        name="store"
        size={20}
        color={GlobalStyles.colors.onSurface}
        style={{ marginRight: 6 }}
      />
      <Text
        variant="bodyLarge"
        style={[styles.text, { fontWeight: 'bold', flex: 1 }]}
      >
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
