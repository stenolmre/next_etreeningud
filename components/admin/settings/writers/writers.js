import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useSettingsState, useSettingsDispatch } from './../../../../context/settings'
import { updateExercises } from './../../../../actions/settings'

import Loader from './../../../utils/loader'
import EditWriter from './editwriter'
import WritersList from './list'
import AddWriter from './addwriter'

const Writers = () => {
  const { query } = useRouter()

  const dispatchSettings = useSettingsDispatch()
  const { id, blog_writers, loading, error } = useSettingsState()

  const [showWriters, setShowWriters] = useState(true)

  useEffect(() => { query.id ? setShowWriters(false) : setShowWriters(true) }, [query.id])

  return <Fragment>
    {
      showWriters
        ? loading ? <div><Loader/></div> : blog_writers && <Fragment>
            <WritersList writers={blog_writers}/>
            <AddWriter error={error}/>
          </Fragment>
        : loading ? <div><Loader/></div> : blog_writers && <EditWriter error={error}/>
    }
  </Fragment>
}

export default Writers
