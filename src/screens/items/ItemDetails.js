import { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useAuth, useItems, useMe, useStores } from '~/contexts';
import { updateCart } from '~/services';

import { FeedbackList, ItemInfo, StoreInfo, SelectItem } from './components';

export default function ItemDetails({ navigation, route }) {
  const authCtx = useAuth();
  const meCtx = useMe();
  const itemsCtx = useItems();
  const storesCtx = useStores();

  const item = itemsCtx.items.filter((item) => item.id === route.params.id)[0];

  const itemStoreId = item.storeId;
  const myStoreId = meCtx.me.ownStore?.id;

  const store = storesCtx.stores.filter(
    (store) => store.id === item.storeId,
  )[0];

  const isFocus = useIsFocused();
  useEffect(() => {
    navigation.setOptions({
      title: item.name,
      hasCart: true,
    });
  }, [isFocus, navigation]);

  const handlePressCart = async (itemId, amount) => {
    await updateCart(authCtx.token, itemId, amount);
    meCtx.refresh(authCtx.token);
    Alert.alert('Information', 'You have add to cart');
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
    id: item.storeId,
    name: store.name,
    avatar: store.avatar,
    address: store.address,
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
        isCanBuy={itemStoreId !== myStoreId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
