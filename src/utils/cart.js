// import { useCart } from '~/contexts';

export const changeCartElement = async (itemId, amount, CartCtx, UsersCtx) => {
  // const CartCtx = useCart();

  const cartElements = CartCtx.cartElements;
  const index = cartElements.findIndex((ele) => ele.itemId === itemId);

  if (index === -1) {
    if (amount) {
      cartElements.push({ itemId, amount });
    }
  } else {
    if (amount) {
      cartElements[index].amount = amount;
    } else {
      cartElements.splice(index, 1);
    }
  }

  CartCtx.set(cartElements);
  await CartCtx.update();
  await UsersCtx.refresh();
};
