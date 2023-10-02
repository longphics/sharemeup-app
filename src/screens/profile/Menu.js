import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { useAuth } from '~/contexts';

export default function Menu({ navigation }) {
  const authCtx = useAuth();

  const handlePressProfile = () => {
    navigation.navigate('ProfileDetails');
  };

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
        onPress={handlePressProfile}
        textColor={GlobalStyles.colors.primary}
      >
        See my profile
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressStore}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        Go to my store
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressManageGifts}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        View sent gifts
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressEditProfile}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        Edit my profile
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handlePressLogout}
        style={{ marginTop: 12 }}
        textColor={GlobalStyles.colors.primary}
      >
        Logout
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
