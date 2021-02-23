import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import validateEmail from './../../utils/validateemail'

const Form = () => {
  const [contactData, setContactData] = useState({ email: '', message: '' })
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState({ state: false, email: 'Palun sisestage korrektne email.', message: 'Palun sisestage sõnum.' })

  const onChange = e => setContactData({ ...contactData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setProcessing(true)

    if (!validateEmail(contactData.email) && contactData.message === '') {
      setError({ state: true, email: 'Palun sisesta korrektne email.', message: 'Palun sisesta sõnum.' })
      setProcessing(false)
    } else if (!validateEmail(contactData.email)) {
      setError({ state: true, email: 'Palun sisesta korrektne email.', message: '' })
      setProcessing(false)
    } else if (contactData.message === '') {
      setError({ state: true, email: '', message: 'Palun sisesta sõnum.' })
      setProcessing(false)
    } else {
      const templateParams = {
        client_email: contactData.email,
        client_message: contactData.message
      }

      await emailjs.send('gmail', 'feedback_form_people', templateParams, 'user_d35Shv7J12m9DhmwjDmiA')

      setProcessing(false)
      setError({ state: false, email: '', message: '' })
      setSuccess(true)
      setContactData({ email: '', message: '' })
    }
  }

  return <form className="contact_form" onSubmit={onSubmit}>
    <label>Email <span className="form_required">*</span></label>
    <input name="email" value={contactData.email} onChange={onChange}/>
    { error.state && <p className="form_error">{ error.email }</p> }
    <label>Sõnum <span className="form_required">*</span></label>
    <textarea name="message" value={contactData.message} onChange={onChange}/>
    { error.state && <p className="form_error">{ error.message }</p> }
    <button disabled={processing} type="submit">{processing ? 'Saadan..' : 'Saada'}</button>
    { success && <p className="form_success">Sõnum on edukalt saadetud! Aitäh! Vastame Sulle iga hetk.</p> }
  </form>
}

export default Form
