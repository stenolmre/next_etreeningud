import React, { useEffect } from 'react'

function useCloser(ref, toggle) {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) toggle()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [ref])
}

export default useCloser
