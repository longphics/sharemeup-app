import { StyleSheet, View, Text } from 'react-native';

export default function ItemDetails() {
  return (
    <View style={styles.screenContainer}>
      <Text>Item Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
