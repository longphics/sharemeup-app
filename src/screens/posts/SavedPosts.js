import { StyleSheet, View, Text } from 'react-native';

export default function SavedPost() {
  return (
    <View style={styles.screenContainer}>
      <Text>Saved Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
