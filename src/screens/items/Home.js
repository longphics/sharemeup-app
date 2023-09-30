import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useCategories, useItems } from '~/contexts';

import { FilterBar, ItemList } from './components';

export default function Home({ navigation }) {
  const categoriesCtx = useCategories();
  const itemsCtx = useItems();

  const isFocus = useIsFocused();

  useEffect(() => {
    itemsCtx.refresh();
  }, [isFocus]);

  const [category, setCategory] = useState('Food');

  const categories = categoriesCtx.categories.map((category) => category.name);

  let items = itemsCtx.items;
  items = items.filter((item) => item.category.name === category);

  const handlePressCategory = (category) => {
    console.log(category);
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
