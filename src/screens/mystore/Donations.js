import { StyleSheet, View, Text } from 'react-native';

export default function Donations() {
  return (
    <View style={styles.screenContainer}>
      <Text>Donations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
