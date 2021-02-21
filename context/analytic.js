import React, { createContext, useContext, useReducer } from 'react';
import { AnalyticReducer, initialState } from './../reducers/analytic'

const AnalyticStateCtx = createContext();
const AnalyticDispatchCtx = createContext();

export function useAnalyticState() {
  const context = useContext(AnalyticStateCtx);

  if (context === undefined) throw new Error('useAnalyticState must be used within AnalyticProvider');

  return context;
}

export function useAnalyticDispatch() {
  const context = useContext(AnalyticDispatchCtx);

  if (context === undefined) throw new Error('useAnalyticDispatch must be used within AnalyticProvider');

  return context;
}

export default function AnalyticProvider({ children }) {
  const [analytic, dispatch] = useReducer(AnalyticReducer, initialState);

  return <AnalyticStateCtx.Provider value={analytic}>
    <AnalyticDispatchCtx.Provider value={dispatch}>
      { children }
    </AnalyticDispatchCtx.Provider>
  </AnalyticStateCtx.Provider>
}
