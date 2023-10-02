import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

import { useMe, useGifts } from '~/contexts';

import { ReceiverWithItem } from './components';

export default function ManageGifts() {
  const [tab, setTab] = useState('Waiting');

  const meCtx = useMe();
  const giftsCtx = useGifts();

  const mySentGifts = giftsCtx.gifts.filter(
    (gift) => gift.giveUserId === meCtx.me.id,
  );

  if (!mySentGifts.length) {
    return (
      <View
        style={[
          styles.screenContainer,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text variant="bodyLarge">Gift is empty</Text>
      </View>
    );
  }

  const mySentDisplayGifts = mySentGifts.filter((gift) => gift.status === tab);

  const handlePressCancel = (giftId) => {
    console.log('Cancel', giftId);
  };

  const handlePressDetail = (giftId) => {
    console.log('Detail', giftId);
  };

  return (
    <View style={styles.screenContainer}>
      <SegmentedButtons
        value={tab}
        onValueChange={setTab}
        buttons={[
          { value: 'Waiting', label: 'Waiting' },
          { value: 'Taking', label: 'Taking' },
          { value: 'Received', label: 'Received' },
          { value: 'Canceled', label: 'Canceled' },
        ]}
        style={{ marginHorizontal: 12, marginBottom: 12 }}
      />

      <ScrollView>
        {mySentDisplayGifts.map((gift) => {
          return (
            <ReceiverWithItem
              gift={gift}
              key={gift.id}
              onPressCancel={handlePressCancel}
              onPressDetail={handlePressDetail}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
