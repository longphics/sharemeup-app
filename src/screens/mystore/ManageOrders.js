import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { useMe, useOrders } from '~/contexts';

import { UserWithItem } from './components';

export default function ManageOrders({ navigation }) {
  const MeCtx = useMe();
  const OrdersCtx = useOrders();

  const isFocus = useIsFocused();

  useEffect(() => {
    // MeCtx.refresh();
    OrdersCtx.refresh();
  }, [isFocus]);

  const [tab, setTab] = useState('Waiting');

  const store = MeCtx.me.ownStore;

  if (!store) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You do not have your own store</Text>
      </View>
    );
  }

  const myStoreId = store.id;

  const myStoreOrders = OrdersCtx.orders.filter(
    (order) => order.storeId === myStoreId,
  );

  const myDisplayStoreOrders = myStoreOrders.filter(
    (order) => order.status === tab,
  );

  const handlePressCancel = (orderId) => {
    console.log('Cancel', orderId);
  };

  const handlePressAccept = (orderId) => {
    console.log('Accept', orderId);
  };

  const handlePressDetail = (orderId) => {
    console.log('Detail', orderId);
    navigation.navigate('OrderDetails', {
      id: orderId,
    });
  };

  return (
    <View style={styles.screenContainer}>
      <SegmentedButtons
        value={tab}
        onValueChange={setTab}
        buttons={[
          { value: 'Waiting', label: 'Waiting' },
          { value: 'Taking', label: 'Taking' },
          { value: 'Received', label: 'Received' },
          { value: 'Canceled', label: 'Canceled' },
        ]}
        style={{ marginHorizontal: 12, marginBottom: 12 }}
      />

      <ScrollView>
        {myDisplayStoreOrders.map((order) => {
          return (
            <UserWithItem
              order={order}
              key={order.id}
              onPressCancel={handlePressCancel}
              onPressAccept={handlePressAccept}
              onPressDetail={handlePressDetail}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
