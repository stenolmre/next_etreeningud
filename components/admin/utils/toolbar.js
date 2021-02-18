import React, { Fragment } from 'react'

import { useAdminState } from './../../../context/admin'

const Toolbar = ({ name, searchbox, onChange, placeholder }) => {
  const { admin } = useAdminState()

  return <div className="admin_toolbar">
    <h2>{name}</h2>
    <div className="admin_toolbar_right">
      {
        searchbox && <Fragment>
          <input onChange={onChange} placeholder={placeholder}/>
          <i className="fas fa-search"/>
        </Fragment>
      }
      {
        admin && <Fragment>
          <div className="admin_toolbar_icon">{admin.name.slice(0, 1)}</div>
          <p>{admin.name}</p>
        </Fragment>
      }
    </div>
  </div>
}

export default Toolbar
