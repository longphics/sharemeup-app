import { StyleSheet, View, Text } from 'react-native';

export default function ForgotPassword() {
  return (
    <View style={styles.screenContainer}>
      <Text>Forgot Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
