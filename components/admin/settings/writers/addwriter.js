import React, { useState } from 'react'

const AddWriter = ({ error, addWriter, dispatchWriter }) => {
  const [newWriter, setNewWriter] = useState({
    name: '', image: '', bio: '', social_links: []
  })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const onChange = e => setNewWriter({ ...newWriter, [e.target.name]: e.target.value })

  const addNewSocialLink = () => {
    newWriter.social_links.push({ link: '', icon: '' })
    setNewWriter({ ...newWriter })
  }

  const saveWriter = async () => {
    setProcessing(true)
    await addWriter(dispatchWriter, newWriter, () => {
      setSuccess(true)
      setNewWriter({ name: '', image: '', bio: '', social_links: [] })
    }, () => setErr(true))
    setProcessing(false)
  }

  return <div className="admin_settings_page admin_settings_writers">
    <h3>Lisa Autor</h3>
    <label>Nimi <span className="form_required">*</span></label>
    <input name="name" value={newWriter.name} onChange={onChange}/>
    <label>Pildi URL <span className="form_required">*</span></label>
    <input name="image" value={newWriter.image} onChange={onChange}/>
    <label>Kirjeldus <span className="form_required">*</span></label>
    <textarea name="bio" value={newWriter.bio} onChange={onChange}/>
    <label>Sotsiaalmeedia <span className="form_required">*</span></label>
    {
      newWriter.social_links.map((el, i) => <div key={i} className="admin_settings_exercises_row">
        <select
          name="icon"
          id="icon"
          onChange={e => {
            newWriter.social_links[i].icon = e.target.value
            setNewWriter({ ...newWriter })
          }}
          value={newWriter.social_links[i].icon}
        >
          <option value="" disabled={newWriter.social_links[i].icon !== ''}>..</option>
          {
            social_icons_list.map((el, i) => <option key={i} value={el.icon}>{el.name}</option>)
          }
        </select>
        <input
          className="middle_input"
          name="fit_exercises_name"
          value={newWriter.social_links[i].link}
          onChange={e => {
            newWriter.social_links[i].link = e.target.value
            setNewWriter({ ...newWriter })
          }}
        />
        <i className="fas fa-times" onClick={() => {
          const newArray = newWriter.social_links.filter((x, index) => index !== i)
          setNewWriter({ ...newWriter, social_links: newArray })
        }}/>
      </div>)
    }
    <div style={{ margin: '10px 0 25px 0' }}>
      <button onClick={addNewSocialLink} className="admin_settings_add_writer_btn"><i className="fas fa-plus"/></button>
    </div>
    <button onClick={saveWriter} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
    {success && <p className="form_success">Salvestatud</p>}
    {err && <p>{error && error.msg}</p>}
  </div>
}

export default AddWriter

const social_icons_list = [
  { name: 'Instagram', icon: 'fab fa-instagram' },
  { name: 'Facebook', icon: 'fab fa-facebook' },
  { name: 'Twitter', icon: 'fab fa-twitter' },
  { name: 'Youtube', icon: 'fab fa-youtube' },
  { name: 'Spotify', icon: 'fab fa-spotify' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { name: 'Mail', icon: 'fas fa-envelope' },
  { name: 'Phone', icon: 'fas fa-mobile-alt' },
  { name: 'Pinterest', icon: 'fab fa-pinterest' },
  { name: 'Google', icon: 'fab fa-google' },
]
