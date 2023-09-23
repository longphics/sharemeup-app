import { StyleSheet, View, Text } from 'react-native';

export default function ManageItem() {
  return (
    <View style={styles.screenContainer}>
      <Text>Manage Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
