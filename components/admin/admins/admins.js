import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { useAdminState, useAdminDispatch } from './../../../context/admin'
import { getAdmins, removeAdmin } from './../../../actions/admin'

import Layout from './../utils/layout'
import Loader from './../../utils/loader'
import AddAdmin from './addadmin'

export default function Admins({ isOwner }) {
  const dispatchAdmin = useAdminDispatch()
  const { admins, loading, admin, error } = useAdminState()
  console.log(error);

  useEffect(() => {
    getAdmins(dispatchAdmin)
  }, [dispatchAdmin])

  const [search, setSearch] = useState('')

  return <Layout name="Administraatorid" searchbox placeholder="Otsi administraatorit" onChange={e => setSearch(e.target.value)}>
    <div className="admin_page">
      <Header />
      {
        loading
          ? <div className="admin_loader"><Loader /></div>
          : admins && admins.filter(el => el.name.toLowerCase().includes(search.toLowerCase())).map((el, i) => <div key={el._id} className="admin_row admin_list admin_list_admins">
              <p>{i + 1}.</p>
              <p>{el.name}</p>
              <p style={{ textTransform: 'lowercase' }}>{el.email}</p>
              <p>{el.isOwner ? 'Omanik' : el.isAdmin ? 'Administraator' : 'Kasutaja'}</p>
              {
                admin && admin.isOwner && <div>
                  {
                    admin._id === el._id && <Link href={`/private/admin/editadmin?id=${el._id}`}><a>
                      <i className="fas fa-pen"/>
                    </a></Link>
                  }
                  <i className="fas fa-times" onClick={async () => {
                    if (confirm('Kas sa oled kindel, et soovid administraatori kustutada?')) {
                      await removeAdmin(dispatchAdmin, el._id)
                    }
                  }}/>
              </div>
              }
            </div>)
      }
      <AddAdmin isOwner={isOwner}/>
    </div>
  </Layout>
}

const Header = () => <div className="admin_row_header admin_row_header_admins">
  <p>#</p>
  <p>Nimi</p>
  <p>Email</p>
  <p>Staatus</p>
  <p>Muuda</p>
</div>
