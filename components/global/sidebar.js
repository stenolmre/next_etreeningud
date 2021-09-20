import React, { useState } from 'react'

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  const mouseEnter = (e) => {
    if (!isExpanded) return setIsMinimized(true)
  }

  const mouseLeave = (e) => {
    if (!isExpanded) return setIsMinimized(false)
  }

  return <div
    className={`sidebar ${isExpanded || isMinimized ? '' : 'sidebar_minimized'}`}
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}
  >
    <i className={`fas fa-chevron-${isExpanded ? 'left' : 'right'} sidebar_toggle_button`} onClick={() => setIsExpanded(!isExpanded)}/>
    <div className="sidebar_content">
      { children }
    </div>
  </div>
}

export default Sidebar
