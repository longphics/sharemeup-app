import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function EditProfileForm({
  name,
  phone,
  address,
  setName,
  setPhone,
  setAddress,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={{ marginTop: 12 }}
        keyboardType="number-pad"
      />
      <TextInput
        mode="outlined"
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={{ marginTop: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
