import { StyleSheet, View, Text } from 'react-native';

export default function CreateItem() {
  return (
    <View style={styles.screenContainer}>
      <Text>Create Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
