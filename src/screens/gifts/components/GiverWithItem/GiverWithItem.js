import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { useUsers } from '~/contexts';

import Item from './Item';
import Giver from './Giver';

export default function GiverWithItem({
  gift,
  onPressCancel,
  onPressAccept,
  onPressReceived,
  onPressDetail,
}) {
  const usersCtx = useUsers();
  const giver = usersCtx.users.filter((user) => user.id === gift.giveUserId)[0];

  const handlePressCancel = () => {
    onPressCancel(gift.id);
  };

  const handlePressAccept = () => {
    onPressAccept(gift.id);
  };

  const handlePressReceived = () => {
    onPressReceived(gift.id);
  };

  const handlePressDetail = () => {
    onPressDetail(gift.id);
  };

  let button;

  if (gift.status === 'Waiting') {
    button = (
      <>
        <Divider />
        <View style={styles.buttonContainer}>
          <Button
            mode={'outlined'}
            onPress={handlePressCancel}
            style={{ borderColor: GlobalStyles.colors.error, width: '48%' }}
            textColor={GlobalStyles.colors.error}
          >
            Cancel
          </Button>

          <Button
            mode={'contained'}
            onPress={handlePressAccept}
            style={{ width: '48%' }}
          >
            Accept
          </Button>
        </View>
      </>
    );
  } else if (gift.status === 'Taking') {
    button = (
      <>
        <Divider />
        <View style={styles.buttonContainer}>
          <Button
            mode={'contained'}
            onPress={handlePressReceived}
            style={{ width: '100%' }}
          >
            Received
          </Button>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePressDetail}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Giver
          status={gift.status}
          id={giver.id}
          name={giver.name}
          onPressDetail={onPressDetail}
        />

        <Item
          name={gift.name}
          image={gift.images[0]}
          amount={gift.amount}
          description={gift.description}
          key={gift.id}
        />

        {button}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainer,
  },
  buttonContainer: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
});
