import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { useCategories } from '~/contexts';

import DatePicker from './DatePicker';
import DropList from './DropList';
import DropOption from './DropOption';
import ImagePicker from './ImagePicker';

export default function ItemForm({ onCreateItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [dateString, setDateString] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [filters, setFilters] = useState([]);
  const [imageUri, setImageUri] = useState('');

  const categories = useCategories().categories;

  const categoryList = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const handleSelectCategory = (categoryId) => {
    const filters = categories
      .filter((category) => category.id === categoryId)[0]
      .filters.map((filter) => ({ ...filter, selected: 'Phi' }));

    setFilters(filters);
    setCategoryId(categoryId);
  };

  const handleSelectOption = (filterId, optionId) => {
    setFilters((prev) => {
      const newFilters = prev.map((filter) => {
        if (filter.id === filterId) {
          return { ...filter, selected: optionId };
        }
        return filter;
      });
      return newFilters;
    });
  };

  const handleTakeImage = (imageUri) => {
    setImageUri(imageUri);
  };

  const handleCreateItem = () => {
    const options = filters.reduce(
      (acc, filter) => [...acc, filter.selected],
      [],
    );
    const data = {
      name,
      description,
      stock: parseInt(stock),
      dateString,
      categoryId,
      options,
      imageUri,
    };

    if (
      !name ||
      !description ||
      !stock ||
      !dateString ||
      !categoryId ||
      !imageUri ||
      options.length === 0
    ) {
      Alert.alert('Alert', 'Item data can not be empty');
    } else {
      onCreateItem(data);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={{ marginTop: 12 }}
          mode="outlined"
          label="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
        />

        <TextInput
          style={{ marginTop: 12 }}
          mode="outlined"
          label="Stock"
          value={stock}
          onChangeText={setStock}
          keyboardType="number-pad"
        />

        <DatePicker {...{ dateString, setDateString }} />

        <DropList list={categoryList} onSelect={handleSelectCategory} />

        {filters.map((filter) => {
          return (
            <DropOption
              filter={filter}
              onSelect={handleSelectOption}
              key={filter.id}
            />
          );
        })}

        <ImagePicker onTakeImage={handleTakeImage} />

        <Button
          style={{ marginTop: 12 }}
          mode="contained"
          onPress={handleCreateItem}
        >
          Create item
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
