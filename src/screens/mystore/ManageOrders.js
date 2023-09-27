import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

import { useOrders } from '~/contexts';

import { UserWithItem } from './components';

export default function ManageOrders({ navigation }) {
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

  const [tab, setTab] = useState('Waiting');

  const authStoreId = 'store1(user1)';
  const myStoreOrders = useOrders().orders.filter(
    (order) => order.storeId === authStoreId,
  );
  const myDisplayStoreOrders = myStoreOrders.filter(
    (order) => order.status === tab,
  );

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
