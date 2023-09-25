import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { Icon, Stars } from '~/components';

export default function Item({
  id,
  name,
  image,
  address,
  sold,
  star,
  stock,
  index,
  onPress,
}) {
  const handlePress = () => {
    onPress(id);
  };
  return (
    <View
      style={[
        styles.container,
        index % 2 ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={handlePress}
      >
        <View style={styles.itemContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.line1}>
            <Text variant="bodyLarge" style={styles.text}>
              {name}
            </Text>
          </View>
          <View style={styles.line2}>
            <Stars star={star} size={16} />
          </View>
          <View style={styles.line3}>
            <Text variant="labelSmall" style={styles.text}>
              {sold} sold
            </Text>
          </View>
          <View style={styles.line4}>
            <View style={styles.addressContainer}>
              <Icon
                style={styles.iconStyle}
                name="location"
                color={GlobalStyles.colors.error}
                size={16}
              />
              <Text variant="labelSmall" style={styles.text}>
                {address}
              </Text>
            </View>
            <View styles={styles.stockContainer}>
              <Text variant="labelSmall" style={styles.text}>
                Stock: {stock}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingBottom: 12,
  },
  leftContainer: {
    paddingRight: 6,
  },
  rightContainer: {
    paddingLeft: 6,
  },
  pressed: {
    opacity: 0.85,
  },
  itemContainer: {
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainerLow,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  line1: {
    marginTop: 10,
    marginHorizontal: 12,
  },
  line2: {
    marginHorizontal: 12,
    marginTop: 4,
  },
  line3: {
    marginHorizontal: 12,
    marginTop: 4,
  },
  line4: {
    marginHorizontal: 12,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressContainer: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 2,
  },
  stockContainer: {},
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
