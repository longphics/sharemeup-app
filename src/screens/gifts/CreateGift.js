import { Alert, StyleSheet, View } from 'react-native';

import { useGifts, useMe, usePosts, useUsers } from '~/contexts';
import { createGift } from '~/services';

import { CreateGiftForm } from './components';

export default function CreateGift({ route, navigation }) {
  const usersCtx = useUsers();
  const meCtx = useMe();
  const giftsCtx = useGifts();
  const postsCtx = usePosts();

  const receiverId = route.params.receiverId;
  const receiver = usersCtx.users.filter((user) => user.id === receiverId)[0];

  const postId = route.params.postId;

  const giverId = meCtx.me.id;

  const handleSendGift = async (data) => {
    const sendData = {
      description: data.description,
      imageUri: data.imageUri,
      name: data.itemName,
      amount: data.amount,
      postId,
      giverId,
      receiverId,
    };
    try {
      await createGift(sendData);
      giftsCtx.refresh();
      postsCtx.refresh();
      Alert.alert('Information', 'Create gift successfully', [
        {
          text: 'OK',
          onPress: navigation.goBack,
        },
      ]);
    } catch (err) {
      Alert.alert('Error', 'Some error occur when create gift');
    }
  };

  const creatGiftFormProps = {
    receiverName: receiver.name,
    receiverAddress: receiver.address,
    receiverPhone: receiver.phone,
    onSendGift: handleSendGift,
  };

  return (
    <View style={styles.screenContainer}>
      <CreateGiftForm {...creatGiftFormProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
