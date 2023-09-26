import { StyleSheet, View, Text } from 'react-native';

export default function OrderDetails({ route }) {
  return (
    <View style={styles.screenContainer}>
      <Text>Order Details: {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
