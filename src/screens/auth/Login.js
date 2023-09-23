import { StyleSheet, View, Text } from 'react-native';

export default function Login() {
  return (
    <View style={styles.screenContainer}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
