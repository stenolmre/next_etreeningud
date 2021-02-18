import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAdminDispatch } from './../../../context/admin'
import { logoutAdmin } from './../../../actions/admin'

const Sidebar = () => {
  const router = useRouter()

  const dispatchAdmin = useAdminDispatch()

  return <div className="admin_sidebar">
    <div className="admin_sidebar_img">
      <img src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,h_113/v1613366877/utils/logo.png" alt="eTreeningud_logo"/>
    </div>
    <div>
      <Anchor name="töölaud" href="dashboard" />
      <Anchor name="tehtud treeningud" href="completedworkouts" />
      <br/>
      <Anchor name="treeningud" href="fitness" />
      <Anchor name="lisa treening" href="addworkout" />
      <Anchor name="lisa liikuvustreening" href="addmobility" />
      <Anchor name="joogatunnid" href="yoga" />
      <Anchor name="lisa joogatund" href="addyoga" />
      <Anchor name="postitused" href="posts" />
      <Anchor name="lisa postitus" href="lisapostitus" />
      <br/>
      <Anchor name="administraatorid" href="admins" />
      <Anchor name="seaded" href="seaded" />
    </div>
    <p style={{ cursor: 'pointer' }}
      onClick={async () => await logoutAdmin(dispatchAdmin, () => router.push('/'))}
    >Logi välja</p>
  </div>
}

const Anchor = ({ href, name }) => {
  const { pathname } = useRouter()

  return <p className={pathname.slice(15) === href ? 'admin_sidebar_active' : ''}><Link href={`/private/admin/${href}`}><a>
    { name }
  </a></Link></p>
}

export default Sidebar