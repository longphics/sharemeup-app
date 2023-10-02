import { useState } from 'react';
import { Alert, StyleSheet, View, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { useMe } from '~/contexts';
import { createFeedback } from '~/services';

export default function Feedback({ navigation, route }) {
  const [star, setStar] = useState('');
  const [text, setText] = useState('');

  const meCtx = useMe();
  const userId = meCtx.me.id; //

  const itemId = route.params.itemId; //

  const handleSendFeedback = async () => {
    Keyboard.dismiss();

    if (!star || !text) {
      Alert.alert('Alert', 'Data can not be empty');
      return;
    }
    if (
      parseInt(star) !== 1 &&
      parseInt(star) !== 2 &&
      parseInt(star) !== 3 &&
      parseInt(star) !== 4 &&
      parseInt(star) !== 5
    ) {
      Alert.alert('Alert', 'Star must be a number from 1 to 5');
      return;
    }

    try {
      await createFeedback(itemId, userId, star, text);
      Alert.alert('Information', 'Send feedback successfully', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Home');
          },
        },
      ]);
    } catch (err) {
      console.log(err);
      Alert.alert('Alert', 'Some error occur when sending feedback');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TextInput
        mode="outlined"
        label="Star"
        value={star}
        onChangeText={setStar}
        keyboardType="decimal-pad"
      />
      <TextInput
        mode="outlined"
        label="Feedback"
        value={text}
        onChangeText={setText}
        style={{ marginTop: 12 }}
      />

      <Button
        mode="contained"
        onPress={handleSendFeedback}
        style={{ marginTop: 12 }}
      >
        Send feedback
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
