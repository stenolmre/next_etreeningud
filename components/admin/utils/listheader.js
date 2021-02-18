import React from 'react'

const Header = ({ posts }) => {
  return <div className={posts ? 'admin_row_posts_header admin_row_header' : 'admin_row_header'}>
    <p>#</p>
    <p>Nimi</p>
    <p>{posts ? 'Kategooria' : 'Treening'}</p>
    <p>{posts ? 'Autor' : 'Kestvus'}</p>
    <p>{posts ? 'Kuupäev' : 'Vahendid'}</p>
    <p>Muuda</p>
  </div>
}

export default Header
