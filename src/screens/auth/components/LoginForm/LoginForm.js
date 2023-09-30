import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [pasword, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !pasword) {
      Alert.alert('Alert', 'Email and password can not be empty');
    } else {
      onSubmit(email, pasword);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        mode="outlined"
        placeholder="Type your password"
        value={pasword}
        onChangeText={setPassword}
        style={{ marginTop: 12 }}
      />
      <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 12 }}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    alignSelf: 'stretch',
  },
});
