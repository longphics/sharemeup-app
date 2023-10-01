import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useAuth, useMe, useUsers } from '~/contexts';
import { editProfie } from '~/services';

import { EditProfileForm } from './component';

export default function EditProfile() {
  const meCtx = useMe();
  const usersCtx = useUsers();
  const authCtx = useAuth();

  const myUser = usersCtx.users.filter((user) => user.id === meCtx.me.id)[0];

  const [name, setName] = useState(myUser.name);
  const [phone, setPhone] = useState(myUser.phone);
  const [address, setAddress] = useState(myUser.address);

  const handlePressSave = async () => {
    if (!name || !phone || !address) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }

    try {
      await editProfie(authCtx.token, name, phone, address);
      Alert.alert('Information', 'Update your profile successfully');
    } catch (err) {
      Alert.alert('Error', 'Some error occur when saving');
    }
  };

  const editProfileFormProps = {
    name,
    phone,
    address,
    setName,
    setPhone,
    setAddress,
  };

  return (
    <View style={styles.screenContainer}>
      <EditProfileForm {...editProfileFormProps} />
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
