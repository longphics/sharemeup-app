import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useAuth } from '~/contexts';

export default function Menu({ navigation }) {
  const authCtx = useAuth();

  const handlePressStore = () => {
    navigation.navigate('StoreTab', {
      screen: 'ManageStore',
    });
  };

  const handlePressEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handlePressLogout = () => {
    Alert.alert('Confirm', 'Do you want to logout', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          authCtx.logout();
        },
      },
    ]);
  };

  return (
    <View style={styles.screenContainer}>
      <Button mode="contained-tonal" onPress={handlePressStore}>
        Manage Store
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressEditProfile}
        style={{ marginTop: 12 }}
      >
        Edit Profile
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressLogout}
        style={{ marginTop: 12 }}
      >
        Log out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
});
