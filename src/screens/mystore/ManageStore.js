import { StyleSheet, View, Text } from 'react-native';

export default function ManageStore() {
  return (
    <View style={styles.screenContainer}>
      <Text>Manage Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
