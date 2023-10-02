import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { useUsers } from '~/contexts';

import Item from './Item';
import Receiver from './Receiver';

export default function ReceiverWithItem({
  gift,
  onPressCancel,
  onPressDetail,
}) {
  const usersCtx = useUsers();
  const receiver = usersCtx.users.filter(
    (user) => user.id === gift.receiveUserId,
  )[0];

  const handlePressCancel = () => {
    onPressCancel(gift.id);
  };

  const handlePressDetail = () => {
    onPressDetail(gift.id);
  };

  const handlePressWho = (id) => {
    console.log(id);
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
            style={{ borderColor: GlobalStyles.colors.error, width: '100%' }}
            textColor={GlobalStyles.colors.error}
          >
            Cancel
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
        <Receiver
          status={gift.status}
          id={receiver.id}
          name={receiver.name}
          onPressWho={handlePressWho}
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
