import React, { createContext, useContext, useReducer } from 'react';
import { FitnessReducer, initialState } from './../reducers/fitness'

const FitnessStateCtx = createContext();
const FitnessDispatchCtx = createContext();

export function useFitState() {
  const context = useContext(FitnessStateCtx);

  if (context === undefined) throw new Error('useFitState must be used within FitnessProvider');

  return context;
}

export function useFitDispatch() {
  const context = useContext(FitnessDispatchCtx);

  if (context === undefined) throw new Error('useFitDispatch must be used within FitnessProvider');

  return context;
}

export default function FitnessProvider({ children }) {
  const [fitness, dispatch] = useReducer(FitnessReducer, initialState);

  return <FitnessStateCtx.Provider value={fitness}>
    <FitnessDispatchCtx.Provider value={dispatch}>
      { children }
    </FitnessDispatchCtx.Provider>
  </FitnessStateCtx.Provider>
}
