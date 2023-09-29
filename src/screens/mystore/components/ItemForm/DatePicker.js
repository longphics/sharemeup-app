import { useState } from 'react';
import { StyleSheet, View, Pressable, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { formatDate } from '~/utils';

export default function DatePicker({ dateString, setDateString }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleChangeDate = ({ type }, selectedDate) => {
    if (type === 'set') {
      if (Platform.OS === 'android') {
        toggleDatePicker();
      }
      setDateString(formatDate(selectedDate));
      setDate(selectedDate);
    } else {
      toggleDatePicker();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDatePicker}>
        <TextInput
          mode="outlined"
          label="Expired date"
          value={dateString}
          onChangeText={setDateString}
          editable={false}
          onPressIn={toggleDatePicker}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={handleChangeDate}
          style={styles.datePicker}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  datePicker: {
    height: 120,
  },
});
