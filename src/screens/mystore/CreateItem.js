import { StyleSheet, View } from 'react-native';

import { createItem } from '~/services';

import { ItemForm } from './components';

export default function CreateItem({ navigation }) {
  const handleCreateItem = (data) => {
    createItem(data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.screenContainer}>
      <ItemForm onCreateItem={handleCreateItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
