import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useCart, useUsers } from '~/contexts';
import { changeCartElement } from '~/utils';

import { StoreWithItem } from './components';
import { useIsFocused } from '@react-navigation/native';

export default function Cart({ navigation }) {
  const UsersCtx = useUsers();
  const CartCtx = useCart();

  const isFocus = useIsFocused();

  useEffect(() => {
    // UsersCtx.refresh();
    CartCtx.refresh();
  }, [isFocus]);

  const [checkedStoreId, setCheckedStoredId] = useState();

  const users = UsersCtx.users;

  const authId = 'user3';
  const user = users.filter((user) => user.id === authId)[0];

  const cartElements = user.cartElements;

  const handlePressSelect = (storeId) => {
    setCheckedStoredId(storeId);
  };

  const handlePressAdd = async (itemId, amount) => {
    changeCartElement(itemId, amount, CartCtx, UsersCtx);
  };

  const handlePressMinus = async (itemId, amount) => {
    changeCartElement(itemId, amount, CartCtx, UsersCtx);
  };

  const handleCheckout = () => {
    const selectCartElements = cartElements.filter(
      (cartElement) => cartElement.item.storeId === checkedStoreId,
    );
    navigation.navigate('Checkout', {
      storeId: checkedStoreId,
      cartElements: selectCartElements,
    });
  };

  if (!cartElements.length) {
    return (
      <View
        style={[
          styles.screenContainer,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text variant="bodyLarge">Cart is empty</Text>
      </View>
    );
  }

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
