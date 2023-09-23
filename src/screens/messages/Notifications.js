import { StyleSheet, View, Text } from 'react-native';

export default function Notifications() {
  return (
    <View style={styles.screenContainer}>
      <Text>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
