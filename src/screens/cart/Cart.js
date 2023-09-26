import { StyleSheet, View, ScrollView } from 'react-native';

import { useUser } from '~/contexts';

import { StoreWithItem } from './components';

export default function Cart() {
  const handlePressSelect = (data) => {
    log(data);
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
              handlePressSelect={handlePressSelect}
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
