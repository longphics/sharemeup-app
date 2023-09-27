import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { useUsers } from '~/contexts';

import { StoreWithItem } from './components';
import { useState } from 'react';

export default function Cart() {
  const [checkedStoreId, setCheckedStoredId] = useState();

  const handlePressSelect = (storeId) => {
    setCheckedStoredId(storeId);
  };

  const handlePressAdd = (itemId) => {
    console.log(itemId);
  };

  const handlePressMinus = (itemId) => {
    console.log(itemId);
  };

  const handleCheckout = () => {
    console.log('Checkout');
  };

  const users = useUsers().users;

  const authId = 'user3';
  const user = users.filter((user) => user.id === authId)[0];

  const cartElements = user.cartElements;

  const cartElements_groups = cartElements.reduce((x, y) => {
    (x[y.item.store.id] = x[y.item.store.id] || []).push(y);
    return x;
  }, {});

  const storeIds = Object.keys(cartElements_groups);

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        {storeIds.map((storeId) => {
          return (
            <StoreWithItem
              storeId={storeId}
              cartElements={cartElements_groups[storeId]}
              key={storeId}
              onPressSelect={handlePressSelect}
              onPressAdd={handlePressAdd}
              onPressMinus={handlePressMinus}
              checkedStoreId={checkedStoreId}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleCheckout}>
          Checkout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 12,
  },
});
