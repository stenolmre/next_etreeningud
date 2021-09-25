import React, { createContext, useContext, useReducer } from 'react';
import { UserReducer, initialState } from '@reducers/user'

const UserStateCtx = createContext();
const UserDispatchCtx = createContext();

export function useUserState() {
  const context = useContext(UserStateCtx);

  if (context === undefined) throw new Error('useUserState must be used within UserProvider');

  return context;
}

export function useUserDispatch() {
  const context = useContext(UserDispatchCtx);

  if (context === undefined) throw new Error('useUserDispatch must be used within UserProvider');

  return context;
}

export default function UserProvider({ children }) {
  const [user, dispatch] = useReducer(UserReducer, initialState);

  return <UserStateCtx.Provider value={user}>
    <UserDispatchCtx.Provider value={dispatch}>
      { children }
    </UserDispatchCtx.Provider>
  </UserStateCtx.Provider>
}
