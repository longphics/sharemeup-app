import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';

import { useItems, useStores } from '~/contexts';

import { ItemList } from '../items/components';
import { StoreHeader } from './components';

export default function StoreDetails({ navigation, route }) {
  const StoresCtx = useStores();
  const stores = StoresCtx.stores;
  const store = stores.filter((store) => store.id === route.params.id)[0];

  const ItemsCtx = useItems();
  const items = ItemsCtx.items.filter((item) => item.storeId === store.id);

  const handlePressItem = (id) => {
    navigation.navigate('ItemDetails', {
      id,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: store.name,
      hasCart: true,
    });
  }, [navigation]);

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <StoreHeader store={store} />
        <Divider horizontalInset />
        <ItemList items={items} onPress={handlePressItem} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
