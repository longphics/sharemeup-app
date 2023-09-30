import { createContext, useState } from 'react';

import { signin } from '~/services';

export const AuthContext = createContext({
  token: '',
  login: (email, password) => new Promise(),
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('');

  async function login(email, password) {
    try {
      const res = await signin(email, password);
      if (res.status === 200) {
        setToken(res.data.token);
        return res.data.token;
      } else {
        console.log(res.status);
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  function logout() {
    setToken('');
  }

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
