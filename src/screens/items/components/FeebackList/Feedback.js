import { StyleSheet, View } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

import { Stars } from '~/components';
import { GlobalStyles } from '~/constants';
import { dateToString } from '~/utils';

export default function Feedback({ feedback }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={50}
          source={{ uri: feedback.user.avatar }}
          style={styles.avatar}
        />
        <View style={styles.nameContainer}>
          <Text variant="bodyLarge" style={styles.text}>
            {feedback.user.name}
          </Text>
          <Stars star={feedback.star} size={16} />
        </View>
        <View style={styles.dateContainer}>
          <Text variant="labelSmall" style={[styles.text, { opacity: 0.5 }]}>
            {dateToString(feedback.createAt)}
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>{feedback.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
    marginLeft: 0,
  },
  nameContainer: {
    flex: 1,
  },
  dateContainer: {},
  body: {},
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
