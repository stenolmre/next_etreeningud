import React, { createContext, useContext, useReducer } from 'react';
import { SettingsReducer, initialState } from './../reducers/settings'

const SettingsStateCtx = createContext();
const SettingsDispatchCtx = createContext();

export function useSettingsState() {
  const context = useContext(SettingsStateCtx);

  if (context === undefined) throw new Error('useSettingsState must be used within SettingsProvider');

  return context;
}

export function useSettingsDispatch() {
  const context = useContext(SettingsDispatchCtx);

  if (context === undefined) throw new Error('useSettingsDispatch must be used within SettingsProvider');

  return context;
}

export default function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(SettingsReducer, initialState);

  return <SettingsStateCtx.Provider value={settings}>
    <SettingsDispatchCtx.Provider value={dispatch}>
      { children }
    </SettingsDispatchCtx.Provider>
  </SettingsStateCtx.Provider>
}
