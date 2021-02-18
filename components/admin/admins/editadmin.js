import React, { Fragment, useState, useEffect } from 'react'

import { useAdminState, useAdminDispatch } from './../../../context/admin'
import { updateAdmin, getAdmin } from './../../../actions/admin'

import Layout from './../utils/layout'

export default function AddAdmin({ isOwner }) {
  const dispatchAdmin = useAdminDispatch()
  const { admin, error } = useAdminState()

  useEffect(() => { getAdmin(dispatchAdmin) }, [dispatchAdmin])

  const [adminData, setAdminData] = useState({ name: '', email: '', isAdmin: true, isOwner: false, password: '' })

  const onChange = e => setAdminData({ ...adminData, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const saveAdmin = async () => {
    setProcessing(true)

    if (adminData.password !== '' && adminData.password.length > 5) {
      setErr(false)
      await updateAdmin(dispatchAdmin, adminData, () => setSuccess(true), () => setErr(true))
      setProcessing(false)
    } else {
      setErr(true)
    }

    setProcessing(false)
  }

  useEffect(() => {
    setAdminData(adminData => ({ ...adminData,
      name: !admin || !admin.name ? '' : admin.name,
      email: !admin || !admin.email ? '' : admin.email,
      isAdmin: !admin || !admin.isAdmin ? '' : admin.isAdmin,
      isOwner: !admin || !admin.isOwner ? '' : admin.isOwner
    }))
  }, [admin])

  return <Layout name={admin && `${admin.name}`}>
    {
      admin && admin.isAdmin && <div className="admin_add_admin admin_update_admin">
        <div className="admin_add_workout admin_page">
          <h3>Muuda Administraatori Andmeid</h3>
          <label>Nimi <span className="form_required">*</span></label>
          <input name="name" value={adminData.name} onChange={onChange}/>
          <label>Email <span className="form_required">*</span></label>
          <input name="email" value={adminData.email} onChange={onChange}/>
          <label>Administraator <span className="form_required">*</span></label>
          <div className="admin_add_admin_radio_btns_holder">
            <div className={adminData.isAdmin ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setAdminData()({ ...adminData, isAdmin: true })}>Jah</div>
            <div className={!adminData.isAdmin ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setAdminData({ ...adminData, isAdmin: false })}>Ei</div>
          </div>
          {
            admin.isOwner && <Fragment>
              <label>Omanik <span className="form_required">*</span></label>
              <div className="admin_add_admin_radio_btns_holder">
                <div className={adminData.isOwner ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setAdminData({ ...adminData, isOwner: true })}>Jah</div>
                <div className={!adminData.isOwner ? 'admin_add_admin_radio_btn admin_active_btn' : 'admin_add_admin_radio_btn'} onClick={() => setAdminData({ ...adminData, isOwner: false })}>Ei</div>
              </div>
            </Fragment>
          }
          <label>Password <span className="form_required">*</span></label>
          <input type="password" name="password" value={adminData.password} onChange={onChange}/>
          <button disabled={processing} className="admin_add_workout_save_btn" onClick={saveAdmin}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Administraator on edukalt muudetud ja salvestatud.</p>}
          {err && <p className="form_error">{error ? error.msg : 'Salasõna peab olema vähemalt 6 tähemärki pikk.'}</p>}
        </div>
      </div>
    }
  </Layout>
}
