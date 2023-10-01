import { useState } from 'react';
import { StyleSheet, View, Alert, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';

import { useAuth, useMe, useStores } from '~/contexts';
import { editStore } from '~/services';

import { EditStoreForm } from './components';

export default function EditStore({ navigation }) {
  const meCtx = useMe();
  const storesCtx = useStores();
  const authCtx = useAuth();

  const myStore = storesCtx.stores.filter(
    (store) => store.id === meCtx.me.ownStore.id,
  )[0];

  const [name, setName] = useState(myStore.name);
  const [phone, setPhone] = useState(myStore.phone);
  const [address, setAddress] = useState(myStore.address);

  const handlePressSave = async () => {
    if (!name || !phone || !address) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }

    try {
      await editStore(authCtx.token, name, phone, address);
      await storesCtx.refresh();
      Alert.alert('Information', 'Update your store successfully', [
        {
          text: 'OK',
          onPress: () => {
            Keyboard.dismiss();
            setTimeout(() => {
              navigation.goBack();
            }, 500);
          },
        },
      ]);
    } catch (err) {
      console.log(err);
      Alert.alert('Error', 'Some error occur when saving');
    }
  };

  const editStoreFormProps = {
    name,
    phone,
    address,
    setName,
    setPhone,
    setAddress,
  };

  return (
    <View style={styles.screenContainer}>
      <EditStoreForm {...editStoreFormProps} />
      <Button mode="contained" onPress={handlePressSave} style={styles.button}>
        Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  button: {
    marginTop: 16,
    marginHorizontal: 12,
  },
});
