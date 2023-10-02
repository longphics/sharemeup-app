import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

import { useMe, useGifts } from '~/contexts';

import { GiverWithItem } from './components';

export default function Gifts({ navigation }) {
  const [tab, setTab] = useState('Waiting');

  const meCtx = useMe();
  const giftsCtx = useGifts();

  const myGifts = giftsCtx.gifts.filter(
    (gift) => gift.receiveUserId === meCtx.me.id,
  );

  if (!myGifts.length) {
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

  const myDisplayGifts = myGifts.filter((gift) => gift.status === tab);

  const handlePressCancel = (giftId) => {
    console.log('Cancel', giftId);
  };

  const handlePressAccept = (giftId) => {
    console.log('Accept', giftId);
  };

  const handlePressReceived = (giftId) => {
    console.log('Received', giftId);
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
        {myDisplayGifts.map((gift) => {
          return (
            <GiverWithItem
              gift={gift}
              key={gift.id}
              onPressCancel={handlePressCancel}
              onPressAccept={handlePressAccept}
              onPressReceived={handlePressReceived}
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
