import { createContext, useState } from 'react';

import { fetchCart, updateCart } from '~/services';

export const CartContext = createContext({
  cartElements: [],
  refresh: () => {
    return new Promise();
  },
  set: (cartElements) => {},
  update: () => {
    return new Promise();
  },
});

export default function CartProvider({ children }) {
  const [cartElements, setCartElements] = useState([]);

  async function refresh() {
    try {
      const res = await fetchCart();
      if (res.status === 200) {
        setCartElements(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function set(cartElements) {
    setCartElements(cartElements);
  }

  async function update() {
    try {
      const res = await updateCart(cartElements);
      if (res.status === 201) {
        console.log('Update cart success');
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    cartElements,
    refresh,
    set,
    update,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
