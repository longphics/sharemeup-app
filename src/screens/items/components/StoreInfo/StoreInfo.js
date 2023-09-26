import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Avatar, Button } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { Icon } from '~/components';

export default function StoreInfo({ id, name, avatar, address }) {
  const navigation = useNavigation();

  const handlePressStore = () => {
    navigation.navigate('StoreDetails', {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar.Image
          size={60}
          source={{ uri: avatar }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text variant="bodyLarge" style={styles.text}>
            {name}
          </Text>
          <View style={styles.addressContainer}>
            <Icon
              style={{ marginRight: 2 }}
              name="location"
              color={GlobalStyles.colors.error}
              size={16}
            />
            <Text variant="labelSmall" style={styles.text}>
              {address}
            </Text>
          </View>
        </View>
        <View style={{ width: 120 }}>
          <Button
            icon={({ color, size }) => (
              <Icon name="store" color={color} size={size} />
            )}
            onPress={handlePressStore}
          >
            View store
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
    marginLeft: 0,
  },
  info: {
    flex: 1,
  },
  addressContainer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
