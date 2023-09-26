import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';

export default function Item({ name, image, amount }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{name}</Text>
          <Text style={{ marginTop: 6 }}>{amount} items</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    height: 120,
    width: '45%',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  textContainer: {
    width: '100%',
  },
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
