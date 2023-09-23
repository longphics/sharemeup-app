import { StyleSheet, View, Text } from 'react-native';

export default function SearchItems() {
  return (
    <View style={styles.screenContainer}>
      <Text>Search Items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
