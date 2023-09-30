import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function CheckoutForm({
  name,
  address,
  phone,
  setAddress,
  setPhone,
}) {
  return (
    <View style={styles.container}>
      <TextInput mode="outlined" label="Name" value={name} editable={false} />

      <TextInput
        mode="outlined"
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={{ marginTop: 12 }}
      />

      <TextInput
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={{ marginTop: 12 }}
        keyboardType="decimal-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
