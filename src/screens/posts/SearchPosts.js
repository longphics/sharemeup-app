import { StyleSheet, View, Text } from 'react-native';

export default function SearchPosts() {
  return (
    <View style={styles.screenContainer}>
      <Text>Search Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
