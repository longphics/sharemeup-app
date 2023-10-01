import { Alert, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { register } from '~/services';

import { RegisterForm } from './components';
import { useAuth, useMe, useUsers } from '~/contexts';

export default function Register() {
  const authCtx = useAuth();
  const meCtx = useMe();
  const usersCtx = useUsers();

  const handleSubmit = async (data) => {
    try {
      const res = await register(
        data.email,
        data.name,
        data.phone,
        data.address,
        data.password,
      );

      if (res.status === 201) {
        Alert.alert('Information', 'Register account successfully');
        await authCtx.reLogin(res.data.token, meCtx);
        await usersCtx.refresh();
      }
    } catch (err) {
      Alert.alert('Alert', 'Email already exists');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text variant="titleLarge" style={styles.text}>
        Share Me Up
      </Text>
      <RegisterForm onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: GlobalStyles.colors.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
});
