import React, { createContext, useContext, useReducer } from 'react';
import { WriterReducer, initialState } from './../reducers/writer'

const WriterStateCtx = createContext();
const WriterDispatchCtx = createContext();

export function useWriterState() {
  const context = useContext(WriterStateCtx);

  if (context === undefined) throw new Error('useWriterState must be used within WriterProvider');

  return context;
}

export function useWriterDispatch() {
  const context = useContext(WriterDispatchCtx);

  if (context === undefined) throw new Error('useWriterDispatch must be used within WriterProvider');

  return context;
}

export default function WriterProvider({ children }) {
  const [writer, dispatch] = useReducer(WriterReducer, initialState);

  return <WriterStateCtx.Provider value={writer}>
    <WriterDispatchCtx.Provider value={dispatch}>
      { children }
    </WriterDispatchCtx.Provider>
  </WriterStateCtx.Provider>
}
