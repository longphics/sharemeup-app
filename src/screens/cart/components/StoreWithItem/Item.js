import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { ButtonAddMinus } from '~/components';
import { GlobalStyles } from '~/constants';

export default function Item({ cartElement, onPressAdd, onPressMinus }) {
  const [amount, setAmount] = useState(cartElement.amount);

  const item = cartElement.item;

  const handlePressAdd = () => {
    onPressAdd(item.id);
    setAmount((prev) => {
      return prev + 1;
    });
  };

  const handlePressMinus = () => {
    onPressMinus(item.id);
    setAmount((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
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
