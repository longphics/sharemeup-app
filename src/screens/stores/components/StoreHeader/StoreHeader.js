import { StyleSheet, View, Image } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';

import { Icon, VerticalLine } from '~/components';
import { GlobalStyles } from '~/constants';
import { useUsers } from '~/contexts';

export default function StoreHeader({ store }) {
  const usersCtx = useUsers();
  const ownerUser = usersCtx.users.filter(
    (user) => user.id === store.ownerId,
  )[0];

  const handlePressFollow = () => {
    console.log('Follow');
  };

  const handlePressDonate = () => {
    console.log('Donate');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: store.background }} style={styles.background} />
      <View style={styles.part1}>
        <Avatar.Image
          size={60}
          source={{ uri: store.avatar }}
          style={styles.avatar}
        />
        <View style={styles.part1_col1}>
          <View style={styles.part1_col1_line1}>
            <Text style={styles.text} variant="bodyLarge">
              {store.name}
            </Text>
            <Icon
              name="star-fill"
              size={24}
              color={GlobalStyles.colors.primary}
              style={styles.icon}
            />
            <Text style={styles.text} variant="bodyLarge">
              {parseFloat(store.star).toFixed(1)}
            </Text>
          </View>
          <View style={styles.part1_col1_line2}>
            <Text style={styles.text} variant="bodySmall">
              {store.follow} followers
            </Text>
            <VerticalLine />
            <Text style={styles.text} variant="bodySmall">
              {store.sold} sold
            </Text>
          </View>
        </View>
        <View style={styles.par1_col2}>
          <Button
            mode="contained-tonal"
            onPress={handlePressFollow}
            textColor={GlobalStyles.colors.primary}
          >
            Follow
          </Button>
        </View>
      </View>
      <View style={styles.part2}>
        <View style={styles.part2_col1}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Address</Text>
          <Text style={[styles.text, { fontWeight: 'bold', marginTop: 4 }]}>
            Phone
          </Text>
        </View>
        <View style={styles.part2_col2}>
          <Text style={styles.text}>{store.address}</Text>
          <Text style={[styles.text, { marginTop: 4 }]}>{ownerUser.phone}</Text>
        </View>
        <View style={styles.part2_col3}>
          <Button
            onPress={handlePressDonate}
            textColor={GlobalStyles.colors.tertiary}
          >
            Donate
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  background: {
    height: 150,
    borderRadius: 20,
  },
  part1: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  part1_col1: {
    marginLeft: 6,
    flex: 1,
  },
  part1_col1_line1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
  },
  part1_col1_line2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  par1_col2: {
    width: 95,
  },
  part2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    paddingTop: 20,
    paddingBottom: 8,
  },
  part2_col1: {},
  part2_col2: {
    marginLeft: 8,
    flex: 1,
  },
  part2_col3: {
    width: 95,
  },
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
