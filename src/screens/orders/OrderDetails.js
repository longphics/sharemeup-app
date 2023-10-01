import { StyleSheet, View, Text } from 'react-native';
import { useOrders } from '~/contexts';

export default function OrderDetails({ route }) {
  const orderCtx = useOrders();
  const myOrder = orderCtx.orders.filter(
    (order) => order.id === route.params.id,
  )[0];

  // console.log(JSON.stringify(myOrder));

  return (
    <View style={styles.screenContainer}>
      <Text>Order Details: {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
