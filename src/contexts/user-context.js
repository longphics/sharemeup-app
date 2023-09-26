import { createContext, useState } from 'react';

import { fetchUser } from '~/services';

export const UserContext = createContext({
  user: [],
  refresh: () => {},
});

export default function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  async function refresh() {
    try {
      const res = await fetchUser();
      if (res.status === 200) {
        setUser(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    user,
    refresh,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
