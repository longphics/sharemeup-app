import { StyleSheet, View } from 'react-native';

import { createItem } from '~/services';
import { useAuth } from '~/contexts';

import { ItemForm } from './components';

export default function CreateItem({ navigation }) {
  const authCtx = useAuth();

  const handleCreateItem = (data) => {
    createItem(authCtx.token, data);
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
