import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useAuth, useMe, useUsers } from '~/contexts';
import { createOrder } from '~/services';

import { StoreWithItemCheckout, CheckoutForm } from './components';

export default function Checkout({ navigation, route }) {
  const authCtx = useAuth();
  const meCtx = useMe();
  const usersCtx = useUsers();

  const storeId = route.params.storeId;
  const cartElements = route.params.cartElements;

  // const me = meCtx.me;
  const myUser = usersCtx.users.filter((user) => user.id === meCtx.me.id)[0];

  const name = myUser.name;
  const [address, setAddress] = useState(myUser.address);
  const [phone, setPhone] = useState(myUser.phone);

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
