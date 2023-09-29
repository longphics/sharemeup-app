import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useCart, useItems, useUsers } from '~/contexts';
import { changeCartElement } from '~/utils';

import { FeedbackList, ItemInfo, StoreInfo, SelectItem } from './components';

export default function ItemDetails({ navigation, route }) {
  const itemsCtx = useItems();
  const item = itemsCtx.items.filter((item) => item.id === route.params.id)[0];

  const CartCtx = useCart();
  const UsersCtx = useUsers();

  const focus = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
      hasCart: true,
    });
  }, [focus, navigation]);

  const handlePressCart = (itemId, amount) => {
    changeCartElement(itemId, amount, CartCtx, UsersCtx);
  };

  const handlePressPick = (itemId, amount) => {
    console.log('Pick', itemId, amount);
  };

  const itemInfoProps = {
    name: item.name,
    image: item.images[0],
    star: item.star,
    sold: item.sold,
    stock: item.stock,
    description: item.description,
    expired: item.expired,
    createAt: item.createAt,
    filters: item.category.filters,
    options: item.options,
  };

  const storeInfoProps = {
    id: item.store.id,
    name: item.store.name,
    avatar: item.store.avatar,
    address: item.store.address,
  };

  const feedbackListProps = {
    feedbacks: item.feedbacks,
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <ItemInfo {...itemInfoProps} />
        <StoreInfo {...storeInfoProps} />
        <FeedbackList {...feedbackListProps} />
      </ScrollView>
      <SelectItem
        itemId={item.id}
        stock={item.stock}
        onPressCart={handlePressCart}
        onPressPick={handlePressPick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
