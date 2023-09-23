import { StyleSheet, View, Text } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.screenContainer}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
