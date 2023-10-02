import { createContext, useState } from 'react';

import { fetchGifts } from '~/services';

export const GiftsContext = createContext({
  gifts: [],
  refresh: () => {
    return new Promise();
  },
});

export default function GiftsProvider({ children }) {
  const [gifts, setGifts] = useState([]);

  async function refresh() {
    try {
      const res = await fetchGifts();
      if (res.status === 200) {
        setGifts(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    gifts,
    refresh,
  };

  return (
    <GiftsContext.Provider value={value}>{children}</GiftsContext.Provider>
  );
}
