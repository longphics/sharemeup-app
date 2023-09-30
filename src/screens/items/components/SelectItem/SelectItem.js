import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { ButtonAddMinus } from '~/components';
import { GlobalStyles } from '~/constants';

export default function SelectItem({
  itemId,
  stock,
  onPressCart,
  onPressPick,
  isCanBuy,
}) {
  const [amount, setAmount] = useState(1);

  const handlePressAdd = () => {
    if (isCanBuy) {
      if (amount === stock) {
        Alert.alert('Alert', 'Over stock');
      } else {
        setAmount((prev) => prev + 1);
      }
    }
  };

  const handlePressMinus = () => {
    if (isCanBuy) {
      if (amount === 1) {
        return;
      } else {
        setAmount((prev) => prev - 1);
      }
    }
  };

  const handlePressCart = () => {
    if (isCanBuy) {
      onPressCart(itemId, amount);
    }
  };

  const handlePressPick = () => {
    if (isCanBuy) {
      onPressPick(itemId, amount);
    }
  };

  return (
    <View style={[styles.container, { opacity: isCanBuy ? 1 : 0.5 }]}>
      <View style={styles.adjustContainer}>
        <ButtonAddMinus
          amount={amount}
          onPressAdd={handlePressAdd}
          onPressMinus={handlePressMinus}
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
