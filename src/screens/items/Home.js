import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useCategories, useItems } from '~/contexts';

import { FilterBar, ItemList } from './components';

export default function Home({ navigation }) {
  const CategoriesCtx = useCategories();
  const ItemsCtx = useItems();

  const isFocus = useIsFocused();

  useEffect(() => {
    // CategoriesCtx.refresh();
    ItemsCtx.refresh();
  }, [isFocus]);

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
      <ScrollView>
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
