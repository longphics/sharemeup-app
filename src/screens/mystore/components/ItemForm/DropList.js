import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';

export default function DropList({ list, onSelect }) {
  const [value, setValue] = useState('');
  const [showCategory, setShowCategory] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setValue(value);
  };

  return (
    <View style={styles.container}>
      <DropDown
        label={'Category'}
        mode={'outlined'}
        visible={showCategory}
        showDropDown={() => setShowCategory(true)}
        onDismiss={() => setShowCategory(false)}
        value={value}
        setValue={handleSelect}
        list={list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});
