import React, { createContext, useContext, useReducer } from 'react';
import { PostReducer, initialState } from './../reducers/post'

const PostStateCtx = createContext();
const PostDispatchCtx = createContext();

export function usePostState() {
  const context = useContext(PostStateCtx);

  if (context === undefined) throw new Error('usePostState must be used within PostProvider');

  return context;
}

export function usePostDispatch() {
  const context = useContext(PostDispatchCtx);

  if (context === undefined) throw new Error('usePostDispatch must be used within PostProvider');

  return context;
}

export default function PostProvider({ children }) {
  const [post, dispatch] = useReducer(PostReducer, initialState);

  return <PostStateCtx.Provider value={post}>
    <PostDispatchCtx.Provider value={dispatch}>
      { children }
    </PostDispatchCtx.Provider>
  </PostStateCtx.Provider>
}
