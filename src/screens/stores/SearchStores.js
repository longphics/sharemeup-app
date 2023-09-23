import { StyleSheet, View, Text } from 'react-native';

export default function SearchStores() {
  return (
    <View style={styles.screenContainer}>
      <Text>Search Stores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
