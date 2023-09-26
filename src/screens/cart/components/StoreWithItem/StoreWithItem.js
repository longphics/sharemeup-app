import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '~/constants';

import { useStores } from '~/contexts';
import Item from './Item';
import Store from './Store';

export default function StoreWithItem({
  storeId,
  item_user_s,
  onPressSelect,
  onPressAdd,
  onPressMinus,
  checkedStoreId,
}) {
  const StoresCtx = useStores();
  const store = StoresCtx.stores.filter((store) => store.id === storeId)[0];

  return (
    <View style={styles.container}>
      <Store
        id={storeId}
        name={store.name}
        onPressSelect={onPressSelect}
        checkedStoreId={checkedStoreId}
      />

      {item_user_s.map((item_user) => {
        return (
          <Item
            item_user={item_user}
            key={item_user.item.id}
            onPressAdd={onPressAdd}
            onPressMinus={onPressMinus}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainer,
  },
});
