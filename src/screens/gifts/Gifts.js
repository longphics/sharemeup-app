import { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';

import { useMe, useGifts } from '~/contexts';
import { changeGiftStatus } from '~/services';

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

  const handlePressCancel = async (giftId) => {
    Alert.alert('Confirm', 'Do you want to cancel this gift', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await changeGiftStatus(giftId, 'Canceled');
            giftsCtx.refresh();
          } catch (err) {
            Alert.alert('Error', 'Some error occur when cancel this gift');
          }
        },
      },
    ]);
  };

  const handlePressAccept = (giftId) => {
    Alert.alert('Confirm', 'Do you want to accept this gift', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await changeGiftStatus(giftId, 'Taking');
            giftsCtx.refresh();
          } catch (err) {
            Alert.alert('Error', 'Some error occur when cancel this gift');
          }
        },
      },
    ]);
  };

  const handlePressReceived = (giftId) => {
    Alert.alert('Confirm', 'Have you received this gift', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await changeGiftStatus(giftId, 'Received');
            giftsCtx.refresh();
          } catch (err) {
            Alert.alert('Error', 'Some error occur when cancel this gift');
          }
        },
      },
    ]);
  };

  const handlePressDetail = (giftId) => {
    console.log('Detail', giftId);
  };

  const handlePressWho = (id) => {
    console.log(id);
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
              onPressWho={handlePressWho}
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
