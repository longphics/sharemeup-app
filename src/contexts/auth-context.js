import { createContext, useState } from 'react';

import { removeKey, setKey, signin } from '~/services';

export const AuthContext = createContext({
  token: '',
  login: (email, password, meCtx) => new Promise(),
  logout: () => new Promise(),
  reLogin: (token, meCtx) => new Promise(),
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('');

  const _fetchDataAfterLogin = async (token, meCtx) => {
    await meCtx.refresh(token);
  };

  async function login(email, password, meCtx) {
    try {
      const res = await signin(email, password);
      if (res.status === 200) {
        const newToken = res.data.token;
        await _fetchDataAfterLogin(newToken, meCtx);
        await setKey('token', newToken);
        setToken(newToken);
        return newToken;
      } else {
        console.log(res.status);
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async function reLogin(token, meCtx) {
    try {
      await _fetchDataAfterLogin(token, meCtx);
      setToken(token);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async function logout() {
    await removeKey('token');
    setToken('');
  }

  const value = {
    token,
    login,
    logout,
    reLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
