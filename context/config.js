import React, { createContext, useContext, useReducer } from 'react';
import { ConfigReducer, initialState } from '@reducers/config'

const ConfigStateCtx = createContext();
const ConfigDispatchCtx = createContext();

export function useConfigState() {
  const context = useContext(ConfigStateCtx);

  if (context === undefined) throw new Error('useConfigState must be used within ConfigProvider');

  return context;
}

export function useConfigDispatch() {
  const context = useContext(ConfigDispatchCtx);

  if (context === undefined) throw new Error('useConfigDispatch must be used within ConfigProvider');

  return context;
}

export default function ConfigProvider({ children }) {
  const [settings, dispatch] = useReducer(ConfigReducer, initialState);

  return <ConfigStateCtx.Provider value={settings}>
    <ConfigDispatchCtx.Provider value={dispatch}>
      { children }
    </ConfigDispatchCtx.Provider>
  </ConfigStateCtx.Provider>
}
