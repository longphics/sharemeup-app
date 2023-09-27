import { createContext, useState } from 'react';

import { fetchUsers } from '~/services';

export const UsersContext = createContext({
  users: [],
  refresh: () => {},
});

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  async function refresh() {
    try {
      const res = await fetchUsers();
      if (res.status === 200) {
        setUsers(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    users,
    refresh,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
