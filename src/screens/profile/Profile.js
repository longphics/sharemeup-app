import { StyleSheet, View, Text } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
