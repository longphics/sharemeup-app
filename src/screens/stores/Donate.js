import { StyleSheet, View, Text } from 'react-native';

export default function Donate() {
  return (
    <View style={styles.screenContainer}>
      <Text>Donate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
