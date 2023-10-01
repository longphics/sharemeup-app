import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { useMe, useOrders } from '~/contexts';
import { changeOrderStatus } from '~/services';

import { UserWithItem } from './components';

export default function ManageOrders({ navigation }) {
  const meCtx = useMe();
  const ordersCtx = useOrders();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      ordersCtx.refresh();
    }
  }, [isFocus]);

  const [tab, setTab] = useState('Waiting');

  const myStoreId = meCtx.me.ownStore?.id;

  if (!myStoreId) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You do not have your own store</Text>
      </View>
    );
  }

  const myStoreOrders = ordersCtx.orders.filter(
    (order) => order.storeId === myStoreId,
  );

  const myDisplayStoreOrders = myStoreOrders.filter(
    (order) => order.status === tab,
  );

  const handlePressCancel = async (orderId) => {
    Alert.alert('Confirm', 'Do you want to cancel this order', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await changeOrderStatus(orderId, 'Canceled');
          ordersCtx.refresh();
        },
      },
    ]);
  };

  const handlePressAccept = async (orderId) => {
    Alert.alert('Confirm', 'Do you want to accept this order', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await changeOrderStatus(orderId, 'Taking');
          ordersCtx.refresh();
        },
      },
    ]);
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
