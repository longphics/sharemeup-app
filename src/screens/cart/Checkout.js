import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useAuth, useMe } from '~/contexts';
import { createOrder } from '~/services';

import { StoreWithItemCheckout, CheckoutForm } from './components';
import { useIsFocused } from '@react-navigation/native';

export default function Checkout({ navigation, route }) {
  const meCtx = useMe();
  const authCtx = useAuth();

  const storeId = route.params.storeId;
  const cartElements = route.params.cartElements;

  const me = meCtx.me;

  const name = me.name;
  const [address, setAddress] = useState(me.address);
  const [phone, setPhone] = useState(me.phone);

  const handlePlaceOrder = () => {
    if (!storeId || !address || !phone) {
      Alert.alert('Alert', 'Order data can not be empty');
    } else {
      createOrder(authCtx.token, storeId, address, phone);
      Alert.alert('Information', 'You have place an order');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <CheckoutForm {...{ name, address, phone, setAddress, setPhone }} />
        <StoreWithItemCheckout storeId={storeId} cartElements={cartElements} />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handlePlaceOrder}>
          Place order
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
