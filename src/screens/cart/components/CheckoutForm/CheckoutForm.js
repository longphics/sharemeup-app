import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function CheckoutForm({ name, myAddress, myPhone }) {
  return (
    <View style={styles.container}>
      <TextInput mode="outlined" label="Name" value={name} editable={false} />

      <TextInput
        mode="outlined"
        label="Address"
        value={myAddress}
        style={{ marginTop: 12 }}
        editable={false}
      />

      <TextInput
        mode="outlined"
        label="Phone"
        value={myPhone}
        style={{ marginTop: 12 }}
        keyboardType="decimal-pad"
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
