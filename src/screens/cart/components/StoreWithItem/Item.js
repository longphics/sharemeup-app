import { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { ButtonAddMinus } from '~/components';
import { GlobalStyles } from '~/constants';
import { useItems } from '~/contexts';

export default function Item({ cartElement, onPressAdd, onPressMinus }) {
  const [amount, setAmount] = useState(cartElement.amount);

  const itemCtx = useItems();

  const items = itemCtx.items;
  const item = items.filter((item) => item.id === cartElement.item.id)[0];

  const stock = item.stock;

  const handlePressAdd = () => {
    if (amount === stock) {
      Alert.alert('Alert', 'Over stock');
    } else {
      onPressAdd(item.id, amount + 1);
      setAmount((prev) => {
        return prev + 1;
      });
    }
  };

  const handlePressMinus = () => {
    if (amount === 0) {
      return;
    } else if (amount === 1) {
      Alert.alert('Confirm', 'Do you want to delete this item', [
        {
          text: 'Yes',
          onPress: () => {
            onPressMinus(item.id, amount - 1);
            setAmount((prev) => {
              return prev - 1;
            });
          },
        },
        {
          text: 'No',
        },
      ]);
    } else {
      onPressMinus(item.id, amount - 1);
      setAmount((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.name}</Text>
          <Text style={{ marginTop: 6 }}>{amount} items</Text>
        </View>
        <ButtonAddMinus
          amount={amount}
          onPressAdd={handlePressAdd}
          onPressMinus={handlePressMinus}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    height: 120,
    width: '45%',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  textContainer: {
    width: '100%',
  },
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
