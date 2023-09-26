import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { useUser } from '~/contexts';

import { StoreWithItem } from './components';
import { useState } from 'react';

export default function Cart() {
  const [checkedStoreId, setCheckedStoredId] = useState();

  const handlePressSelect = (storeId) => {
    // console.log(storeId);
    setCheckedStoredId(storeId);
  };

  const handlePressAdd = (itemId) => {
    console.log(itemId);
  };

  const handlePressMinus = (itemId) => {
    console.log(itemId);
  };

  const handleCheckout = () => {
    console.log('Checkout');
  };

  const UserCtx = useUser();
  const item_user_s = UserCtx.user.item_user;

  const item_user_s_groups = item_user_s.reduce((x, y) => {
    (x[y.item.store.id] = x[y.item.store.id] || []).push(y);
    return x;
  }, {});

  const storeIds = Object.keys(item_user_s_groups);

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        {storeIds.map((storeId) => {
          return (
            <StoreWithItem
              storeId={storeId}
              item_user_s={item_user_s_groups[storeId]}
              key={storeId}
              onPressSelect={handlePressSelect}
              onPressAdd={handlePressAdd}
              onPressMinus={handlePressMinus}
              checkedStoreId={checkedStoreId}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleCheckout}>
          Checkout
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
