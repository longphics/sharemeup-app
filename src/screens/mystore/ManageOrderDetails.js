import { ScrollView, StyleSheet, View } from 'react-native';

import { useOrders, useUsers } from '~/contexts';

import { OrderDetailForm, OrderItems } from '../orders/components';

export default function ManageOrderDetails({ route }) {
  const orderCtx = useOrders();
  const usersCtx = useUsers();

  const myOrder = orderCtx.orders.filter(
    (order) => order.id === route.params.id,
  )[0];

  const user = usersCtx.users.filter((user) => user.id === myOrder.userId)[0];

  const orderDetailFormProps = {
    name: user.name,
    phone: user.phone,
    address: user.address,
    createdDate: myOrder.createAt,
    status: myOrder.status,
    aboutText: 'Receiver',
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
