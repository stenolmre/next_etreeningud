import React, { Fragment } from 'react'
import Link from 'next/link'

const WritersList = ({ writers, removeWriter, dispatchWriter }) => {
  return <Fragment>
    <Header />
    <div className="admin_settings_writer_page">
      {
        writers.map((el, i) => <div key={i} className="admin_row admin_list admin_settings_writer_row">
          <img src={el.image} alt={el.name}/>
          <p>{el.name}</p>
          <p style={{ textTransform: 'none', width: '95%' }}>{el.bio.substring(0, 100)}..</p>
          <div>
            {
              el.social_links.map((x, i) => <i key={i} className={x.icon} />)
            }
          </div>
          <div>
            <Link href={`/private/admin/settings?page=writers&id=${el._id}`}><a>
              <i className="fas fa-pen"/>
            </a></Link>
          <i className="fas fa-times" onClick={async () => removeWriter(dispatchWriter, el._id)}/>
          </div>
        </div>)
      }
    </div>
  </Fragment>
}

export default WritersList

const Header = () => <div className="admin_row_header admin_settings_writer_row_header">
  <p>#</p>
  <p>Nimi</p>
  <p>Kirjeldus</p>
  <p>Sotsiaalmeedia</p>
  <p>Muuda</p>
</div>
