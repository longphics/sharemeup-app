import { StyleSheet, View } from 'react-native';

import { useStores } from '~/contexts';

import Item from './Item';

export default function ItemList({ items, onPress }) {
  const storesCtx = useStores();

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const store = storesCtx.stores.filter(
          (store) => store.id === item.storeId,
        )[0];
        const props = {
          id: item.id,
          name: item.name,
          image: item.images[0],
          address: store.address,
          sold: item.sold,
          star: item.star,
          stock: item.stock,
        };
        return (
          <Item {...props} index={index} key={item.id} onPress={onPress} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
  },
});
