import { createContext, useState } from 'react';

import { fetchStores } from '~/services';

export const StoresContext = createContext({
  stores: [],
  refresh: () => {
    return new Promise();
  },
});

export default function StoresProvider({ children }) {
  const [stores, setStores] = useState([]);

  async function refresh() {
    try {
      const res = await fetchStores();
      if (res.status === 200) {
        setStores(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    stores,
    refresh,
  };

  return (
    <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
  );
}
