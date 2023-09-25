import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useCategories, useItems } from '~/contexts';
import { Stars } from '~/components';

import { FilterBar } from './components/FilterBar';
import { ItemList } from './components/ItemList';

export default function Home({ navigation }) {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();

  useEffect(() => {
    CategoriesCtx.refresh();
    ItemsCtx.refresh();
  }, []);

  const categories = CategoriesCtx.categories.map((category) => category.name);
  const items = ItemsCtx.items;

  const handlePressCategory = (category) => {
    console.log(category);
  };

  const handlePressItem = (id) => {
    navigation.navigate('ItemDetails', {
      id,
    });
  };

  return (
    <View style={styles.screenContainer}>
      <FilterBar
        categories={categories}
        onPressCategory={handlePressCategory}
      />
      <ItemList items={items} onPress={handlePressItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
