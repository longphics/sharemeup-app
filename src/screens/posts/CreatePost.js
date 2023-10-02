import { StyleSheet, View, Text, Alert } from 'react-native';

import { useMe, usePosts } from '~/contexts';
import { createPost } from '~/services';

import { CreatePostForm } from './componens';

export default function CreatePost({ navigation }) {
  const meCtx = useMe();
  const postsCtx = usePosts();

  const handleCreate = async (data) => {
    const sendData = {
      userId: meCtx.me.id,
      description: data.description,
      imageUri: data.imageUri,
    };

    try {
      await createPost(sendData);
      Alert.alert('Information', 'Create post successfully', [
        {
          text: 'OK',
          onPress: () => {
            postsCtx.refresh();
            navigation.goBack();
          },
        },
      ]);
    } catch (err) {
      Alert.alert('Alert', 'Some error occur when create new post');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <CreatePostForm onCreate={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
