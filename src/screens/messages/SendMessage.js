import { StyleSheet, View, Text } from 'react-native';

export default function SendMessages() {
  return (
    <View style={styles.screenContainer}>
      <Text>Send Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
