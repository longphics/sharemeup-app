import { useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';

import { useMe, usePosts, useUsers } from '~/contexts';
import { GlobalStyles } from '~/constants';

import { Post } from '../posts/componens';

export default function ProfileDetails({ route, navigation }) {
  const meCtx = useMe();
  const usersCtx = useUsers();
  const postsCtx = usePosts();

  let userId = route.params?.userId;
  const isMyProfile = !userId;
  userId = userId || meCtx.me.id;

  const user = usersCtx.users.filter((user) => user.id === userId)[0];

  const posts = postsCtx.posts.filter((post) => post.createUserId === userId);

  useEffect(() => {
    navigation.setOptions({
      title: user.name,
    });
  });

  const handleCreatePost = () => {
    navigation.navigate('CreatePost');
  };

  const handlePressSend = (createUserId, postId) => {
    navigation.navigate('CreateGift', {
      receiverId: createUserId,
      postId,
    });
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.backgroundContainer}>
            <Image
              source={{ uri: user.background }}
              style={styles.background}
            />
          </View>
          <Avatar.Image
            size={60}
            source={{ uri: user.avatar }}
            style={{ marginVertical: 6 }}
          />
          <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
            {user.name}
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Name"
          value={user.name}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Address"
          value={user.address}
          editable={false}
          style={{ marginTop: 12 }}
        />
        <TextInput
          mode="outlined"
          label="Phone"
          value={user.phone}
          editable={false}
          style={{ marginTop: 12 }}
        />
        <TextInput
          mode="outlined"
          label="Good action"
          value={user.goodAction.toString()}
          editable={false}
          style={{ marginTop: 12 }}
        />
      </View>

      <Button
        mode="contained-tonal"
        onPress={handleCreatePost}
        style={{ marginHorizontal: 12, marginVertical: 6 }}
        textColor={GlobalStyles.colors.primary}
      >
        Create new post
      </Button>

      <View style={styles.postList}>
        {posts.map((post) => (
          <Post post={post} key={post.id} onPressSend={handlePressSend} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  backgroundContainer: {
    width: '100%',
    paddingHorizontal: 12,
  },
  background: {
    height: 200,
    width: '100%',
    borderRadius: 16,
  },
  formContainer: {
    marginHorizontal: 12,
    marginVertical: 16,
  },
  postList: {
    marginTop: 4,
    marginHorizontal: 12,
  },
});
