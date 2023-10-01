import { createContext, useState } from 'react';

import { fetchMe } from '~/services';

export const MeContext = createContext({
  me: {},
  refresh: (token) => {
    return new Promise();
  },
});

export default function MeProvider({ children }) {
  const [me, setMe] = useState({});

  async function refresh(token) {
    const res = await fetchMe(token);

    if (res.status === 200) {
      setMe(res.data);
    } else {
      console.log(res.status);
    }
  }

  const value = {
    me,
    refresh,
  };

  return <MeContext.Provider value={value}>{children}</MeContext.Provider>;
}
