import { StyleSheet, View, Text } from 'react-native';

export default function ProfileDetails() {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
