import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function Menu({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Button
        onPress={() => {
          navigation.navigate('StoreTab', {
            screen: 'ManageStore',
          });
        }}
      >
        Manage Store
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
