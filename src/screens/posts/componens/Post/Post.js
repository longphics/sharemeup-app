import { Image, StyleSheet, View } from 'react-native';
import { Text, Avatar, IconButton, Chip } from 'react-native-paper';
import { Icon } from '~/components';

import { useUsers } from '~/contexts';
import { formatDate } from '~/utils';
import { GlobalStyles } from '~/constants';

export default function Post({ post, onPressSend }) {
  const usersCtx = useUsers();
  const createUser = usersCtx.users.filter(
    (user) => user.id === post.createUserId,
  )[0];

  const handlePressSendGift = () => {
    onPressSend(post.createUserId, post.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={50}
          source={{ uri: createUser.avatar }}
          style={styles.avatar}
        />
        <View style={styles.titleContainer}>
          <Text variant="bodyLarge">{createUser.name}</Text>
          <Text variant="labelSmall">{formatDate(post.createAt)}</Text>
        </View>
        <Chip
          mode="outlined"
          selectedColor={GlobalStyles.colors.tertiary}
          style={{
            backgroundColor: 'transparent',
            width: 105,
            borderColor: GlobalStyles.colors.tertiary,
            borderRadius: 12,
          }}
          textStyle={{ flex: 1, textAlign: 'center' }}
          onPress={handlePressSendGift}
        >
          Send Gift
        </Chip>
      </View>
      <Text variant="bodyLarge" style={styles.caption}>
        {post.text}
      </Text>
      <Image source={{ uri: post.images[0] }} style={styles.image} />
      <View style={styles.footer}>
        <IconButton
          icon={({ size, color }) => (
            <Icon name="heart" size={size} color={color} />
          )}
        />
        <IconButton
          icon={({ size, color }) => (
            <Icon name="dislike" size={size} color={color} />
          )}
        />
        <IconButton
          icon={({ size, color }) => (
            <Icon name="comment" size={size} color={color} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginHorizontal: 4,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  caption: {
    marginHorizontal: 6,
    marginVertical: 6,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
