import { createContext, useState } from 'react';

import { fetchItems } from '~/services';

export const ItemsContext = createContext({
  items: [],
  refresh: () => {
    return new Promise();
  },
});

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  async function refresh() {
    try {
      const res = await fetchItems();
      if (res.status === 200) {
        setItems(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    items,
    refresh,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
