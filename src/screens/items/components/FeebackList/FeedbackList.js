import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';

import Feedback from './Feedback';
import { GlobalStyles } from '~/constants';

export default function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <View style={{ height: 100 }}></View>;
  }
  return (
    <View style={styles.container}>
      {feedbacks.map((feedback) => {
        return (
          <View key={feedback.id}>
            <Feedback feedback={feedback} />
            <Divider horizontalInset />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 100,
    borderColor: GlobalStyles.colors.primary,
    borderWidth: 1,
    borderRadius: 20,
  },
});
