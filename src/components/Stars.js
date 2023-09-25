import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '~/constants';

import Icon from './Icon';

export default function Stars({
  star,
  color = GlobalStyles.colors.primary,
  size = 24,
  style,
}) {
  const integer = Math.floor(star);

  let icons = [];
  for (let i = 0; i < integer; i++) {
    icons.push(
      <Icon name="star-fill" color={color} size={size} key={Math.random()} />,
    );
  }

  if (integer < star) {
    icons.push(
      <Icon name="star-half" color={color} size={size} key={Math.random()} />,
    );
  }

  const unfill = 5 - icons.length;
  for (let i = 0; i < unfill; i++) {
    icons.push(
      <Icon name="star" color={color} size={size} key={Math.random()} />,
    );
  }

  return <View style={[styles.container, style]}>{icons}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
