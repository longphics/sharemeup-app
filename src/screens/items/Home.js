import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
