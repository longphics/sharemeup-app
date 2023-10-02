import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { usePosts } from '~/contexts';

import { Post } from './componens';

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

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
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
    // backgroundColor: 'green',
  },
  postList: {
    marginHorizontal: 12,
  },
});
