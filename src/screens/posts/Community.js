import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { usePosts } from '~/contexts';

import { Post } from './componens';
import { Button } from 'react-native-paper';
import { GlobalStyles } from '~/constants';

export default function Commmunity({ navigation }) {
  const postCtx = usePosts();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      postCtx.refresh();
    }
  }, [isFocus]);

  const handlePressSend = (createUserId, postId) => {
    navigation.navigate('CreateGift', {
      receiverId: createUserId,
      postId,
    });
  };

  const handleCreatePost = () => {
    navigation.navigate('CreatePost');
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Button
          mode="contained-tonal"
          onPress={handleCreatePost}
          style={{ marginHorizontal: 12, marginVertical: 6 }}
          textColor={GlobalStyles.colors.primary}
        >
          Create new post
        </Button>
        <View style={styles.postList}>
          {postCtx.posts.map((post) => (
            <Post post={post} key={post.id} onPressSend={handlePressSend} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  postList: {
    marginHorizontal: 12,
  },
});
