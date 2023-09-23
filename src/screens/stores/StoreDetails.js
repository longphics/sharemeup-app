import { StyleSheet, View, Text } from 'react-native';

export default function StoreDetails() {
  return (
    <View style={styles.screenContainer}>
      <Text>Store Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
