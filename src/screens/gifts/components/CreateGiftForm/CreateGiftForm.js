import { useState } from 'react';
import { ScrollView, StyleSheet, View, Keyboard, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { ImagePicker } from '../../../mystore/components';

export default function CreateGiftForm({
  receiverName,
  receiverAddress,
  receiverPhone,
  onSendGift,
}) {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleTakeImage = (imageUri) => {
    setImageUri(imageUri);
  };

  const handleSendGift = () => {
    Keyboard.dismiss();

    if (!itemName || !amount || !description || !imageUri) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }

    const data = {
      itemName,
      amount,
      description,
      imageUri,
    };

    onSendGift(data);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          mode="flat"
          label="Receiver name"
          value={receiverName}
          editable={false}
        />
        <TextInput
          mode="flat"
          label="Receiver address"
          value={receiverAddress}
          editable={false}
        />
        <TextInput
          mode="flat"
          label="Receiver phone"
          value={receiverPhone}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Gift name"
          value={itemName}
          onChangeText={setItemName}
          style={{ marginTop: 12 }}
        />
        <TextInput
          mode="outlined"
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
          style={{ marginTop: 12 }}
        />
        <TextInput
          mode="outlined"
          label="Description"
          value={description}
          onChangeText={setDescription}
          style={{ marginTop: 12 }}
        />

        <ImagePicker onTakeImage={handleTakeImage} />

        <Button
          mode="contained"
          onPress={handleSendGift}
          style={{ marginTop: 12 }}
        >
          Send gift
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
