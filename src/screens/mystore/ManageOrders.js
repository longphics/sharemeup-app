import { StyleSheet, View, Text } from 'react-native';

export default function ManageOrders() {
  return (
    <View style={styles.screenContainer}>
      <Text>Manage Orders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
