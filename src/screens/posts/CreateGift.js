import { StyleSheet, View, Text } from 'react-native';

export default function CreateGift() {
  return (
    <View style={styles.screenContainer}>
      <Text>Create Gift</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
