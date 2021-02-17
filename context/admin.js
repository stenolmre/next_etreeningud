import React, { createContext, useContext, useReducer } from 'react';
import { AdminReducer, initialState } from './../reducers/admin'

const AdminStateCtx = createContext();
const AdminDispatchCtx = createContext();

export function useAdminState() {
  const context = useContext(AdminStateCtx);

  if (context === undefined) throw new Error('useAdminState must be used within AdminProvider');

  return context;
}

export function useAdminDispatch() {
  const context = useContext(AdminDispatchCtx);

  if (context === undefined) throw new Error('useAdminDispatch must be used within AdminProvider');

  return context;
}

export default function AdminProvider({ children }) {
  const [admin, dispatch] = useReducer(AdminReducer, initialState);

  return <AdminStateCtx.Provider value={admin}>
    <AdminDispatchCtx.Provider value={dispatch}>
      { children }
    </AdminDispatchCtx.Provider>
  </AdminStateCtx.Provider>
}
