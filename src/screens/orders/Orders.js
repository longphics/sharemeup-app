import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { useMe, useOrders, useStores } from '~/contexts';
import { changeOrderStatus } from '~/services';

import { StoreWithItem } from './components';

export default function Orders({ navigation }) {
  const meCtx = useMe();
  const ordersCtx = useOrders();
  const storesCtx = useStores();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      ordersCtx.refresh();
    }
  }, [isFocus]);

  const [tab, setTab] = useState('Waiting');

  const myId = meCtx.me.id;

  const orders = ordersCtx.orders;

  const myOrders = orders.filter((order) => order.userId === myId);

  if (!myOrders.length) {
    return (
      <View
        style={[
          styles.screenContainer,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text variant="bodyLarge">Order is empty</Text>
      </View>
    );
  }

  const myDisplayOrders = myOrders.filter((order) => order.status === tab);

  const handlePressCancel = (orderId) => {
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

  const handlePressReceive = async (orderId) => {
    Alert.alert('Confirm', 'Did you receive this order', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await changeOrderStatus(orderId, 'Received');
          ordersCtx.refresh();
          storesCtx.refresh();
        },
      },
    ]);
  };

  const handlePressFeedback = (orderId) => {
    const order = myOrders.filter((order) => order.id === orderId)[0];
    const itemId = order.orderElements[0].itemId;

    navigation.navigate('Feedback', {
      itemId,
    });
  };

  const handlePressDetail = (orderId) => {
    console.log('Detail', orderId);
    navigation.navigate('OrderDetails', {
      id: orderId,
    });
  };

  const handlePressWho = (id) => {
    console.log(id);
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
              onPressWho={handlePressWho}
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
