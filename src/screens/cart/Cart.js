import { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAuth, useMe } from '~/contexts';
import { updateCart } from '~/services';

import { StoreWithItem } from './components';

export default function Cart({ navigation }) {
  const [checkedStoreId, setCheckedStoredId] = useState('');

  const authCtx = useAuth();
  const meCtx = useMe();

  const cartElements = meCtx.me.cartElements;

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
    (x[y.item.storeId] = x[y.item.storeId] || []).push(y);
    return x;
  }, {});

  const storeIds = Object.keys(cartElements_groups);

  const handlePressSelect = (storeId) => {
    setCheckedStoredId(storeId);
  };

  const handlePressAdd = async (itemId, amount) => {
    await updateCart(authCtx.token, itemId, amount);
    meCtx.refresh(authCtx.token);
  };

  const handlePressMinus = async (itemId, amount) => {
    await updateCart(authCtx.token, itemId, amount);
    meCtx.refresh(authCtx.token);
  };

  const handleCheckout = () => {
    if (!checkedStoreId) {
      Alert.alert('Alert', 'You must select a store to checkout');
    } else {
      const selectCartElements = cartElements.filter(
        (cartElement) => cartElement.item.storeId === checkedStoreId,
      );
      navigation.navigate('Checkout', {
        storeId: checkedStoreId,
        cartElements: selectCartElements,
      });
    }
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        {storeIds.map((storeId) => (
          <StoreWithItem
            storeId={storeId}
            cartElements={cartElements_groups[storeId]}
            key={storeId}
            onPressSelect={handlePressSelect}
            onPressAdd={handlePressAdd}
            onPressMinus={handlePressMinus}
            checkedStoreId={checkedStoreId}
          />
        ))}
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
