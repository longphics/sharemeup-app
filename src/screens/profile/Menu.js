import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { useAuth } from '~/contexts';

export default function Menu({ navigation }) {
  const authCtx = useAuth();

  const handlePressStore = () => {
    navigation.navigate('StoreTab', {
      screen: 'ManageStore',
    });
  };

  const handlePressManageGifts = () => {
    navigation.navigate('ManageGifts');
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
      <Button
        mode="contained-tonal"
        onPress={handlePressStore}
        textColor={GlobalStyles.colors.primary}
      >
        Manage Store
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressManageGifts}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        Manage Gifts
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressEditProfile}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        Edit Profile
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressLogout}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
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
