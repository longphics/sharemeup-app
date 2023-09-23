import { StyleSheet, View, Text } from 'react-native';

export default function GoodActions() {
  return (
    <View style={styles.screenContainer}>
      <Text>Good Actions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
