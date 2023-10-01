import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

import CategoryList from './CategoryList';

export default function FilterBar({ categories, onPressCategory }) {
  const handlePressFilter = () => {
    console.log('Press Filter');
  };

  return (
    <View style={styles.container}>
      <CategoryList categories={categories} onPressCategory={onPressCategory} />
      <IconButton
        icon={({ color, size }) => (
          <Icon name="filter" color={color} size={size} />
        )}
        onPress={handlePressFilter}
        iconColor={GlobalStyles.colors.onSurface}
        size={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    paddingVertical: 2,
    backgroundColor: GlobalStyles.colors.surface,
  },
});
