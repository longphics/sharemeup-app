import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function RegisterForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = () => {
    if (!email || !name || !phone || !address || !password || !retypePassword) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }

    if (password !== retypePassword) {
      Alert.alert('Alert', 'The password you retyped is incorrect');
      return;
    }

    const data = {
      email,
      name,
      phone,
      address,
      password,
    };

    onSubmit(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={setName}
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="decimal-pad"
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Retype password"
        value={retypePassword}
        onChangeText={setRetypePassword}
        style={{ marginTop: 12 }}
      />

      <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 12 }}>
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
