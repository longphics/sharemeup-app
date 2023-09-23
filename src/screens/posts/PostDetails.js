import { StyleSheet, View, Text } from 'react-native';

export default function PostDetails() {
  return (
    <View style={styles.screenContainer}>
      <Text>Post Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
