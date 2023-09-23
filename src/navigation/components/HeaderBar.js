import { StyleSheet } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

import { Icon } from '~/components';
import { GlobalStyles } from '~/constants';

export default function HeaderBar({ navigation, options, back }) {
  return (
    <Appbar.Header
      style={styles.topBar}
      mode={back ? 'center-aligned' : 'small'}
    >
      {back ? (
        <IconButton
          icon={({ color, size }) => (
            <Icon name="back" color={color} size={size} />
          )}
          onPress={navigation.goBack}
          iconColor={GlobalStyles.colors.onSurface}
          style={styles.backButton}
        />
      ) : null}
      <Appbar.Content
        style={styles.titleContainer}
        titleStyle={styles.titleText}
        title={options.title}
        color={GlobalStyles.colors.onSurface}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: GlobalStyles.colors.surface,
    paddingHorizontal: 0,
  },
  titleContainer: {
    marginLeft: 16,
  },
  titleText: {
    color: GlobalStyles.colors.onSurface,
  },
  backButton: {
    marginHorizontal: 12,
  },
});
