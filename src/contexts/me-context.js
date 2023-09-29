import { createContext, useState } from 'react';

import { fetchMe } from '~/services';

export const MeContext = createContext({
  me: {},
  refresh: () => {
    return new Promise();
  },
});

export default function MeProvider({ children }) {
  const [me, setMe] = useState({});

  async function refresh() {
    try {
      const res = await fetchMe();
      if (res.status === 200) {
        setMe(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    me,
    refresh,
  };

  return <MeContext.Provider value={value}>{children}</MeContext.Provider>;
}
