import { StyleSheet, View, Text } from 'react-native';

export default function SearchPeople() {
  return (
    <View style={styles.screenContainer}>
      <Text>Search People</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
