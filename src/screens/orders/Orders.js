import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

import { useOrders } from '~/contexts';

import { StoreWithItem } from './components';

export default function OrdersOrders({ navigation }) {
  const handlePressCancel = (oderId) => {
    console.log('Cancel', oderId);
  };

  const handlePressReceive = (oderId) => {
    console.log('Receive', oderId);
  };

  const handlePressFeedback = (orderId) => {
    console.log('Feedback', orderId);
  };

  const handlePressDetail = (orderId) => {
    console.log('Detail', orderId);
    navigation.navigate('OrderDetails', {
      id: orderId,
    });
  };

  const [tab, setTab] = useState('Waiting');

  const authId = 'user3';
  const myOrders = useOrders().orders.filter(
    (order) => order.userId === authId,
  );
  const myDisplayOrders = myOrders.filter((order) => order.status === tab);

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
        style={{ marginHorizontal: 12, marginBottom: 12 /* */ }}
      />

      <ScrollView>
        {myDisplayOrders.map((order) => {
          let handlePressButton;
          if (order.status === 'Waiting') {
            handlePressButton = handlePressCancel;
          } else if (order.status === 'Taking') {
            handlePressButton = handlePressReceive;
          } else if (order.status === 'Received') {
            handlePressButton = handlePressFeedback;
          }
          return (
            <StoreWithItem
              order={order}
              key={order.id}
              onPressButton={handlePressButton}
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
