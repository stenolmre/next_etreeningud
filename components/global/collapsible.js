import React, { useState } from 'react'

const Collapsible = ({ children, title, icon }) => {
  const [collapsed, setCollapsed] = useState(true)

  return <section className="collapsible">
    <div className="collapsible_title" onClick={() => setCollapsed(!collapsed)}>
      <i className={icon}/>
      <span>{title}</span>
      <i className={`fas fa-chevron-down ${collapsed ? '' : 'upside-down'}`}/>
    </div>
    <div className="collapsible_content">
      {!collapsed && children}
    </div>
  </section>
}

export default Collapsible
