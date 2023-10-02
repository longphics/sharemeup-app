import { useState } from 'react';
import { Alert, StyleSheet, View, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { ImagePicker } from '~/screens/mystore/components';

export default function CreatePostForm({ onCreate }) {
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleCreate = () => {
    Keyboard.dismiss();

    if (!description || !imageUri) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }

    const data = {
      description,
      imageUri,
    };
    onCreate(data);
  };

  const handleTakeImage = (imageUri) => {
    setImageUri(imageUri);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Post description:"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={5}
      />

      <ImagePicker onTakeImage={handleTakeImage} />

      <Button mode="contained" onPress={handleCreate} style={{ marginTop: 12 }}>
        Create post
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
