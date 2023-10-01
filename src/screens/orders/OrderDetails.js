import { ScrollView, StyleSheet, View } from 'react-native';

import { useOrders, useStores, useUsers } from '~/contexts';

import { OrderDetailForm, OrderItems } from './components';

export default function OrderDetails({ route }) {
  const orderCtx = useOrders();
  const storesCtx = useStores();
  const usersCtx = useUsers();

  const myOrder = orderCtx.orders.filter(
    (order) => order.id === route.params.id,
  )[0];

  const store = storesCtx.stores.filter(
    (store) => store.id === myOrder.storeId,
  )[0];
  const storePhone = usersCtx.users.filter(
    (user) => user.id === store.ownerId,
  )[0].phone;

  const orderDetailFormProps = {
    name: store.name,
    phone: storePhone,
    address: store.address,
    createdDate: myOrder.createAt,
    status: myOrder.status,
    aboutText: 'Store',
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <OrderDetailForm {...orderDetailFormProps} />
        <OrderItems order={myOrder} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
