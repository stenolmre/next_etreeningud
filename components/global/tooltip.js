import React, { useState } from 'react'

const Tooltip = ({ children, tooltip, position = 'top' }) => {
  const [visible, setVisible] = useState(false)

  return <div className="tooltip">
    <span onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
    </span>
    {
      visible && <span className={position += ' tip'}>{tooltip}</span>
    }
  </div>
}

export default Tooltip
