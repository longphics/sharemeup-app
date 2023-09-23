import { StyleSheet, View, Text } from 'react-native';

export default function ChangePassword() {
  return (
    <View style={styles.screenContainer}>
      <Text>Change Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
