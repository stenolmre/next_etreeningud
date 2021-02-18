import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useWriterState, useWriterDispatch } from './../../../../context/writer'
import { updateWriter, removeWriter, addWriter, getWriters } from './../../../../actions/writer'

import Loader from './../../../utils/loader'
import EditWriter from './editwriter'
import WritersList from './list'
import AddWriter from './addwriter'

const Writers = () => {
  const { query } = useRouter()

  const dispatchWriter = useWriterDispatch()
  const { writers, loading, error } = useWriterState()

  useEffect(() => { getWriters(dispatchWriter) }, [dispatchWriter])

  const [showWriters, setShowWriters] = useState(true)

  useEffect(() => { query.id ? setShowWriters(false) : setShowWriters(true) }, [query.id])

  return <Fragment>
    {
      showWriters
        ? loading ? <div><Loader/></div> : writers && <Fragment>
            <WritersList writers={writers} removeWriter={removeWriter} dispatchWriter={dispatchWriter}/>
            <AddWriter error={error} addWriter={addWriter} dispatchWriter={dispatchWriter}/>
          </Fragment>
        : loading ? <div><Loader/></div> : writers && <EditWriter />
    }
  </Fragment>
}

export default Writers
