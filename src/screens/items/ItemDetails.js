import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useItems } from '~/contexts';

export default function ItemDetails({ navigation, route }) {
  const itemsCtx = useItems();
  const item = itemsCtx.items.filter((item) => item.id === route.params.id)[0];

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
      hasCart: true,
    });
  }, [navigation]);

  return (
    <View style={styles.screenContainer}>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
