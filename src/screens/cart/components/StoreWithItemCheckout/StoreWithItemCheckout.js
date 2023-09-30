import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '~/constants';
import { useStores } from '~/contexts';

import Item from './Item';
import Store from './Store';

export default function StoreWithItemCheckout({ storeId, cartElements }) {
  const storesCtx = useStores();
  const store = storesCtx.stores.filter((store) => store.id === storeId)[0];

  return (
    <View style={styles.container}>
      <Store name={store.name} />

      {cartElements.map((cartElement) => {
        const item = cartElement.item;
        return (
          <Item
            name={item.name}
            image={item.images[0]}
            amount={cartElement.amount}
            key={item.id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainer,
  },
});
