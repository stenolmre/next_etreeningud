import React, { useState, useEffect } from 'react'

const Sidebar = ({ children }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false)
    }
  }, [])

  return <div className={`sidebar ${isExpanded ? '' : 'sidebar_minimized'}`}>
    <i className={`fas ${isMobile ? 'fa-sort-amount-down-alt' : isExpanded ? 'fa-chevron-left' : 'fa-chevron-right'} sidebar_toggle_button`} onClick={() => setIsExpanded(!isExpanded)}/>
    <div className="sidebar_content">
      { children }
    </div>
  </div>
}

export default Sidebar
