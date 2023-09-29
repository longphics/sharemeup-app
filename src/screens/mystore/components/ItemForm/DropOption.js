import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';

export default function DropOption({ filter, onSelect }) {
  const [optionId, setOptionId] = useState('');
  const [show, setShow] = useState(false);

  const handleSelect = (optionId) => {
    onSelect(filter.id, optionId);
    setOptionId(optionId);
  };

  const optionList = filter.options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  return (
    <View style={styles.container}>
      <DropDown
        label={filter.name}
        mode={'outlined'}
        visible={show}
        showDropDown={() => setShow(true)}
        onDismiss={() => setShow(false)}
        value={optionId}
        setValue={handleSelect}
        list={optionList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});
