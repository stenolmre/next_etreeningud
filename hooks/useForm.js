import React, { Fragment, useEffect } from 'react'

const useForm = (_default, data, setData) => {
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  let obj = {}

  useEffect(() => {
    _default && Object.keys(_default).forEach(key => {
      return obj[key] = ''
    })

    setData(obj)
  }, [])

  return <Fragment>
    {
      _default && data && Object.entries(data).map(([key, value]) => {
        return <div key={key}>
          <label>{_default[key]}</label>
          <input type={key === 'password' ? 'password' : 'text'} name={key} value={value} onChange={onChange}/>
        </div>
      })
    }
  </Fragment>
}

export default useForm
