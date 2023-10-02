import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import Item from './Item';
import User from './User';
import { useItems, useUsers } from '~/contexts';

export default function UserWithItem({
  order,
  onPressCancel,
  onPressAccept,
  onPressDetail,
  onPressWho,
}) {
  const itemsCtx = useItems();
  const usersCtx = useUsers();
  const user = usersCtx.users.filter((user) => user.id === order.userId)[0];

  const handlePressCancel = () => {
    onPressCancel(order.id);
  };

  const handlePressAccept = () => {
    onPressAccept(order.id);
  };

  const handlePressDetail = () => {
    onPressDetail(order.id);
  };

  let button = order.status === 'Waiting' && (
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
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePressDetail}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <User
          status={order.status}
          id={order.userId}
          name={user.name}
          onPressWho={onPressWho}
        />

        {order.orderElements.map((orderElement) => {
          const item = itemsCtx.items.filter(
            (item) => item.id === orderElement.itemId,
          )[0];
          return (
            <Item
              name={item.name}
              image={item.images[0]}
              amount={orderElement.amount}
              key={item.id}
            />
          );
        })}

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
