import { Alert, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useAuth, useMe } from '~/contexts';
import { GlobalStyles } from '~/constants';
import { getKey } from '~/services';

import { LoginForm } from './components';
import { useEffect } from 'react';

export default function Login() {
  const authCtx = useAuth();
  const meCtx = useMe();

  useEffect(() => {
    const getStoredToken = async () => {
      const storedToken = await getKey('token');
      if (storedToken) {
        authCtx.reLogin(storedToken, meCtx);
      }
    };
    getStoredToken();
  }, []);

  const handleSubmit = async (email, password) => {
    const res = await authCtx.login(email, password, meCtx);
    if (!res) {
      Alert.alert('Alert', 'Credentials incorrect');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text variant="titleLarge" style={styles.text}>
        Share Me Up
      </Text>
      <LoginForm onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GlobalStyles.colors.primary,
    marginBottom: 12,
  },
});
