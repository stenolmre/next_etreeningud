import React, { useState } from 'react'

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false)

  return <div className={`sidebar ${show ? '' : 'sidebar_closed'}`}>
    <div className="sidebar_content">
      {children}
    </div>
    <i className="fas fa-chevron-left sidebar_btn" onClick={() => setShow(!show)}/>
  </div>
}

export default Sidebar
