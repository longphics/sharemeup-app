import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useCategories, useItems, useMe } from '~/contexts';

import { FilterBar, ItemList } from './components';

export default function Home({ navigation }) {
  const [category, setCategory] = useState('Food');

  const categoriesCtx = useCategories();
  const itemsCtx = useItems();
  const meCtx = useMe();

  const categories = categoriesCtx.categories.map((category) => category.name);

  const isFocus = useIsFocused();

  let items = itemsCtx.items;
  items = items.filter((item) => item.category.name === category);

  useEffect(() => {
    if (isFocus) {
      itemsCtx.refresh();
    }
  }, [isFocus]);

  const handlePressCategory = (category) => {
    setCategory(category);
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
