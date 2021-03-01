import React from 'react'

const Header = ({ index }) => {
  return <div className="admin_row_analytics_header admin_row_header">
    <p>{index}</p>
    <p>Külastatavus</p>
    <p>Tehtud Treeningud</p>
    <p>Loetud Postitused</p>
  </div>
}

export default Header
