import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '~/constants';

export default function VerticalLine() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    height: '80%',
    width: 1,
    backgroundColor: GlobalStyles.colors.onSurface,
    alignSelf: 'center',
    opacity: 0.5,
  },
});
