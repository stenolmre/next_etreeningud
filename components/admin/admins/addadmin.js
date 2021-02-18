import React, { Fragment, useState } from 'react'

import { useAdminState, useAdminDispatch } from './../../../context/admin'
import { addAdmin } from './../../../actions/admin'

export default function AddAdmin({ isOwner }) {
  const dispatchAdmin = useAdminDispatch()
  const { admin, error } = useAdminState()

  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', isAdmin: true, isOwner: false, password: '' })

  const onChange = e => setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const saveAdmin = async () => {
    setProcessing(true)

    await addAdmin(dispatchAdmin, newAdmin, () => {
      setSuccess(true)
      setNewAdmin({ name: '', email: '', isAdmin: true, isOwner: false, password: '' })
    }, () => setErr(true))

    setProcessing(false)
  }

  return <Fragment>
    {
      admin && admin.isAdmin && <div className="admin_add_admin">
        <div className="admin_add_workout admin_page">
          <h3>Lisa Administraator</h3>
          <label>Nimi <span className="form_required">*</span></label>
          <input name="name" value={newAdmin.name} onChange={onChange}/>
          <label>Email <span className="form_required">*</span></label>
          <input name="email" value={newAdmin.email} onChange={onChange}/>
          <label>Administraator <span className="form_required">*</span></label>
          <div className="admin_add_admin_radio_btns_holder">
            <div className={newAdmin.isAdmin ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setNewAdmin({ ...newAdmin, isAdmin: true })}>Jah</div>
            <div className={!newAdmin.isAdmin ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setNewAdmin({ ...newAdmin, isAdmin: false })}>Ei</div>
          </div>
          {
            admin.isOwner && <Fragment>
              <label>Omanik <span className="form_required">*</span></label>
              <div className="admin_add_admin_radio_btns_holder">
                <div className={newAdmin.isOwner ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setNewAdmin({ ...newAdmin, isOwner: true })}>Jah</div>
                <div className={!newAdmin.isOwner ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setNewAdmin({ ...newAdmin, isOwner: false })}>Ei</div>
              </div>
            </Fragment>
          }
          <label>Password <span className="form_required">*</span></label>
          <input type="password" name="password" value={newAdmin.password} onChange={onChange}/>
          <button disabled={processing} className="admin_add_workout_save_btn" onClick={saveAdmin}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Administraator on edukalt salvestatud.</p>}
          {err && <p className="form_error">{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}
