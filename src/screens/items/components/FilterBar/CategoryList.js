import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { GlobalStyles } from '~/constants';

function CategoryList({ categories, onPressCategory }) {
  const [activeCategory, setActiveCategory] = useState('Food');

  function handlePressCategory(category) {
    setActiveCategory(category);
    onPressCategory(category);
  }

  const buttonStyle = (category) => [
    styles.button,
    activeCategory === category ? styles.activeButton : null,
  ];

  const textColor = (category) => {
    return activeCategory === category
      ? GlobalStyles.colors.primary
      : GlobalStyles.colors.onSurface;
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          style={buttonStyle(category)}
          mode="text"
          onPress={handlePressCategory.bind(this, category)}
          textColor={textColor(category)}
          rippleColor={'transparent'}
        >
          {category}
        </Button>
      ))}
    </ScrollView>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  button: {
    marginHorizontal: 6,
    opacity: 0.2,
  },
  activeButton: {
    opacity: 1,
  },
});
