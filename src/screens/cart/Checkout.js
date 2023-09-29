import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { useMe } from '~/contexts';
import { createOrder } from '~/services';

import { StoreWithItemCheckout, CheckoutForm } from './components';

export default function Checkout({ route }) {
  const storeId = route.params.storeId;
  const cartElements = route.params.cartElements;

  const me = useMe().me;

  const name = me.name;
  const [address, setAddress] = useState(me.address);
  const [phone, setPhone] = useState(me.phone);

  const handlePlaceOrder = () => {
    createOrder(storeId, address, phone);
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
