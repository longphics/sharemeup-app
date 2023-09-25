import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Item from './Item';

const renderItem = (itemData) => {
  return <Item {...itemData.item} index={itemData.index} />;
};

export default function ItemList({ items, onPress }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map((item, index) => {
          const props = {
            id: item.id,
            name: item.name,
            image: item.images[0],
            address: item.store.address,
            sold: item.sold,
            star: item.star,
            stock: item.stock,
          };
          return (
            <Item {...props} index={index} key={item.id} onPress={onPress} />
          );
        })}
      </View>
    </ScrollView>
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
