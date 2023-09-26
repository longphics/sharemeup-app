import { createContext, useState } from 'react';

import { fetchOrders } from '~/services';

export const OrdersContext = createContext({
  orders: [],
  refresh: () => {},
});

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  async function refresh() {
    try {
      const res = await fetchOrders();
      if (res.status === 200) {
        setOrders(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    orders,
    refresh,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
