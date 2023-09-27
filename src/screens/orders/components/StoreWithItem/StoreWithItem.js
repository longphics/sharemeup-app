import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import Item from './Item';
import Store from './Store';

export default function StoreWithItem({ order, onPressButton, onPressDetail }) {
  const handlePressDetail = () => {
    onPressDetail(order.id);
  };

  const handlePressButton = () => {
    onPressButton(order.id);
  };

  let buttonText;
  let buttonStyle;
  let buttonTextColor;

  switch (order.status) {
    case 'Waiting':
      buttonText = 'Cancel';
      buttonStyle = {
        borderColor: GlobalStyles.colors.error,
      };
      buttonTextColor = GlobalStyles.colors.error;
      break;
    case 'Taking':
      buttonText = 'Received';
      break;
    case 'Received':
      buttonText = 'Feedback';
      buttonStyle = {
        borderColor: GlobalStyles.colors.primary,
      };
      break;
  }

  let button = order.status !== 'Canceled' && (
    <>
      <Divider />
      <View style={styles.buttonContainer}>
        <Button
          mode={order.status === 'Taking' ? 'contained' : 'outlined'}
          onPress={handlePressButton}
          style={[{ marginTop: 12 }, buttonStyle]}
          textColor={buttonTextColor}
        >
          {buttonText}
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
        <Store
          status={order.status}
          id={order.storeId}
          name={order.store.name}
          onPressDetail={onPressDetail}
        />

        {order.orderElements.map((orderElement) => {
          const item = orderElement.item;
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
  buttonContainer: {},
  pressed: {
    opacity: 0.85,
  },
});
