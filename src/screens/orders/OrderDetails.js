import { StyleSheet, View, Text } from 'react-native';

export default function OrderDetails() {
  return (
    <View style={styles.screenContainer}>
      <Text>Order Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
