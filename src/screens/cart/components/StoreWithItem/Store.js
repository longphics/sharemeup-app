import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';
import { Text, Checkbox } from 'react-native-paper';

export default function Store({ id, name, onPressSelect, checkedStoreId }) {
  const handleSelect = () => {
    onPressSelect(id);
  };
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

      <Checkbox.Android
        status={checkedStoreId === id ? 'checked' : null}
        onPress={handleSelect}
      />
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
