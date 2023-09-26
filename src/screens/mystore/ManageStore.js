import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Divider, Button } from 'react-native-paper';

import { useStores, useItems } from '~/contexts';
import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';

import { ItemList } from '../items/components';
import { StoreHeader } from './components';

export default function ManageStore({ navigation }) {
  const userId = 'user1';

  const store = useStores().stores.filter(
    (store) => store.ownerId === userId,
  )[0];

  const ItemsCtx = useItems();
  const items = ItemsCtx.items.filter((item) => item.storeId === store.id);

  useEffect(() => {
    navigation.setOptions({
      title: store.name,
    });
  });

  const handlePressItem = () => {
    console.log('Press item');
  };

  const handlePressEdit = () => {
    console.log('Edit');
  };

  const handlePressDonation = () => {
    console.log('Donation');
  };

  const handlePressAddNewItem = () => {
    console.log('Add new item');
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <StoreHeader
          store={store}
          onPressEdit={handlePressEdit}
          onPressDonation={handlePressDonation}
        />
        <Divider horizontalInset />
        <View style={styles.buttonContainer}>
          <Button
            icon={({ size, color }) => {
              return <Icon name="add" color={color} size={size} />;
            }}
            mode="contained-tonal"
            onPress={handlePressAddNewItem}
            textColor={GlobalStyles.colors.primary}
          >
            Add new item
          </Button>
        </View>
        <ItemList items={items} onPress={handlePressItem} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 12,
    marginTop: 12,
  },
});
