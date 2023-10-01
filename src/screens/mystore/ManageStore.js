import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Divider, Button, Text } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { useStores, useItems, useMe, useUsers } from '~/contexts';
import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';

import { ItemList } from '../items/components';
import { StoreHeader } from './components';

export default function ManageStore({ navigation }) {
  const meCtx = useMe();
  const usersCtx = useUsers();
  const storesCtx = useStores();
  const itemsCtx = useItems();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      itemsCtx.refresh();
    }
  }, [isFocus]);

  const myId = meCtx.me.id;

  const myUser = usersCtx.users.filter((user) => user.id === myId)[0];
  const phone = myUser.phone;

  const myStore = storesCtx.stores.filter((store) => store.ownerId === myId)[0];

  if (!myStore) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You do not have your own store</Text>
      </View>
    );
  }

  const items = itemsCtx.items.filter((item) => item.storeId === myStore.id);

  useEffect(() => {
    navigation.setOptions({
      title: myStore.name,
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
    navigation.navigate('CreateItem');
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <StoreHeader
          store={myStore}
          phone={phone}
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
