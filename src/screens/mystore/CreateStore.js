import { StyleSheet, View, Text } from 'react-native';

export default function CreateStore() {
  return (
    <View style={styles.screenContainer}>
      <Text>Create Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
