import { View, StyleSheet } from 'react-native';
import { Text, Chip } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';

export default function Receiver({ status, id, name, onPressWho }) {
  const handlePressWho = () => {
    onPressWho(id);
  };

  let chipColor;
  if (status === 'Waiting') {
    chipColor = GlobalStyles.colors.secondary;
  } else if (status === 'Taking') {
    chipColor = GlobalStyles.colors.tertiary;
  } else if (status === 'Received') {
    chipColor = GlobalStyles.colors.primary;
  } else {
    chipColor = GlobalStyles.colors.error;
  }

  return (
    <View style={styles.container}>
      <Icon
        name="person"
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
      <Chip
        mode="outlined"
        selectedColor={chipColor}
        style={{
          backgroundColor: 'transparent',
          width: 100,
          borderColor: chipColor,
          borderRadius: 12,
        }}
        textStyle={{ flex: 1, textAlign: 'center' }}
      >
        {status}
      </Chip>
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
