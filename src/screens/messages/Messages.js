import { StyleSheet, View, Text } from 'react-native';

export default function Messages() {
  return (
    <View style={styles.screenContainer}>
      <Text>Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
