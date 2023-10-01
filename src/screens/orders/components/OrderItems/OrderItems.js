import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '~/constants';
import { useItems } from '~/contexts';

import Item from './Item';

export default function OrderItems({ order }) {
  const itemsCtx = useItems();
  return (
    <View style={styles.container}>
      {order.orderElements.map((orderElement) => {
        const item = itemsCtx.items.filter(
          (item) => item.id === orderElement.itemId,
        )[0];
        return (
          <Item
            name={item.name}
            image={item.images[0]}
            amount={orderElement.amount}
            key={item.id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainer,
  },
  buttonContainer: {},
  pressed: {
    opacity: 0.85,
  },
});
