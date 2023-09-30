import { Alert, StyleSheet, View } from 'react-native';

import { useAuth, useMe } from '~/contexts';
import { GlobalStyles } from '~/constants';

import { LoginForm } from './components';
import { Text } from 'react-native-paper';

export default function Login() {
  const authCtx = useAuth();
  const meCtx = useMe();

  const handleSubmit = async (email, password) => {
    const res = await authCtx.login(email, password);
    if (!res) {
      Alert.alert('Alert', 'Credentials incorrect');
    } else {
      meCtx.refresh(res);
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
