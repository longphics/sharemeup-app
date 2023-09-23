import { StyleSheet, View, Text } from 'react-native';

export default function Checkout() {
  return (
    <View style={styles.screenContainer}>
      <Text>Checkout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
