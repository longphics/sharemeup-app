import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '~/constants';

import { useStores } from '~/contexts';
import Item from './Item';
import Store from './Store';

export default function StoreWithItem({
  storeId,
  cartElements,
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

      {cartElements.map((cartElement) => {
        return (
          <Item
            cartElement={cartElement}
            key={cartElement.item.id}
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
