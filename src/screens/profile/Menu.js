import { StyleSheet, View, Text } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.screenContainer}>
      <Text>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
