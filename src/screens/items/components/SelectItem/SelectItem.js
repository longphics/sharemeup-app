import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text, SegmentedButtons, Button } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

export default function SelectItem() {
  const [amount, setAmount] = useState(0);
  const [action, setAction] = useState();

  const handlePressAdd = () => {
    console.log('Add');
    setAmount((prev) => prev + 1);
  };

  const handlePressMinus = () => {
    console.log('Minus');
    setAmount((prev) => {
      if (prev == 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const handlePressCart = () => {
    console.log('Add to cart');
  };

  const handlePressPick = () => {
    console.log('Pick now');
  };

  return (
    <View style={styles.container}>
      <View style={styles.adjustContainer}>
        <IconButton
          icon={({ color, size }) => (
            <Icon name="add" size={size} color={color} />
          )}
          iconColor={GlobalStyles.colors.primary}
          size={32}
          onPress={handlePressAdd}
        />
        <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
          {amount}
        </Text>
        <IconButton
          icon={({ color, size }) => (
            <Icon name="minus" size={size} color={color} />
          )}
          iconColor={GlobalStyles.colors.primary}
          size={32}
          onPress={handlePressMinus}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={handlePressCart}
            mode="outlined"
            style={styles.button}
          >
            Add to cart
          </Button>
          <Button
            onPress={handlePressPick}
            mode="contained"
            style={styles.button}
          >
            Pick now
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: GlobalStyles.colors.surface,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 8,
  },
  adjustContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '49%',
    borderColor: GlobalStyles.colors.primary,
  },
});
