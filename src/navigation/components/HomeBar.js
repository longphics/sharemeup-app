import { StyleSheet, View, Pressable } from 'react-native';
import { Appbar, IconButton, Avatar, Text } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

export default function HomeBar({ navigation }) {
  const handlePressCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Appbar.Header style={styles.topBar} mode="small">
      <Pressable style={({ pressed }) => (pressed ? styles.pressed : null)}>
        <Avatar.Image
          size={40}
          source={require('../../assets/avatars/30.png')}
          style={styles.image}
        />
      </Pressable>

      <Appbar.Content
        titleStyle={{ fontWeight: 'regular' }}
        title={
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} variant="titleMedium">
              Deliver to
            </Text>
            <View style={styles.addressContainer}>
              <Text style={styles.titleText} variant="bodyMedium">
                Ho Chi Minh City
              </Text>
              <View style={{ height: 20, justifyContent: 'center' }}>
                <IconButton
                  icon={({ color, size }) => (
                    <Icon name="edit" color={color} size={size} />
                  )}
                  onPress={() => {}}
                  size={16}
                  iconColor={GlobalStyles.colors.primary}
                />
              </View>
            </View>
          </View>
        }
      />
      <IconButton
        icon={({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        )}
        onPress={() => {}}
        iconColor={GlobalStyles.colors.onSurface}
        style={styles.middleButton}
      />
      <IconButton
        icon={({ color, size }) => (
          <Icon name="cart" color={color} size={size} />
        )}
        onPress={handlePressCart}
        iconColor={GlobalStyles.colors.onSurface}
        style={styles.rightButton}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: GlobalStyles.colors.surface,
    paddingHorizontal: 0,
  },
  image: {
    marginHorizontal: 16,
  },
  pressed: {
    opacity: 0.85,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  titleText: {
    color: GlobalStyles.colors.onSurface,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleButton: {
    marginHorizontal: 2,
  },
  rightButton: {
    marginLeft: 2,
    marginRight: 12,
  },
});
