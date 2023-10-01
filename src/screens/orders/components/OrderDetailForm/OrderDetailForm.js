import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { formatDate } from '~/utils';

// aboutText
// user: 'Store'
// store: 'Receiver'
// receiver: 'Giver'
// giver: 'Receiver'
export default function OrderDetailForm({
  name,
  phone,
  address,
  createdDate,
  status,
  aboutText,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={`${aboutText} name`}
        value={name}
        editable={false}
      />
      <TextInput
        mode="outlined"
        label={`${aboutText} phone`}
        value={phone}
        style={{ marginTop: 12 }}
        editable={false}
      />
      <TextInput
        mode="outlined"
        label={`${aboutText} address`}
        value={address}
        style={{ marginTop: 12 }}
        editable={false}
      />
      <TextInput
        mode="outlined"
        label={'Created date'}
        value={formatDate(createdDate)}
        style={{ marginTop: 12 }}
        editable={false}
      />
      <TextInput
        mode="outlined"
        label={'Status'}
        value={status}
        style={{ marginTop: 12 }}
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
