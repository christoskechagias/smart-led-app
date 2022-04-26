import {onAuthStateChanged} from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react';
import {auth} from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => setUser(user));
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
